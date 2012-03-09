#!/usr/bin/env python
#
# Copyright 2012 Wi-Design, Inc.

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
			(r"/wcc", WccHandler),
			(r"/ner", NerHandler),
		]
		
		settings = dict()
		
		tornado.web.Application.__init__(self, handlers, **settings)
		
		# have one global connection to redis db accross all handlers
		self.r = redis.StrictRedis(host=options.redis_host, port=options.redis_port, db=options.redis_db)			



class BaseHandler(tornado.web.RequestHandler):
	@property
	def r(self):
		return self.application.r
	
	# ---- make redis keys
	def make_range_key(self, prefix, years):
		y1, y2 = years
		return "%s:%s:%s" % (prefix, y1, y2)
	
	def make_pub_set_by_year_key(self, year):
		return "pub:y:%s" % year
	
	def make_sorted_set_key(self, prefix, pubseq, year):
		return "%s:%s:%s" % (prefix, pubseq, year)
	
	def make_pub_rev_key(self, city, pub):
		return "pub:%s:%s" % (city, pub)
	
	
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
		
		for filter_out_elem in transform( filter_out_set ):
			pipe.get(filter_out_elem)
		
		for pubseq in pipe.execute():
			if pubseq in base_set:
				base_set.remove( pubseq )
				logging.info("\tfiltered out pubseq %s" % pubseq)

		return base_set
		
	def _make_all_keys_from_years(self, prefix, years, filter_out_pubs):
		y1, y2 = years
		year_range = range(y1, y2 + 1) # +1 to make inclusive
		
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
	
				
	
	
	
	#
	# ---- main functions
	#
	def get_sorted_set(self, prefix, years, filter_out_pubs=set(), p=0):
		key_list = self._make_all_keys_from_years(prefix, years, filter_out_pubs)
		
		pipe = self.application.r.pipeline()
		temp_res = 'out'
		
		pipe.zunionstore(temp_res, key_list)
		pipe.zrevrange(temp_res, 0, 24, withscores=True)
		pipe.delete(temp_res)
		
		status1, result, status2 = pipe.execute()
		return result
		

class WccHandler(BaseHandler):
	def get(self):
		# ---- Parse query string
		#
		
		# years query strings
		y1 = int( self.get_argument("y1", default="1829") )
		y2 = int( self.get_argument("y2", default="2008") )
		years = (y1, y2)
		
		# remove pubs from query
		filter_out_pubs =self.request.arguments.get("x_pubs[]")	# ['abilene:the_reata', 'abilene:the_optimist']
		if not filter_out_pubs: filter_out_pubs = set()
		
		
		wcc = self.get_sorted_set('wcc', years, filter_out_pubs=filter_out_pubs)
		
		result = {
			'wcc': wcc
		}
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")

class NerHandler(BaseHandler):
	def get(self):
		# ---- Parse query string
		#
		
		# years query strings
		y1 = int( self.get_argument("y1", default="1829") )
		y2 = int( self.get_argument("y2", default="2008") )
		years = (y1, y2)
		
		# remove pubs from query
		filter_out_pubs =self.request.arguments.get("x_pubs[]")	# ['abilene:the_reata', 'abilene:the_optimist']
		if not filter_out_pubs: filter_out_pubs = set()
		
		ner = self.get_sorted_set('ner', years, filter_out_pubs=filter_out_pubs)
		
		result = {
			'ner': ner
		}
		
		self.write( json.dumps(result, ensure_ascii=False, encoding="UTF-8") )
		self.set_header("Content-Type", "application/json; charset=UTF-8")



def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()