$(function(){
	
	STANFORD.MAPPING_TEXTS.views.app = Backbone.View.extend({
		
		el: 'body',
		
		initialize: function(attr) {
			var cached = STANFORD.MAPPING_TEXTS.cached;
			
			console.log('app view created');
			
			cached.topics = new STANFORD.MAPPING_TEXTS.models.topics();
			cached.topics.on('change', this.render_topics, this);
			
			cached.pubs = new STANFORD.MAPPING_TEXTS.collections.pubs();
			cached.pubs.on('reset', this.render_map, this);
			cached.pubs.on('reset', this.fetch_data, { fetch_funs: ['fetch_wcc', 'fetch_ner'] });
			
			cached.wcc_collection = new STANFORD.MAPPING_TEXTS.collections.wcc();
			cached.wcc_collection.on('reset', this.render_wcc, this);
			
			cached.ner_collection = new STANFORD.MAPPING_TEXTS.collections.ner();
			cached.ner_collection.on('reset', this.render_ner, this);

		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached;
			
			c.selected_year_range = {y1: 1991, y2: 1995};
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });
					
			//this.fetch_all(args, fetch_funs);
				
			this.render_time();
			this.render_topics();
		},

		
		
		
		
		
		
		
		
		
		
		
		
		// ----
		// ---- Top row
		// ----
		
		// Render time view
		//  #time-view (replaces #map-view with new #map-veiw for each render)
		//
		render_time: function() {
			var time_select_view = new STANFORD.MAPPING_TEXTS.views.time_select_view(),
					time_select_view_elem = $(this.el).find('#time-select-view');
			
			time_select_view_elem.replaceWith( time_select_view.render().el );
			time_select_view_elem = $(this.el).find('#time-select-view');
			
			time_select_view_elem

			// slider
			.find('select#valueAA, select#valueBB').selectToUISlider({
				labels: 10
			})
			.end()
			
			// tabs
			.find('.tabs')
			.tabs('.tab-content > .tab-pane', {
				effect: 'fade'
			});
			
			STANFORD.MAPPING_TEXTS.cached.select_aa = time_select_view_elem.find('select#valueAA');
			STANFORD.MAPPING_TEXTS.cached.select_bb = time_select_view_elem.find('select#valueBB');
		},
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		// ----
		// ---- Middle row
		// ----
		
		// Render map view
		//  #map-view (replaces #map-view with new #map-veiw for each render)
		//
		render_map: function() {
			// 
			this.render_pub_view();
			
			
			//
			//
			var map_view = new STANFORD.MAPPING_TEXTS.views.map_view(),
					center = STANFORD.MAPPING_TEXTS.geocoding['texas'],
					map_options = {
        		center: center,
        		zoom: 5,
        		mapTypeId: google.maps.MapTypeId.ROADMAP
      		},
					map;

			$(this.el).find('#map-view').replaceWith( map_view.render().el );
			
			map = new google.maps.Map( $(this.el).find('#map-view').get(0), map_options );

			STANFORD.MAPPING_TEXTS.cached.pubs.forEach(function(city) {
				var city_norm = city.get('city').replace(/ /g, '_'),
						center = STANFORD.MAPPING_TEXTS.geocoding[city_norm],
						pubs_tally = city.get('pubs').length,
						radius = 20000 + (pubs_tally * 5000),
						zIndex = 1000000,
						city_options = {
							strokeColor: "#FF0000",
							strokeOpacity: 0.8,
							strokeWeight: 2,
							fillColor: "#FF0000",
							fillOpacity: 0.35,
							map: map,
							center: center,
							radius: radius,
							zIndex: zIndex - radius
				    },
						
						city_circle = new google.maps.Circle(city_options);
						
				google.maps.event.addListener(city_circle, 'click', function() {
					
					if (city.get('display') === true) { return; }
					
					city.set({display: true});
					
			    city_circle.setOptions({
						strokeColor: "#CCFF33"
					});
					
					console.log('clicked on city code name: ' + city.get('city'));
			  });
				
				google.maps.event.addListener(city_circle, 'rightclick', function() {
					
					city.set({display: false});
					
			    city_circle.setOptions({
						strokeColor: "#FF0000"
					});
			  });
					
			});
		},
		
		
		// Render pub view
		//  #pub-view
		//
		render_pub_view: function() {
			var views = STANFORD.MAPPING_TEXTS.views,
					pub_view = new views.pub_view();
			
			$(this.el)
			.find('#pub-view')
			.html( pub_view.render().el )
		},
		
		
		
		
		
		
		
		
		
		
		
		
		// ----
		// ---- bottom row
		// ----
		
		// Render word correct counts view
		//  #wcc-view
		//
		render_wcc: function() {
			var wcc_view = new STANFORD.MAPPING_TEXTS.views.wcc_view();
			
			$(this.el)
			.find('#wcc-view')
			.html( wcc_view.render().el );
			
			$(this.el)
			.find('#wcc-view')
			.find('.tabs')
			.tabs('.tab-content > .tab-pane', {
				effect: 'fade'
			})
			.end()
			.find('[title]')
			.tooltip({
				effect: 'fade',
				predelay: 500,
				offset: [-10,0]
			});
		},
		
		// Render name entity counts view
		//  #ner-view
		//
		render_ner: function() {	
			var ner_view = new STANFORD.MAPPING_TEXTS.views.ner_view();

			$(this.el)
			.find('#ner-view')
			.html( ner_view.render().el );
			
			$(this.el)
			.find('#ner-view')
			.find('.tabs')
			.tabs('.tab-content > .tab-pane', {
				effect: 'fade'
			})
			.end()
			.find('[title]')
			.tooltip({
				effect: 'fade',
				predelay: 500,
				offset: [-10,0]
			});			
		},
		
		// Render topics view
		//  #topic-view
		//
		render_topics: function() {
			var topic_view = new STANFORD.MAPPING_TEXTS.views.topic_view();
			
			$(this.el).find('#topic-view').html( topic_view.render().el )
			.end()
			.find('[title]')
			.tooltip({
				effect: 'fade',
				predelay: 500,
				offset: [-10,0]
			});
		}
		
	});
	
	
	
	
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.views.app.prototype,
		{
			fetch_all: STANFORD.MAPPING_TEXTS.traits.fetch_all,
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
});