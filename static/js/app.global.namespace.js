// Don't clobber mapping_texts namespace inside of stanford namespace if such
// namespaces exist

var STANFORD;
if (STANFORD) {
	if (STANFORD['MAPPING_TEXTS']) {
		throw new Error("STANFORD.MAPPING_TEXTS namepsace already exists! Exception thrown to avoid clobbering it.");
	}
} else {
	STANFORD = {};
}

STANFORD.MAPPING_TEXTS = {
	
	// Center Lat & Long coordinates for Texas, and some
	//  of its cities of interest.
	geocoding: {
		texas					: new google.maps.LatLng(31.96860, -99.90181),
		brazoria			:	new google.maps.LatLng(29.04441, -95.56911),
		breckenridge	:	new google.maps.LatLng(32.75568, -98.90229),
		matagorda			:	new google.maps.LatLng(28.69113, -95.96827),
		columbia			:	new google.maps.LatLng(32.22777, -98.20895),
		austin				:	new google.maps.LatLng(30.26715, -97.74306),
		houston				:	new google.maps.LatLng(29.76019, -95.36939),
		brownsville		:	new google.maps.LatLng(25.90175, -97.49748),
		fort_worth		:	new google.maps.LatLng(32.72541, -97.32085),
		galveston			:	new google.maps.LatLng(29.30135, -94.79770),
		jefferson			:	new google.maps.LatLng(32.75736, -94.34519),
		san_augustine	:	new google.maps.LatLng(31.52990, -94.10603),
		la_grange			:	new google.maps.LatLng(29.90550, -96.87665),
		port_lavaca		:	new google.maps.LatLng(28.61500, -96.62609),
		lavaca				:	new google.maps.LatLng(29.33591, -96.83510),
		palestine			:	new google.maps.LatLng(31.76212, -95.63079),
		richmond			:	new google.maps.LatLng(29.58218, -95.76078),
		san_luis			:	new google.maps.LatLng(29.73459, -98.20343),
		san_felipe		:	new google.maps.LatLng(29.79301, -96.10079),
		nacogdoches		:	new google.maps.LatLng(31.60351, -94.65549),
		washington		:	new google.maps.LatLng(30.32500, -96.15639),
		victoria			:	new google.maps.LatLng(28.80527, -97.00360),
		bartlett			: new google.maps.LatLng(30.79491, -97.42556),
		canadian			:	new google.maps.LatLng(35.91282, -100.38208),
		brownwood			:	new google.maps.LatLng(31.70932, -98.99116),
		corpus_christi:	new google.maps.LatLng(27.80058, -97.39638),
		san_antonio		:	new google.maps.LatLng(29.42412, -98.49363),
		abilene 			: new google.maps.LatLng(32.44874, -99.73314),
		clarksville		:	new google.maps.LatLng(33.61066, -95.05272),
		palo_pinto		:	new google.maps.LatLng(32.76799, -98.29875),
		huntsville		:	new google.maps.LatLng(30.72353, -95.55078),
		tulia					:	new google.maps.LatLng(34.53589, -101.75852)
	},




	
	cached: {},
	config: {},

	// Backbone objects
	models: {},
	collections: {},
	views: {},
	
	
	
	
	
	
	
	
	helpers: {
		// parse y1, y2, x_pubs
		//
		parse_xpubs: function() {
			var x_pubs = [],
					foreach_cb = function() {
						var cb = $(this),
								pub,
								city;

						if ( !cb.is(':checked') ) {
							pub = cb.next('label').text().replace(/ /g, '_');
							city = cb.closest('ul').prev('h5').text().replace(/ /g, '_');

							x_pubs.push(city+':'+pub);
						}
					};
			
			STANFORD.MAPPING_TEXTS.cached.pub_cbs.each( foreach_cb );
			
			return x_pubs;
		},
		
		
		
		
		// Ajax loader
		//
		add_ajax_loader_template: function($parent_el) {
			$parent_el.append( STANFORD.MAPPING_TEXTS.config.templates.ajax_loader );
		},
		del_ajax_loader_template: function($parent_el) {
			$parent_el.children('.ajax-container').remove();
		},
		
		
		
		
		
		// Fetch collection helpers
		//
		fetch_publications: function(args) {
			/*
			var data;
			
			if (args.epoch) {
				data = {
					epoch: args.epoch
				};
			} else {
				data = {
					y1: args.y1,
					y2: args.y2,
					x_pubs: args.x_pubs
				};
			}
			*/
			
			STANFORD.MAPPING_TEXTS.cached.pubs.fetch({
				data: args,
				success: function() {
					console.log("**** pubs fetched success");
					
					STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $('#pub-view').find('.bd') );
					STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $('#map-view') );
					
					/*
					args.fetched_set.set_fetched_pubs();
					
					if (args.fetched_set.all_fetched() === true) {
						console.log("**** all fetched fetch_pubs()");
					}
					*/
				}
			});
			
			STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $('#pub-view').find('.box') );
			STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $('#map-view') );
		},
		
		fetch_wcc: function(args) {
			STANFORD.MAPPING_TEXTS.cached.wcc_collection.fetch({
				data: args,
				success: function() {
					console.log("**** wcc fetched success");
					
					STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $('#wcc-view').find('.inner') );
					
					/*
					args.fetched_set.set_fetched_wcc();
					
					if (args.fetched_set.all_fetched() === true) {
						console.log("**** all fetched fetch_wcc()");
					}
					*/
				}
			});
			
			STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $('#wcc-view').find('.inner') );
		},
		
		fetch_ner: function(args) {
			STANFORD.MAPPING_TEXTS.cached.ner_collection.fetch({
				data: args,
				success: function() {
					console.log("**** ner fetched success");
					
					STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $('#ner-view').find('.inner') );
							
					/*			
					args.fetched_set.set_fetched_ner();
					
					if (args.fetched_set.all_fetched() === true) {
						console.log("**** all fetched fetch_ner()");
					}
					*/
				}
			});
			
			STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $('#ner-view').find('.inner') );
		},
		
		fetch_topics: function(args) {
			STANFORD.MAPPING_TEXTS.cached.topics.fetch({
				
				data: {
					v: args.epoch
				},
				
				success: function(model){
					console.log("**** topics fetched success");
					
					STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $('#topic-view') );
					
					/*					
					args.fetched_set.set_fetched_topic();
					
					if (args.fetched_set.all_fetched() === true) {
						console.log("**** all fetched fetch_topics()");
					}
					*/
				}
			});
			
			STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $('#topic-view') );
		}
		
	}, // end helper functions
	
	
	
	
	
	
	
	
	
	
	objects: {
		TrackFetchedSet: function(fetch_funs, els_to_load_until_complete) {
			var state = {};
			
			_.each(
				fetch_funs,
				function(fetch_fun) {
					state[fetch_fun] = false;
				}
			);
			
			els_to_load_until_complete.each(function() {
				STANFORD.MAPPING_TEXTS.helpers.add_ajax_loader_template( $(this) );
			});
			
			return {
				all_fetched: function() {
					var status = _.all(
								state,
								function(status, fetch_fun) {
									return status;
								}
							);
					
					if (status === true) {
						
						els_to_load_until_complete.each(function() {
							STANFORD.MAPPING_TEXTS.helpers.del_ajax_loader_template( $(this) );
						});
						return true;
						
					} 
					
					return false;
				},
				
				set_fetched_topic: function() { state['fetch_topics'] = true; },
				set_fetched_pubs: function() { state['fetch_publications'] = true; },
				set_fetched_wcc: function() { state['fetch_wcc'] = true; },
				set_fetched_ner: function() { state['fetch_ner'] = true; }
			};
		}
	}, // end helper objects










	traits: {
		fetch_all: function(args, fetch_funs) {
			var helpers = STANFORD.MAPPING_TEXTS.helpers;
			
			_.each(
				fetch_funs,
				function(fetch_fun){
					helpers[fetch_fun](args);
				}
			);		
		},
		
		fetch_data: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers;

			/*
			console.log("y1: " + y1);
			console.log("y2: " + y2);
			console.log("x_pubs:");
			console.log(x_pubs);
			*/
			
			
			_.each(
				this.fetch_funs,
				function(fetch_fun) {
					
					if (fetch_fun === 'fetch_publications') {
						
						h[fetch_fun]({
							y1: c.selected_year_range.y1,
							y2: c.selected_year_range.y2
						});
					
					} else {
						
						h[fetch_fun]({
							y1: c.selected_year_range.y1,
							y2: c.selected_year_range.y2,
							x_pubs: c.pubs.parse_xpubs()
						});
						
					}
					
				}
			);
		}
		
		
	}
};