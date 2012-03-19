#!/usr/bin/env python
#
# (c) 2012 Wi-Design, Inc.

import os.path
import logging

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

import redis

import simplejson as json

from tornado.options import define, options

define("port", 				default=8888, 				help="run on the given port",				type=int)
define("redis_host",	default='localhost',	help='host for redis server')
define("redis_db",		default=0,						help='db to use from redis server',	type=int)
define("redis_port",	default=6379,					help='port for redis server',				type=int)


class Application(tornado.web.Application):
	def __init__(self):
		handlers = [
			(r"/", HomeHandler),
			(r"/pub", PubsHandler),
			(r"/wcc", WccHandler),
			(r"/ner", NerHandler),
			(r"/topic", TopicHandler),
			(r'/config', ConfigHandler),
		]
		
		settings = dict(
			template_path=os.path.join(os.path.dirname(__file__), "templates"),
			static_path=os.path.join(os.path.dirname(__file__), "static"),
		)
		
		tornado.web.Application.__init__(self, handlers, **settings)
		
		# have one global connection to redis db accross all handlers
		self.r = redis.StrictRedis(host=options.redis_host, port=options.redis_port, db=options.redis_db)			



class BaseHandler(tornado.web.RequestHandler):
	@property
	def r(self):
		return self.application.r
	
	# ---- make redis keys
	def make_pubseq_key(self, pubseq):
		return "pub:%s" % pubseq
	
	def make_range_key(self, prefix, years):
		y1, y2 = years
		return "%s:%s:%s" % (prefix, y1, y2)
	
	def make_pub_set_by_year_key(self, year):
		return "pub:y:%s" % year
	
	def make_sorted_set_key(self, prefix, pubseq, year):
		return "%s:%s:%s" % (prefix, pubseq, year)
	
	def make_pub_rev_key(self, city, pub):
		return "pub:%s:%s" % (city, pub)
	
	def make_topic_key_epoch(self, epoch):
		return "topics:%s" % epoch
	
	def make_topic_key_epoch_postfix(self, epoch, postfix):
		return "topics:%s:%s" % (epoch, postfix)
	
	def make_topics_epoch_pubs_key(self, epoch):
		return "topics:y:%s" % epoch
	
	def get_pubseq_key(self, pubseq_list):
		for pubseq in pubseq_list:
			yield self.make_pubseq_key(pubseq)

	#
	# ---- private helpers
	#
	
	# transform implementation 1
	def default_transform(self, filter_out_set):
		return filter_out_set
		
	# transform implementation 2
	def get_pubseq_from_revkey(self, filter_out_set):
		for elem in filter_out_set:
			city, pub = elem.split(':')
			yield self.make_pub_rev_key( city, pub )
		
			
	def filter_out(self, base_set=set(), filter_out_set=set(), transform=None):
		pipe = self.application.r.pipeline()
		
		logging.info("@@@ filter out set UN-transformed: %s" % filter_out_set)
		
		for filter_out_elem in transform( filter_out_set ):
			logging.info("\t@@@ filter out elemenet transformed: %s" % filter_out_elem)
			pipe.get(filter_out_elem)
		
		for pubseq in pipe.execute():
			logging.info("\trying to filtered out pubseq %s" % pubseq)
			if pubseq in base_set:
				base_set.remove( pubseq )
				logging.info("\tfiltered out pubseq %s" % pubseq)

		return base_set
	
	def _make_range(self, years):
		y1, y2 = years
		return range(y1, y2 + 1) # +1 to make inclusive
	
	def get_pubset_keys_from_years(self, years):
		return [self.make_pub_set_by_year_key(year) for year in self._make_range(years)]
			
	def _make_all_keys_from_years(self, prefix, years, filter_out_pubs):
		year_range = self._make_range(years)
		
		key_list = []
		for year in year_range:
			logging.info("year %s ..." % year)
			all_pubseq_for_year = self.filter_out( 
					base_set=self.application.r.smembers( self.make_pub_set_by_year_key(year) ),
					filter_out_set=filter_out_pubs,
					transform=self.get_pubseq_from_revkey
			)
			
			for pubseq in all_pubseq_for_year:
				key_list.append( self.make_sorted_set_key(prefix, pubseq, year) )
		
		logging.info("final key list:\n")
		logging.info("keys => %s" % key_list)
		return key_list
	
				
	
	
	def parse_query_params(self):
		# years query strings
		y1 = int( self.get_argument("y1", default="1829") )
		y2 = int( self.get_argument("y2", default="2008") )
		years = (y1, y2)
		
		# remove pubs from query
		filter_out_pubs =self.request.arguments.get("x_pubs[]")	# e.g. ['abilene:the_reata', 'abilene:the_optimist']
		if not filter_out_pubs: filter_out_pubs = set()
		
		return years, filter_out_pubs
	
	#
	# ---- main functions
	#
	def get_sorted_set(self, prefix, years, filter_out_pubs=set(), p=0):
		key_list = self._make_all_keys_from_years(prefix, years, filter_out_pubs)
		
		if not key_list:
			return []
			
		pipe = self.application.r.pipeline()
		temp_res = 'out'
		
		pipe.zunionstore(temp_res, key_list)
		pipe.zrevrange(temp_res, 0, 24, withscores=True)
		pipe.delete(temp_res)
		
		status1, result, status2 = pipe.execute()
		return result
		



#
# ---- Handlers
#
class WccHandler(BaseHandler):
	def get(self):
		years, filter_out_pubs = self.parse_query_params()
		
		wcc = self.get_sorted_set('wcc', years, filter_out_pubs=filter_out_pubs)
		
		result = {}
		result['wcc'] = [
			{ 'word': pair[0], 'count': pair[1] } for pair in wcc
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class NerHandler(BaseHandler):
	def get(self):
		years, filter_out_pubs = self.parse_query_params()
		
		ner = self.get_sorted_set('ner', years, filter_out_pubs=filter_out_pubs)
		
		result = {}
		result['ner'] = [
			{ 'entity': pair[0].split(':')[1], 'type': pair[0].split(':')[0], 'count': pair[1] } for pair in ner
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class TopicHandler(BaseHandler):
	def get(self):
		epoch = self.get_argument("v", default="1829:1835")
		postfix = self.get_argument("postfix", default=None)
		
		if postfix is None:
			topic_key = self.make_topic_key_epoch(epoch)
		else:
			topic_key = self.make_topic_key_epoch_postfix(epoch, postfix)
		
		result = {
			'topics': self.r.get(topic_key)
		}
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")
		



class PubsHandler(BaseHandler):
	def get(self):
		epoch = self.get_argument("epoch", default=None)
		
		logging.info("=== Location & Publications ===")
		
		if not epoch:
			years, filter_out_pubs = self.parse_query_params()
			
			pubset_keys = self.get_pubset_keys_from_years(years)
			pubseq_list = self.r.sunion(pubset_keys)

			logging.info("pubset keys: %s" % pubset_keys)
			logging.info("pubseq list: %s" % pubseq_list)

			final_pubseq_list = self.filter_out( 
					base_set=pubseq_list,
					filter_out_set=filter_out_pubs,
					transform=self.get_pubseq_from_revkey
			)
			
			logging.info("")
			logging.info("final pubseq list: %s" % final_pubseq_list)
			
		else:
			topics_epoch_pubs_key = self.make_topics_epoch_pubs_key(epoch)
			
			final_pubseq_list = self.r.smembers(topics_epoch_pubs_key)
			
			logging.info("pubset key (topic): %s" % topics_epoch_pubs_key)
			logging.info("pubseq list: %s" % final_pubseq_list)
			
			logging.info("")
			logging.info("final pubseq list: %s" % final_pubseq_list)
		
		

		
		
		pipe = self.r.pipeline()
		for pubseq_key in self.get_pubseq_key(final_pubseq_list):
			pipe.hgetall( pubseq_key )
		
		publoc = {}
		for item in pipe.execute():
			pubseq, city, pub = item['pubseq'], item['loc'], item['val']
			if city in publoc:
				publoc[city].append({'pubseq': pubseq, 'pub': pub})
			else:
				publoc[city] = [{'pubseq': pubseq, 'pub': pub}]
		
		result = {}
		result['pubs'] = [
			{ 'city': key, 'pubs': publoc[key] } for key in sorted(publoc.iterkeys())
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")
	
	
	
class ConfigHandler(BaseHandler):
	def get(self):
		pipe = self.r.pipeline()
		
		pipe.hgetall('templates')
		pipe.hget('years', 'start')
		pipe.hget('years', 'end')
		pipe.hgetall('epochs')
		
		templates, start, end, epochs = pipe.execute()
		
		epoch_keys = epochs.keys()
		epoch_keys.sort()
		
		result = {
			'templates': templates,
			'start': start,
			'end': end,
			'epochs': [{ 'years': key, 'era': epochs[key] } for key in epoch_keys],
		}
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class HomeHandler(BaseHandler):
	def get(self):
		self.render("index.html")



		
def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()