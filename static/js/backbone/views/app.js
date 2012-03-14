$(function(){
	
	STANFORD.MAPPING_TEXTS.views.app = Backbone.View.extend({
		
		el: 'body',
		
		initialize: function(attr) {
			var self = this;
			
			console.log('app view created');
			
			STANFORD.MAPPING_TEXTS.cached.pubs = new STANFORD.MAPPING_TEXTS.collections.pubs();
			STANFORD.MAPPING_TEXTS.cached.pubs.on('reset', this.render_pubs, this);
			
			/*
			STANFORD.MAPPING_TEXTS.cached.pubseq_collection = new STANFORD.MAPPING_TEXTS.collections.pubseqs();
			STANFORD.MAPPING_TEXTS.cached.pubseq_collection.on('reset', this.update_pub_view, this);
			*/
			
			STANFORD.MAPPING_TEXTS.cached.wcc_collection = new STANFORD.MAPPING_TEXTS.collections.wcc();
			STANFORD.MAPPING_TEXTS.cached.wcc_collection.on('reset', this.render_wcc, this);
			
			STANFORD.MAPPING_TEXTS.cached.ner_collection = new STANFORD.MAPPING_TEXTS.collections.ner();
			STANFORD.MAPPING_TEXTS.cached.ner_collection.on('reset', this.render_ner, this);

		},
		
		render: function() {
			this.render_time();
			
			STANFORD.MAPPING_TEXTS.cached.pubs.fetch({
				data: {
					y1: 1991,
					y2: 1991,
					x_pubs: ['brownwood:the_yellow_jacket', 'abilene:the_reata']
				}
			});
			
			/*
			STANFORD.MAPPING_TEXTS.cached.pubseq_collection.fetch({
				data: {
					y1: 1991,
					y2: 1991,
					x_pubs: ['brownwood:the_yellow_jacket', 'abilene:the_reata']
				}
			});
			*/
			
			STANFORD.MAPPING_TEXTS.cached.wcc_collection.fetch({
				data: {
					y1: 1991,
					y2: 1991,
					x_pubs: ['brownwood:the_yellow_jacket', 'abilene:the_reata']
				}
			});
			
			STANFORD.MAPPING_TEXTS.cached.ner_collection.fetch({
				data: {
					y1: 1991,
					y2: 1991,
					x_pubs: [/*'brownwood:the_yellow_jacket', */'abilene:the_reata']
				}
			});
			
			this.render_topics();
		},
		
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
		
		render_map: function() {
			var map_view = new STANFORD.MAPPING_TEXTS.views.map_view(),
					center = STANFORD.MAPPING_TEXTS.geocoding['texas'],
					map_options = {
        		center: center,
        		zoom: 6,
        		mapTypeId: google.maps.MapTypeId.ROADMAP
      		},
					map;

			$(this.el).find('#map-view').replaceWith( map_view.render().el );
			
			map = new google.maps.Map( $(this.el).find('#map-view').get(0), map_options );

			console.log("pubs:");
			STANFORD.MAPPING_TEXTS.cached.pubs.forEach(function(model) {
				var city = model.get('city'),
						pubs_tally = model.get('pubs').length,
						center = STANFORD.MAPPING_TEXTS.geocoding[city],
						radius = 20000 + (pubs_tally * 5000),
						city_options = {
							strokeColor: "#FF0000",
							strokeOpacity: 0.8,
							strokeWeight: 2,
							fillColor: "#FF0000",
							fillOpacity: 0.35,
							map: map,
							center: center,
							radius: radius
				    },
						city_circle = new google.maps.Circle(city_options);
				
				console.log('city ' + city);
				console.log('pubs tally ' + pubs_tally);
			});
		},
		
		render_pubs: function() {
			var pub_view = new STANFORD.MAPPING_TEXTS.views.pub_view();
			$(this.el).find('#pub-view').html( pub_view.render().el );
			STANFORD.MAPPING_TEXTS.cached.pub_cbs = $(this.el).find('#pub-view input[type="checkbox"]');
			
			this.render_map();
		},
		
		update_pub_view: function() {
			var self = this,
					each_pubseq = function(model) {
						var pubseq = model.get('id'),
								selector_str = "#pubseq-" + pubseq;
								
						console.log('pubseq selector => ' + selector_str);
				
						STANFORD.MAPPING_TEXTS.cached.pub_cbs
						.filter(selector_str)
						.attr('checked', true)
						.removeAttr('disabled');
					}; 
			
			STANFORD.MAPPING_TEXTS.cached.pub_cbs.attr('checked', false);
			STANFORD.MAPPING_TEXTS.cached.pub_cbs.attr('disabled', true);
			
			STANFORD.MAPPING_TEXTS.cached.pubseq_collection.forEach(each_pubseq);
		},
		
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
			});
		},
		
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
			});
		},
		
		render_topics: function() {
			var topic_view = new STANFORD.MAPPING_TEXTS.views.topic_view();
			$(this.el).find('#topic-view').html( topic_view.render().el );
		}
		
	});
	
});