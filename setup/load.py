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

		if title and city and state and epoch:
			extract = ("topics:tle", (title, city, state, epoch))
			cb(extract)
		elif city and state and epoch:
			extract = ("topics:le", (city, state, epoch))
			cb(extract)
		elif epoch:
			extract = ("topics:e", (epoch))
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



	elif sys.argv[1] == "--input-redis=epochs":
		
		epochs = [
			('1829-1835', 'Mexican Era'),
			('1836-1845', 'Republic of Texas'),
			('1846-1860', 'Antebellum Era'),
			('1861-1865', 'Civil War'),
			('1866-1877', 'Reconstruction'),
			('1878-1899', 'Gilded Age'),
			('1900-1929', 'Progressive Era'),
			('1930-1941', 'Depression'),
			('1942-1945', 'World War II'),
			('1946-2008', 'Modern Texas'),
		]
		
		for epoch in epochs:
			years,era = epoch
			REDIS.hset('epochs', years, era)
		
		REDIS.hset('years', 'start', '1829')
		REDIS.hset('years', 'end', '2008')
		
	elif sys.argv[1] == "--input-redis=templates":
		
		time_select_view = """
<ul class="nav tabs">
	<li><a href-"#">Historical Epochs</a></li>
	<li><a href="#">Time Slider</a></li>
</ul>

<div class="tab-content">
	
	<ol class="tab-pane pagination">
		{{#epochs}}
			<li><a href="#" title="{{era}}">{{years}}</a></li>
		{{/epochs}}
	</ol>
	
	<div class="ui-slider-container tab-pane">
	
		<form>
			<fieldset>
				<label for="valueAA">From:</label>
				<select name="valueAA" id="valueAA">
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
				
				<label for="valueBB">To:</label>
				<select name="valueBB" id="valueBB">
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
			</fieldset>
		</form>
	
	</div><!-- /slider -->
	
</div><!-- /tab-contnet -->
""".strip()

		map_view = """
Here is our map of Texas
""".strip()

		pub_view = """
<div class="inner">

	<div class="hd">
		<h3>date range <small>[value]</small></h3>
		<h4>publication by city:</h4>
	</div>

	<div class="bd box">

		{{#publocs}}
			<h5>{{city}}</h5>
			<ul class="simple-list">
				{{#pubs}}
					<li><input type="checkbox" name="" id="pubseq-{{pubseq}}" checked="true"><label for="pubseq-{{pubseq}}" class="checkbox" title="{{pub}}">{{pub}}</label></li>
				{{/pubs}}
			</ul>
		{{/publocs}}
		
	</div>

</div>
""".strip()
		
		wcc_view = """
<div class="hd">
	<h4>total word counts</h4>
</div>

<ul class="nav tabs">
	<li><a href-"#" class="active">list</a></li>
	<li><a href="#">tag cloud</a></li>
</ul>

<div class="bd">

	<div class="action-bar">
		<button>i</button>
		<button>copy</button>
	</div>

	<div class="box tab-content">

		<ul class="tab-pane">
			{{#wcc}}
				<li>{{word}}: {{count}}</li>
			{{/wcc}}
		</ul>

		<div class="tab-pane">
			<p>tag cloud</p>
		</div>

	</div>

</div>
""".strip()
		
		ner_view = """
<div class="hd">
	<h4>named entity counts</h4>
</div>

<ul class="nav tabs">
	<li><a href-"#" class="active">list</a></li>
	<li><a href="#">tag cloud</a></li>
</ul>

<div class="bd">
	
	<div class="action-bar">
		<button>i</button>
		<button>copy</button>
	</div>

	<div class="box tab-content">
	
		<ul class="tab-pane">
			{{#ner}}
				<li>{{entity}}: {{count}}, type: {{type}}</li>
			{{/ner}}
		</ul>

		<div class="tab-pane">
			<p>tag cloud</p>
		</div>
		
	</div><!-- /tab-content -->
	
</div><!-- /bd -->
""".strip()
		
		topic_view = """
<div class="hd">
	<h4>topic keys</h4>
</div>
	
<div class="bd">
	
	<div class="action-bar">
		<button>i</button>
		<button>copy</button>
	</div>
	
	<div class="box">
		
		<ul>
			<li>topic key</li>
			<li>topic key</li>
			<li>topic key</li>
			<li>topic key</li>
			<li>topic key</li>
			<li>topic key</li>
		</ul>
		
	</div>
	
</div><!-- /bd -->
""".strip()
		
		REDIS.hset('templates', 'time_select_view', time_select_view)
		
		REDIS.hset('templates', 'map_view', map_view)
		REDIS.hset('templates', 'pub_view', pub_view)
		
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