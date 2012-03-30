import sys, os, re

import redis

REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)

TEXAS = 'texas'


TITLE = 'title'
TYPE = 'type'
LOCATION = 'location'
YEAR = 'year'
COUNT = 'count'
WORD = 'word'
ENTITY = 'entity'


# wcc
WCC_FILE_READ = 0
WCC_TOTAL_FILES = 853


WCC_Y_L_T = set()
WCC_Y_L_T.add(TITLE)
WCC_Y_L_T.add(LOCATION)
WCC_Y_L_T.add(YEAR)
WCC_Y_L_T.add(COUNT)
WCC_Y_L_T.add(WORD)

WCC_TITLE_INDEX = 0
WCC_LOCATION_INDEX = 1
WCC_YEAR_INDEX = 2
WCC_COUNT_INDEX = 3
WCC_WORD_INDEX = 4



# ner
NER_Y_L_T = set()
NER_Y_L_T.add(TITLE)
NER_Y_L_T.add(LOCATION)
NER_Y_L_T.add(YEAR)
NER_Y_L_T.add(TYPE)
NER_Y_L_T.add(COUNT)
NER_Y_L_T.add(ENTITY)

NER_TITLE_INDEX = 0
NER_LOCATION_INDEX = 1
NER_YEAR_INDEX = 2
NER_TYPE_INDEX = 3
NER_COUNT_INDEX = 4
NER_ENTITY_INDEX = 5


PATTERN = re.compile(r"""\[(.+?)\]""")
PATTERN2 = re.compile(r"""[^\t]+""")



# topic filename patterns
# 10.topic-keys.1829-01-01_1836-04-21.tsv
EPOCH_PATTERN = re.compile(r"""10\.topic-keys\.(?P<epoch>.+?)\.tsv""")
# 10.topic-keys.Abilene,_Texas,_1929-10-30_1941-12-07.tsv
LOCATION_EPOCH_PATTERN = re.compile(r"""10\.topic-keys\.(?P<location>.+?),(?P<state>.+?),(?P<epoch>.+?)\.tsv""")
# 10.topic-keys.Brazos_Courier,_Brazoria,_Texas,_1836-04-22_1845-12-29
TITLE_LOCATION_EPOCH_PATTERN = re.compile(r"""10\.topic-keys\.(?P<title>.+?),(?P<location>.+?),(?P<state>.+?),(?P<epoch>.+?)\.tsv""") 

TOPIC_LINE_PATTER = re.compile(r"""[\d\t]+?(?P<topic>[^\d\t]+)""")

# Exception patterns
RICHMOND_TELESCOPE_PATTERN = re.compile(r""".*?Richmond.+?Telescope.+?Register.*?""", re.I)


STATES = set()




#
# helpers
#
def setEquivalent(s1, s2):
	r1 = s1 - s2
	r2 = s2 - s1
	return len(r1) == 0 and len(r2) == 0

def correctFromExceptions(title):
	if RICHMOND_TELESCOPE_PATTERN.match(title):
		return "Richmond Telescope & Register"
	else:
		return title

def listFiles(top):
	return [os.path.join(top, filename) for filename in os.listdir(top)]

def slugify(a):
	return a.replace(" ", "_")







#
# BASE implementation
#
def makeLocKey(locseq):
	return "loc:%s" % locseq
def makeLocReverseKey(city):
	return "loc:%s" % slugify(city)

def makePubKey(pubseq):
	return "pub:%s" % pubseq
def makePubReverseKey(city, title):
	return "pub:%s:%s" % (slugify(city), slugify(title))


def redisLocPubSchema(title=None, city=None, state=None, year=None):
	if not city or not state:
		raise Exception("ERROR: redisLocPubSchema was given None for either city or state")
		
	locLookupKey = makeLocReverseKey(city)

	if REDIS.exists(locLookupKey):
		locseq = REDIS.get(locLookupKey)
		
	else:
		print "INSERT: redis location (%s)" % city
		
		locseq = REDIS.incr('loc:seq')
		
		REDIS.set(locLookupKey, locseq)
		
		key = makeLocKey(locseq)
		status1 = REDIS.hset(key, 'val', city)
		status2 = REDIS.hset(key, 'state', state)
		
		if status1 == 0 or status2 == 0:
			raise Exception("ERROR: Problem inserting location redis hash with values (%s, %s) and key (%s)" % (city, state, key))
		
	
	# ----
	
	
	if city and title:
		pubLookupKey = makePubReverseKey(city, title)
	
		if REDIS.exists(pubLookupKey):

			pubseq = REDIS.get(pubLookupKey)
			print "DUP: (%s, %s) exists already with pubseq (%s)" % (city, title, pubseq)
		
			# Assert a publication does not have multiple locations
			key = makePubKey(pubseq)
			thisPubLocSeq = int( REDIS.hget(key, 'loc') )
			
			print "locseq = %s ; thisPubLocSeq = %s" % (locseq, thisPubLocSeq)
	
		else:
			print "INSERT: redis publication (%s) at location (%s)" % (title, city)
		
			pubseq = REDIS.incr('pub:seq')
		
			REDIS.set(pubLookupKey, pubseq)
		
			key = makePubKey(pubseq)
			status1 = REDIS.hset(key, 'val', title)
			status2 = REDIS.hset(key, 'loc', locseq)
		
			if status1 == 0 or status2 == 0:
				raise Exception("ERROR: Problem inserting location redis hash with values (%s, %s) and key (%s)" % (title, locseq, key))
		
		
			# add pubseq to tracking sets
			REDIS.sadd('loc:%s:pubs' % locseq, pubseq)
		
		if year:
			# add pubseq to tracking sets
			REDIS.sadd('pub:y:%s' % year, pubseq)

def base(extract):
	message,datapackage = extract
	
	if message == "wcc":
		title, city, state, year, count, word = datapackage
		redisLocPubSchema(title=title, city=city, state=state, year=year)
		
	elif message == "ner":
		title, city, state, year, type, count, entity = datapackage
		redisLocPubSchema(title=title, city=city, state=state, year=year)
		
	elif message == "topics:tle":
		title, city, state, epoch = datapackage
		redisLocPubSchema(title=title, city=city, state=state)
		
	elif message == "topics:le":
		city, state, epoch = datapackage
		redisLocPubSchema(city=city, state=state)
		
	elif message == "topics:e":
		epoch = datapackage






#
# WCC implementation
#
def makeWccKey(pubseq, year):
	return "wcc:%s:%s" % (pubseq, year)

def redisWccSchema(datapackage):
	# row of data
	title, city, state, year, count, word = datapackage
	
	# get publication for this word (by year,loc,pub)
	pub_lookup_key = makePubReverseKey(city, title)
	
	# insert wcc entity in ordered set for pub,year
	if REDIS.exists(pub_lookup_key):
		pubseq = REDIS.get(pub_lookup_key)
		
		wcc_key = makeWccKey(pubseq, year)
		
		if REDIS.zrank(wcc_key, word) is None:
			REDIS.zadd(wcc_key, count, word)
			
		else:
			raise Exception("ERROR: word (%s) already exists for (%s, %s)" % (word, title, year))
		
	else:
		raise Exception("ERROR: publication not found for title,city pair (%s,%s)" % (title, city))

def wcc(extract):
	message,datapackage = extract

	if message == "wcc":
		redisWccSchema(datapackage)
	else:
		raise Exception("ERROR: message type expected (ner) received (%s)" % message)

	
	
#
# NER implementation
#
def makeNerKey(pubseq, year):
	return "ner:%s:%s" % (pubseq, year)
def makeTypeKey(entity):
	return "ner:t:%s" % slugify(entity)
def makeEntityValue(type, entity):
	return "%s:%s" % (type, entity)
					
def redisNerSchema(datapackage):
	# row of ner data
	title, city, state, year, type, count, entity = datapackage
	
	# get publication for this entity (by year,loc,pub)
	pubLookupKey = makePubReverseKey(city, title)
	
	# insert ner entity in ordered set for pub,year
	if REDIS.exists(pubLookupKey):
		pubseq = REDIS.get(pubLookupKey)
		
		ner_key = makeNerKey(pubseq, year)
		
		entity_value = makeEntityValue(type, entity)
		
		if REDIS.zrank(ner_key, entity_value) is None:
			REDIS.zadd(ner_key, count, entity_value)
			
		else:
			raise Exception("ERROR: type:entity (%s:%s) already exists for (%s, %s)" % (type, entity, title, year))
		
	else:
		raise Exception("ERROR: publication not found for title,city pair (%s,%s)" % (title, city))
	
	
def ner(extract):
	message,datapackage = extract
		
	if message == "ner":
		redisNerSchema(datapackage)
	else:
		raise Exception("ERROR: message type expected (ner) received (%s)" % message)




#
# Topic cluster implementation
#
#EPOCH_MAP = {
#	'1829-01-01_1836-04-21' : '1829:1835',
#	'1836-04-22_1845-12-29' : '1836:1845',
#	'1845-12-30_1861-04-12' : '1846:1860',
#	'1861-04-13_1865-04-09' : '1861:1865',
#	'1865-04-10_1877-12-31' : '1866:1877',
#	'1878-01-01_1899-12-31' : '1878:1899',
#	'1900-01-01_1929-10-29' : '1900:1929',
#	'1929-10-30_1941-12-07' : '1930:1941',
#	'1941-12-08_1945-10-15' : '1942:1945',
#	'1945-10-16_2008-12-31' : '1946:2008',
#}

EPOCH_MAP = {
	'1829-01-01_1836-04-21' : '1829:1836',
	'1836-04-22_1845-12-29' : '1836:1845',
	'1845-12-30_1861-04-12' : '1845:1861',
	'1861-04-13_1865-04-09' : '1861:1865',
	'1865-04-10_1877-12-31' : '1865:1877',
	'1878-01-01_1899-12-31' : '1878:1899',
	'1900-01-01_1929-10-29' : '1900:1929',
	'1929-10-30_1941-12-07' : '1929:1941',
	'1941-12-08_1945-10-15' : '1941:1945',
	'1945-10-16_2008-12-31' : '1945:2008',
}

def make_topic_key_epoch_city_pub(epoch, city, title):
	return "topics:%s:%s:%s" % (epoch, slugify(city), slugify(title))
def make_topic_key_epoch_city(epoch, city):
	return "topics:%s:%s" % (epoch, slugify(city))
def make_topic_key_epoch(epoch):
	return "topics:%s" % (epoch)
def make_topic_locs_key(epoch):
	return "topics:y:%s" % (epoch)

def topic(extract):
	msg, package = extract
	
	if msg == "topics:tle":
		title, city, state, epoch, topics = package
				
		if epoch in EPOCH_MAP:
			epoch = EPOCH_MAP[epoch]
			
			
			
			# ADD  pubseqs for each epoch
			# 
			
			# get publication for this entity (by year,loc,pub)
			pubLookupKey = makePubReverseKey(city, title)

			# insert ner entity in ordered set for pub,year
			if REDIS.exists(pubLookupKey):
				pubseq = REDIS.get(pubLookupKey)
				
				topic_locs_key = make_topic_locs_key(epoch)
				REDIS.sadd(topic_locs_key, pubseq)
				
			else:
				raise Exception("ERROR: pub reverse key lookup failed for (%s,%s)" % (city, title))
				
				
				
			
			tle_topic_key = make_topic_key_epoch_city_pub(epoch, city, title)
			
			if REDIS.exists(tle_topic_key):
				raise Exception("ERROR tle topic key exists already (%s)" % tle_topic_key)
			else:
				REDIS.set(tle_topic_key, topics)
			
		else:
			raise Exception("ERROR: epoch (%s) not in epoch map" % epoch)

		
	elif msg == "topics:le":
		city, state, epoch, topics = package
		
		if epoch in EPOCH_MAP:
			epoch = EPOCH_MAP[epoch]
		
			le_topic_key = make_topic_key_epoch_city(epoch, city)
			
			if REDIS.exists(le_topic_key):
				raise Exception("ERROR le topic key exists already (%s)" % le_topic_key)
			else:
				REDIS.set(le_topic_key, topics)
			
		else:
			raise Exception("ERROR: epoch (%s) not in epoch map" % epoch)
		
	elif msg == "topics:e":
		epoch, topics = package
		
		if epoch in EPOCH_MAP:
			epoch = EPOCH_MAP[epoch]
			
			e_topic_key = make_topic_key_epoch(epoch)
			
			if REDIS.exists(e_topic_key):
				raise Exception("ERROR le topic key exists already (%s)" % e_topic_key)
			else:
				REDIS.set(e_topic_key, topics)
			
		else:
			raise Exception("ERROR: epoch (%s) not in epoch map" % epoch)
	
	else:
		raise Exception("ERROR: msg (%s) sent to topic() dne" % msg)







#
# wcc / ner processing
#
def readFiles(filenames, cb):
	for filename in filenames:
		with open(filename, 'r') as fh:
			readFile(fh, cb)


def readFile(fh, cb):
	
	def wcc_parse_line(line):
		data = PATTERN2.findall( line )
		dataSize = len(data)
		
		if canonicalSize != dataSize:
			raise Exception("ERROR: Line '%s' does not have correct number of columns" % line)
		
		title = correctFromExceptions( data[WCC_TITLE_INDEX][1:-1] ).lower()
		location = data[WCC_LOCATION_INDEX][1:-1]
		year = data[WCC_YEAR_INDEX]
		count = int( data[WCC_COUNT_INDEX] )
		word = data[WCC_WORD_INDEX][1:-1].lower()

		
		items = location.split(",")
		city = items[0].strip().lower()
		state = items[1].strip().lower()
		
		return (title, city, state, year, count, word)
	
	def ner_parse_line(line):
		data = PATTERN2.findall( line )
		dataSize = len(data)

		if canonicalSize != dataSize:
			raise Exception("ERROR: Line '%s' does not have correct number of columns" % line)

		
		title = correctFromExceptions( data[NER_TITLE_INDEX][1:-1] ).lower()
		location = data[NER_LOCATION_INDEX][1:-1]
		year = data[NER_YEAR_INDEX]
		type = data[NER_TYPE_INDEX][1:-1].lower()
		count = int( data[NER_COUNT_INDEX] )
		entity = data[NER_ENTITY_INDEX][1:-1].lower()
		

		items = location.split(",")
		city = items[0].strip().lower()
		state = items[1].strip().lower()
		
		return (title, city, state, year, type, count, entity)
	
	
		
	columns = set( PATTERN.findall( fh.readline() )	) # e.g. [title]	[location]	[year]	[count]	[word]
	canonicalSize = len(columns)
	
	
	#
	# WCC reading		 
	if setEquivalent(columns, WCC_Y_L_T):
		global WCC_FILE_READ
		
		line = fh.readline().strip()
		
		while line != '':
			title, city, state, year, count, word = wcc_parse_line(line)
			
			STATES.add(state)
			
			extract = ("wcc", (title, city, state, year, count, word))
			cb(extract)
			
			line = fh.readline().strip()
		
		WCC_FILE_READ += 1
		print "%s / %s ; %s%% done" % (WCC_FILE_READ, WCC_TOTAL_FILES, WCC_FILE_READ / float(WCC_TOTAL_FILES))
		
	
	#
	# NER reading				
	elif setEquivalent(columns, NER_Y_L_T):
		
		totNumOfLines = 7300358 # wc -l <file>
		i = 0
		
		line = fh.readline().strip()
		i = i + 1
		while line != '':
			title, city, state, year, type, count, entity = ner_parse_line(line)

			STATES.add(state)
			
			extract = ("ner", (title, city, state, year, type, count, entity))
			cb(extract)
			
			line = fh.readline().strip()
			i = i + 1
			
			if i % 150000 == 0:
				print "%s%% done..." % (i / float(totNumOfLines))

			
	else:
		raise Exception("ERROR: title and/or location columns not present")




#
# topics processing
#
def parse_T_L_S_E_fromFilename(filenames, pattern, cb):

	for filename in filenames:
		with open(filename, 'r') as fh:
	
			path,sep,base = filename.rpartition("/")
			m = pattern.match(base)

			d = m.groupdict()

			if d.has_key('title'):
				title = correctFromExceptions( d['title'].replace("_", " ") ).lower()
			else:
				title = None

			if d.has_key('location'):
				if d['location'].startswith("_"):	
					city = d['location'][1:].replace("_", " ").lower()
				else:
					city = d['location'].replace("_", " ").lower()
			else:
				city = None

			if d.has_key('state'):
				if d['state'].startswith("_"):
					state = d['state'][1:].lower()
				else:
					state = d['state'].lower()
			else:
				state = None

			if d.has_key('epoch'):
				if d['epoch'].startswith("_"):
					epoch = d['epoch'][1:]
				else:
					epoch = d['epoch']
			else:
				epoch = None
			
			lines = [TOPIC_LINE_PATTER.match(line).groupdict()['topic'] for line in fh.readlines()]
			topics = ''.join( lines ).strip().replace('\n', '<br>')
			
			if title and city and state and epoch:
				extract = ("topics:tle", (title, city, state, epoch, topics))
				cb(extract)
			elif city and state and epoch:
				extract = ("topics:le", (city, state, epoch, topics))
				cb(extract)
			elif epoch:
				extract = ("topics:e", (epoch, topics))
				cb(extract)
			else:
				raise Exception("ERROR: problem parsing filename: %s")
			
			
			



#
# main branching logic functions
#
def readWcc(cb):
	print "processing wcc dataset..."
	filenames = listFiles("Texas_Newspaper_Data/Word_Counts_Corrected/wcc_title_location_year")
	readFiles( filenames, cb )
	
def readNer(cb):
	print "processing ner dataset..."
	filenames = ["Texas_Newspaper_Data/Named_Entity_Counts_Corrected/ner_by-title_by-location_by-year.tsv"]
	readFiles( filenames, cb )

def readFilenameTopics(cb):
	print "processing topics dataset..."

	# by title, loc, epoch
	filenames = listFiles("Texas_Newspaper_Data/Topics/Title_By_Location_By_Epoch")
	parse_T_L_S_E_fromFilename( filenames, TITLE_LOCATION_EPOCH_PATTERN, cb )
	
	# by loc, epoch
	filenames = listFiles("Texas_Newspaper_Data/Topics/Location_by_Epoch")
	parse_T_L_S_E_fromFilename( filenames, LOCATION_EPOCH_PATTERN, cb )
	
	# by epoch
	filenames = listFiles("Texas_Newspaper_Data/Topics/Epoch")
	parse_T_L_S_E_fromFilename( filenames, EPOCH_PATTERN, cb )

	
def readDataSets(cb):
	
	readWcc(cb)
	
	#readNer(cb)	
	
	readFilenameTopics(cb)
	
	# ----
	
	print "State check:"
	if len(STATES) == 1 and TEXAS in STATES:
		print "Check! Every city located in Texas and only Texas found in the dataset"
	else:
		raise Exception("ERROR: Multiple states found or State is not Texas: (%s) (%s)" % (len(STATES), STATES))
	
	print "states: %s" % STATES
	print "DONE"
	print












def runBase():
	print "Reading location and publication data"
	
	if REDIS.exists('loc:seq'):
		print "Redis key: loc:seq exists with value: %s" % REDIS.get('loc:seq')
	else:
		REDIS.set('loc:seq', 0)
		print "Redis key: loc:seq set with value: %s" % REDIS.get('loc:seq')
	
	if REDIS.exists('pub:seq'):
		print "Redis key: pub:seq exists with value: %s" % REDIS.get('pub:seq')
	else:
		REDIS.set('pub:seq', 0)
		print "Redis key: pub:seq set with value: %s" % REDIS.get('pub:seq')
		
	cb = base
	readDataSets(cb)

def runNer():
	print "Reading ner data"
	
	cb = ner
	readNer(cb)	

def runWcc():
	print "Reading wcc data"
	
	cb = wcc
	readWcc(cb)

def runTopics():
	print "Reading topics"
	
	cb = topic
	readFilenameTopics(cb)
	


def usage():
	print "python load.py [ --input-redis=[base|ner|wcc|topics] | --make-redis=[wcc-all|ner-all] ]"







def make_range_key(prefix, years):
	y1, y2 = years
	return "%s:%s:%s" % (prefix, y1, y2)

def make_pub_set_by_year_key(year):
	return "pub:y:%s" % year

def make_sorted_set_key(prefix, pubseq, year):
	return "%s:%s:%s" % (prefix, pubseq, year)
	
	
	
def make_all_keys_from_years(prefix, years):
	y1, y2 = years
	year_range = range(y1, y2 + 1) # +1 to make inclusive
	
	key_list = []
	for year in year_range:
		all_pubseq_for_year = REDIS.smembers( make_pub_set_by_year_key(year) )
		
		for pubseq in all_pubseq_for_year:
			key_list.append( make_sorted_set_key(prefix, pubseq, year) )
	
	return key_list


def gen_year_range_keys(prefix):
	start = 1829
	end = 2008

	for y1 in range(start, start + 1):
		for y2 in range(y1, end + 1):
			yield prefix, y1, y2
	





				
if __name__ == "__main__":
	
	if len(sys.argv) != 2:
		usage()
		
	elif sys.argv[1] == "--input-redis=base":
		runBase()
	
	elif sys.argv[1] == "--input-redis=ner":
		runNer()
	
	elif sys.argv[1] == "--input-redis=wcc":
		runWcc()
	
	elif sys.argv[1] == "--input-redis=all":
		runBase()
		runNer()
		runWcc()
	
	elif sys.argv[1] == "--input-redis=topics":
		for key in REDIS.keys('topics:*'):
			REDIS.delete(key)
		
		runTopics()


	elif sys.argv[1] == "--input-redis=epochs":
		REDIS.delete('epochs')
		
		#epochs = [
		#	('1829-1835', 'Mexican Era'),
		#	('1836-1845', 'Republic of Texas'),
		#	('1846-1860', 'Antebellum Era'),
		#	('1861-1865', 'Civil War'),
		#	('1866-1877', 'Reconstruction'),
		#	('1878-1899', 'Gilded Age'),
		#	('1900-1929', 'Progressive Era'),
		#	('1930-1941', 'Depression'),
		#	('1942-1945', 'World War II'),
		#	('1946-2008', 'Modern Texas'),
		#]
		
		epochs = [
			('1829-1836', 'Mexican Era'),
			('1836-1845', 'Republic of Texas'),
			('1845-1861', 'Antebellum Era'),
			('1861-1865', 'Civil War'),
			('1865-1877', 'Reconstruction'),
			('1878-1899', 'Gilded Age'),
			('1900-1929', 'Progressive Era'),
			('1929-1941', 'Depression'),
			('1941-1945', 'World War II'),
			('1945-2008', 'Modern Texas'),
		]
		
		for epoch in epochs:
			years,era = epoch
			REDIS.hset('epochs', years, era)
		
		REDIS.hset('years', 'start', '1829')
		REDIS.hset('years', 'end', '2008')
		
	elif sys.argv[1] == "--input-redis=templates":
		
		ajax_loader = """<div class="ajax-container"><div class="ajax-loading"></div></div>"""
		
		time_select_view = """
	<h3>Time Period</h3>
	<ol class="era-nav">
		{{#epochs}}
			<li class="epoch">
				<a href="#" data-epoch="{{years}}" title="{{years}}">{{era}}</a>
			</li>
		{{/epochs}}
	</ol>

	<div class="ui-slider-container">
		<form>
			<label class="visuallyhidden" for="valueAA">From:</label>
			<select name="valueAA" id="valueAA" class="visuallyhidden">
				<optgroup label="1800">
					{{#_1800s}}
						<option value="{{.}}">{{.}}</option>
					{{/_1800s}}
				</optgroup>
				<optgroup label="1900">
					{{#_1900s}}
						<option value="{{.}}">{{.}}</option>
					{{/_1900s}}
				</optgroup>
				<optgroup label="2000">
					{{#_2000s}}
						<option value="{{.}}">{{.}}</option>
					{{/_2000s}}
				</optgroup>
			</select>

			<label class="visuallyhidden" for="valueBB">To:</label>
			<select name="valueBB" id="valueBB" class="visuallyhidden">
				<optgroup label="1800">
					{{#_1800s}}
						<option value="{{.}}">{{.}}</option>
					{{/_1800s}}
				</optgroup>
				<optgroup label="1900">
					{{#_1900s}}
						<option value="{{.}}">{{.}}</option>
					{{/_1900s}}
				</optgroup>
				<optgroup label="2000">
					{{#_2000s}}
						<option value="{{.}}">{{.}}</option>
					{{/_2000s}}
				</optgroup>
			</select>
		</form>
	</div><!-- /slider -->	
""".strip()

		map_view = """
Here is our map of Texas

""".strip()

		pub_view = """
<div class="inner">

	<div class="hd">
		<h3>date range <small>{{y1}} - {{y2}}</small></h3>
		<h4>publication by city:</h4>
	</div>

	<div class="bd box">
		<div class="spiffy-scrollbar">
			<span>No cities selected...</span>
		</div>
	</div>

</div>
""".strip()
		
		city_view = """
<h5 data-details="summary" data-pub="label">{{city}} 
	<!--<input type="checkbox" class="check-all-pubs hidden" checked="checked" data-checkbox="check-all"><label><span class="screen-reader-text">check all</span></label>-->
</h5>
<ul class="simple-list" data-details="content" data-pub="listings">
	{{#pubs}}
		<li><input type="checkbox" name="" id="pubseq-{{pubseq}}" class="pub-cb" checked="true"><label for="pubseq-{{pubseq}}" class="checkbox">{{pub}}</label> 
		 <small>[ <a href="http://texashistory.unt.edu/search/?q={{pub}}&t=fulltext&fq=dc_type%3Atext_newspaper" target="_blank">view pages</a> ]</small>
		</li>
	{{/pubs}}
</ul>
""".strip()
		
		wcc_view = """
<div class="hd">
	<h4>total word counts</h4>
</div>

<ul class="nav tabs">
	<li><a href-"#" class="active">ranked list</a></li>
	<li><a href="#">word cloud</a></li>
</ul>

<div class="bd">

	<div class="action-bar">
		<a class="button push" data-modal-box="#word-counts-info" title="more about word counts">about</a>
		<a class="button" title="copy to clipboard" data-copy-clipboard="button">copy list</a>
	</div>

	<div class="inner box tab-content">
		<div class="tab-pane d3-chart"></div>
		
		<div class="tab-pane">
			<ul class="tag-cloud">
				{{#tags}}
					<li class="{{class}}">{{tag}}</li>
				{{/tags}}
			</ul>
		</div>

	</div>

</div>
<table class="hidden" data-copy-clipboard="text">
	<tr>
		{{#wcc}}
			<td>{{word}}</td>
			<td>{{count}}</td>
		{{/wcc}}
	</tr>
</table>
""".strip()
		
		ner_view = """
<div class="hd">
	<h4>named entity counts</h4>
</div>

<ul class="nav tabs">
	<li><a href-"#" class="active">ranked list</a></li>
	<li><a href="#">word cloud</a></li>
</ul>

<div class="bd">
	
	<div class="action-bar">
		<a class="button push" data-modal-box="#named-entity-info" title="more about named entity counts">about</a>
		<a class="button" title="copy to clipboard" data-copy-clipboard="button">copy list</a>
	</div>

	<div class="inner box tab-content">
	
		<div class="tab-pane d3-chart"></div>

		<div class="tab-pane">
			<ul class="tag-cloud">
				{{#tags}}
					<li class="{{class}}">{{tag}}</li>
				{{/tags}}
			</ul>
		</div>
		
	</div><!-- /tab-content -->
	
</div><!-- /bd -->
<table class="hidden" data-copy-clipboard="text">
	<tr>
		{{#ner}}
			<td>{{entity}}</td>
			<td>{{count}}</td>
		{{/ner}}
	</tr>
</table>
""".strip()
		
		topic_view = """
<div class="hd">
	<h4>topic models</h4>
</div>
	
<div class="bd">
	
	<div class="action-bar">
		<a class="button push" data-modal-box="#topic-modeling-info" title="more about topic modeling">about</a>
		<a class="button" title="copy to clipboard" data-copy-clipboard="button">copy list</a>
	</div>
	
	<div class="inner box">
	
		<ol class="topic-key-list">
			{{#topics}}
				<li>
					<a>
						<div class="topic-keys" data-click="false">
							{{.}}
							<span class="shut" data-dismiss="shut">x</span>
						</div>
					</a>
				</li>
			{{/topics}}

		</ol>
		
	</div>
	
</div><!-- /bd -->
<table class="hidden" data-copy-clipboard="text">
	<tr>
		{{#topics}}
			<td>{{.}}</td>
		{{/topics}}
	</tr>
</table>
""".strip()
		
		REDIS.hset('templates', 'ajax_loader', ajax_loader)
		REDIS.hset('templates', 'time_select_view', time_select_view)
		
		REDIS.hset('templates', 'map_view', map_view)
		REDIS.hset('templates', 'pub_view', pub_view)
		REDIS.hset('templates', 'city_view', city_view)
		
		REDIS.hset('templates', 'wcc_view', wcc_view)
		REDIS.hset('templates', 'ner_view', ner_view)
		REDIS.hset('templates', 'topic_view', topic_view)





	elif sys.argv[1] == "--migrate-redis=locs-into-pubs":
		for pubseq_key in REDIS.keys('pub:[0-9]*'):
			locseq = REDIS.hget(pubseq_key, 'loc')
			locseq_key = makeLocKey(locseq)
			city = REDIS.hget(locseq_key, 'val')
			REDIS.hset(pubseq_key, 'loc', city)

	elif sys.argv[1] == "--migrate-redis=pubseq-into-pubs":
		for pubseq_key in REDIS.keys('pub:[0-9]*'):
			pubseq = pubseq_key.split(':')[1]
			REDIS.hset(pubseq_key, 'pubseq', pubseq)
		
	elif sys.argv[1] == "--make-redis=wcc-all":
		
		# too much memory ...
		for prefix, y1, y2 in gen_year_range_keys('wcc'):
			k = make_range_key(prefix, (y1, y2))
			key_list = make_all_keys_from_years(prefix, (y1, y2))
			
			REDIS.zunionstore(k, key_list)
			REDIS.zremrangebyrank(k, 0, -101) # only store top 100 results
 			
			print "built %s" % k
	
	elif sys.argv[1] == "--make-redis=ner-all":
		REDIS.zunionstore('ner:1829:2008', REDIS.keys('ner:*'))
				
	else:
		usage()
