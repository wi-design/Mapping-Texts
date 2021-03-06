#!/usr/bin/env python
#
# Mapping Texts v1.0
#
# Project Name: Mapping Texts
# URL: mappingtexts.org
#
# Copyright 2012 Wi-Design, Inc.
# Website: wi-design.com
# Contact: info@wi-design.com

import os.path
import logging

import random

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
			
			#(r"/clipboard", ClipboardTestHandler),
		]
		
		settings = dict(
			#template_path=os.path.join(os.path.dirname(__file__), "templates"),
			template_path=os.path.join(os.path.dirname(__file__), "publish/templates"),
			#static_path=os.path.join(os.path.dirname(__file__), "static"),
			static_path=os.path.join(os.path.dirname(__file__), "publish/static"),
			#debug = True,
		)
		
		tornado.web.Application.__init__(self, handlers, **settings)
		
		# have one global connection list to redises accross all handlers
		redis_db_servers = ['localhost', '50.57.75.50', '50.57.52.58', '50.57.52.157',]
		self.redis_connections = [ (server, redis.StrictRedis(host=server, port=options.redis_port, db=options.redis_db)) for server in redis_db_servers]
		#self.r = redis.StrictRedis(host=options.redis_host, port=options.redis_port, db=options.redis_db)			



class BaseHandler(tornado.web.RequestHandler):
	@property
	def r(self):
		choice = random.choice(self.application.redis_connections)
		server, conn = choice
		logging.info("Using server %s" % server)
		return conn
	
	
	#
	# make redis keys
	def make_pubseq_key(self, pubseq):
		return "pub:%s" % pubseq

	def make_pub_set_by_year_key(self, year):
		return "pub:y:%s" % year

	def make_sorted_set_key(self, prefix, pubseq, year):
		return "%s:%s:%s" % (prefix, pubseq, year)
		
#	def make_range_key(self, prefix, years):
#		y1, y2 = years
#		return "%s:%s:%s" % (prefix, y1, y2)
	
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
	# private helpers	for WCC, NER key list generation
	def compute_sorted_set(self, prefix, years, user_city_pub_list):
		num_of_pubs = len(user_city_pub_list)
		
		logging.info("%s: # OF PUBS = %s" % (prefix, num_of_pubs))
		
		if num_of_pubs == 0:
			return []
		
		if years == (1829, 2008) and num_of_pubs == 114:
			logging.info('Using cached results for %s' % prefix)
			everything_key = "%s:all" % prefix
			return self.r.zrevrange(everything_key, 0, 49, withscores=True)
	
		key_list = self.make_keylist(prefix, years, user_city_pub_list)
		logging.info("%%%%% pipeline above if bottleneck")
	
		if not key_list:
			return []
			
		pipe = self.r.pipeline()
		temp_res = 'out'
		
		pipe.zunionstore(temp_res, key_list)
		pipe.zrevrange(temp_res, 0, 49, withscores=True)
		pipe.delete(temp_res)
		
		status1, result, status2 = pipe.execute()
		return result
	
	def make_keylist(self, prefix, years, user_city_pub_list):
		total_user_pubseq_set = set( self.make_total_user_pubseq_set(user_city_pub_list) )

		key_list = []
		for year in self.make_range(years):

			pubseq_set_for_year = self.r.smembers( self.make_pub_set_by_year_key(year) )

			user_pubseq_set_for_year = pubseq_set_for_year.intersection(total_user_pubseq_set)

			for pubseq in user_pubseq_set_for_year:
				key_list.append( self.make_sorted_set_key(prefix, pubseq, year) )

		#logging.info("final key list:")
		#logging.info("keys => %s" % key_list)
		return key_list
			
	def make_total_user_pubseq_set(self, user_city_pub_list):
		pipe = self.r.pipeline()
		
		for elem in user_city_pub_list:
			city, pub = elem.split(':')
			pub_rev_key = self.make_pub_rev_key( city, pub )
			pipe.get(pub_rev_key)
		
		return pipe.execute()

	def make_range(self, years):
		y1, y2 = years
		return range(y1, y2 + 1) # +1 to make inclusive
	


	
				
	
	
	def parse_query_params(self):
		# years query string
		y1 = int( self.get_argument("y1", default="1829") )
		y2 = int( self.get_argument("y2", default="2008") )
		years = (y1, y2)
		
		# pubs query string
		user_city_pub_list = self.request.arguments.get("pubs[]")	# e.g. ['abilene:the_reata', 'abilene:the_optimist']
		if not user_city_pub_list: user_city_pub_list = set()
		
		return years, user_city_pub_list
	

		



#
# ---- Handlers
#
class WccHandler(BaseHandler):
	def get(self):
		logging.info('** WCC **')
		
		years, user_city_pub_list = self.parse_query_params()
		
		#logging.info('user: %s' % user_city_pub_list)
		
		wcc = self.compute_sorted_set('wcc', years, user_city_pub_list)
		
		result = {}
		result['wcc'] = [
			{ 'word': pair[0], 'count': pair[1] } for pair in wcc
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class NerHandler(BaseHandler):
	def get(self):
		logging.info('** NER **')
		
		years, user_city_pub_list = self.parse_query_params()
		
		#logging.info('user: %s' % user_city_pub_list)
		
		ner = self.compute_sorted_set('ner', years, user_city_pub_list)
		
		result = {}
		result['ner'] = [
			{ 'entity': pair[0].split(':')[1], 'type': pair[0].split(':')[0], 'count': pair[1] } for pair in ner
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class TopicHandler(BaseHandler):
	def get(self):
		epoch = self.get_argument("v", default=None)
		postfix = self.get_argument("postfix", default=None)
		
		if postfix is None:
			if epoch is not None:
				topics = self.r.get( self.make_topic_key_epoch(epoch) )
			else:
				topics = None
		else:
			if epoch is not None:
				topics = self.r.get( self.make_topic_key_epoch_postfix(epoch, postfix) )
			else:
				raise Exception('epoch not given as query param, required.')
		
		models = topics.split('<br>') if topics else []
		result = {}
		result['topics'] = [{'model': m.strip()} for m in models]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")
		



class PubsHandler(BaseHandler):
	def get(self):
		years, ignore = self.parse_query_params()
		
		logging.info("** City & Pub **")
		
		pubset_keys = [self.make_pub_set_by_year_key(year) for year in self.make_range(years)]
		pubseq_list = self.r.sunion(pubset_keys)

		#logging.info("pubset keys: %s" % pubset_keys)
		#logging.info("pubseq list: %s" % pubseq_list)
		
		pipe = self.r.pipeline()
		
		for pubseq_key in self.get_pubseq_key(pubseq_list):
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
			{ 'city': key, 'pubs': publoc[key] } for key in publoc.iterkeys()
		]
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")
	
	
	
class ConfigHandler(BaseHandler):
	def get(self):
		logging.info("** Config **")
		
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
			'start': int(start),
			'end': int(end),
			'epochs': [{ 'years': key, 'era': epochs[key], 'begin': int(key.split('-')[0]), 'end': int(key.split('-')[1]) } for key in epoch_keys],
		}
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class HomeHandler(BaseHandler):
	def get(self):
		self.render("index.html")

class ClipboardTestHandler(BaseHandler):
	def get(self):
		self.render("clipboard.html")

		
def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()