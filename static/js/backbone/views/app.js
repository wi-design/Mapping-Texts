$(function(){
	
	STANFORD.MAPPING_TEXTS.views.app = Backbone.View.extend({
		
		el: 'body',
		
		initialize: function(attr) {
			var c = STANFORD.MAPPING_TEXTS.cached;
			
			console.log('app view created');
			
			c.pubs = new STANFORD.MAPPING_TEXTS.collections.pubs();
			c.pubs.on('reset', this.render_map, this);
			c.pubs.on('reset', this.fetch_data, { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] });
			
			c.wcc_collection = new STANFORD.MAPPING_TEXTS.collections.wcc();
			c.wcc_collection.on('reset', this.render_wcc, this);
			
			c.ner_collection = new STANFORD.MAPPING_TEXTS.collections.ner();
			c.ner_collection.on('reset', this.render_ner, this);
			
			c.topics = new STANFORD.MAPPING_TEXTS.models.topics();
			c.topics.on('change', this.render_topics, this);

		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					
					// default date range
					config = STANFORD.MAPPING_TEXTS.config,
					start = parseInt(config.start, 10),
					end = parseInt(config.end, 10);
			
			c.selected_year_range = {y1: start, y2: end};
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });

			this.render_time();
			this.render_wcc();
			this.render_ner();
			this.render_topics();
			
			c.epochs.set_selected({y: end});
			
		},

		
		
		
		
		
		
		
		
		
		
		
		
		// ----
		// ---- Top row
		// ----
		
		// Render time view
		//  #time-view (replaces #map-view with new #map-veiw for each render)
		//
		render_time: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					time_select_view = new STANFORD.MAPPING_TEXTS.views.time_select_view(),
					time_select_view_elem = $(this.el).find('#time-select-view');
			
			time_select_view_elem.replaceWith( time_select_view.render().el );
			time_select_view_elem = $(this.el).find('#time-select-view');
			
			c.jqui = time_select_view_elem
						// slider
						.find('select#valueAA, select#valueBB').selectToUISlider({
							labels: 10
						});

			c.select_aa = time_select_view_elem.find('select#valueAA');
			c.select_bb = time_select_view_elem.find('select#valueBB');
			
			c.select_aa.change(function(){console.log("change happened!!!!!!!");});
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
					c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					center = STANFORD.MAPPING_TEXTS.geocoding['texas'],
					myMapTypeId = "Dark",
	    		myMapTypeStyle = [
		        {
		            featureType: "all",
		            elementType: "all",
		            stylers: [
		                {
		                    invert_lightness: true
		                }
		            ]
		        },
		        {
		            featureType: "administrative",
		            elementType: "all",
		            stylers: [
		                {
		                    visibility: 'off'
		                }
		            ]
		        },
		        {
		            featureType: "road",
		            elementType: "all",
		            stylers: [
		                {
		                    visibility: 'off'
		                }
		            ]
		        }
					],
					map_options = {
						mapTypeControlOptions: {
		          mapTypeIds: [
								google.maps.MapTypeId.TERRAIN,
		            google.maps.MapTypeId.ROADMAP,
		            myMapTypeId
							]
						},
        		center: center,
        		zoom: 6,
        		mapTypeId: google.maps.MapTypeId.TERRAIN
      		},
					map;

			$(this.el).find('#map-view').replaceWith( map_view.render().el );
			
			map = new google.maps.Map( $(this.el).find('#map-view').get(0), map_options );
			map.mapTypes.set(myMapTypeId, new google.maps.StyledMapType(myMapTypeStyle, {name: myMapTypeId}));
			
			
			// Create the DIV to hold the control and
		  // call the HomeControl() constructor passing
		  // in this DIV.
			function HomeControl(controlDiv, map) {

			  // Set CSS styles for the DIV containing the control
			  // Setting padding to 5 px will offset the control
			  // from the edge of the map
			  controlDiv.style.padding = '5px';

			  // Set CSS for the control border
			  var controlUI = document.createElement('DIV');
			  controlUI.style.backgroundColor = 'white';
			  controlUI.style.borderStyle = 'solid';
			  controlUI.style.borderWidth = '1px';
			  controlUI.style.cursor = 'pointer';
			  controlUI.style.textAlign = 'center';
			  controlUI.title = 'Select All Cities';
			  controlDiv.appendChild(controlUI);

			  // Set CSS for the control interior
			  var controlText = document.createElement('DIV');
			  controlText.style.fontFamily = 'Arial,sans-serif';
			  controlText.style.fontSize = '12px';
			  controlText.style.paddingLeft = '4px';
			  controlText.style.paddingRight = '4px';
			  controlText.innerHTML = '<b>Select All</b>';
			  controlUI.appendChild(controlText);

			  // Click handler for "Select All"
			  google.maps.event.addDomListener(controlUI, 'click', function() {
					var city_overlay;
					
					_(c.pubs.initial()).forEach(
						function(city) {
							var city_overlay = city.get('circle_overlay');
							
							console.log("City ===> " + city.get('city'));
							
							google.maps.event.trigger(city_overlay, 'click', {silent: true});
						}
					);
					
					console.log("LAST City ===> " + c.pubs.last().get('city'));
					
					city_overlay = c.pubs.last().get('circle_overlay');
					
					google.maps.event.trigger(city_overlay, 'click', {silent: false});
			  });

			}
		  var homeControlDiv = document.createElement('DIV');
		  var homeControl = new HomeControl(homeControlDiv, map);

		  homeControlDiv.index = 1;
		  map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeControlDiv);
			
			
			
			drawContour(map);
			
			function drawContour(map) {
			    var c = [],
							contour = STANFORD.MAPPING_TEXTS.geocoding.contour;
							
			    for (var i = 0; i < contour.length; i++) {
			        c.push(new google.maps.LatLng(contour[i][0], contour[i][1]));
			    }

			    new google.maps.Polygon({
			        paths: c,
			        strokeColor: "#666666",
			        strokeOpacity: 0.6,
			        strokeWeight: 4,
			        fillColor: "#000000",
			        fillOpacity: 0,
			    }).setMap(map);
			}

			c.pubs.forEach(function(city) {
				var city_norm = h.normalize( city.get('city') ),
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
						
				city.set({circle_overlay: city_circle});
				
				
				// Click handler for "click" on circle overlay		
				google.maps.event.addListener(city_circle, 'click', function(arg) {
					
					console.log('clicked on city code name: ' + city.get('city'));
					
					if (city.get('display') === true) { return; }
					
					city.set({display: true}, arg);
					
			    city_circle.setOptions({
						strokeColor: "#CCFF33"
					});

			  });
				
				// Click handler for "rightclick" on circle overlay
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
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
});