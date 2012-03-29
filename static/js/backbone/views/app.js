$(function(){
	
	STANFORD.MAPPING_TEXTS.views.app = Backbone.View.extend({
		
		el: 'body',
		
		initialize: function(attr) {
			var c = STANFORD.MAPPING_TEXTS.cached;
			
			console.log('app view created');
			
			$(window).resize(function() {
				console.log('a resize happened on body');
			});
			
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
					h = STANFORD.MAPPING_TEXTS.helpers,
					
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

			h.invokePlugins({
				parentEl: '#app-ds-view',
				plugins: [ 'modal' ]
			});
			
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
					time_select_view_elem = $(this.el).find('#time-select-view'),
					h = STANFORD.MAPPING_TEXTS.helpers;
			
			time_select_view_elem.replaceWith( time_select_view.render().el );
			time_select_view_elem = $(this.el).find('#time-select-view');
			
			c.jqui = time_select_view_elem
						// slider
						.find('select#valueAA, select#valueBB').selectToUISlider({
							labels: 10
						});

			c.select_aa = time_select_view_elem.find('select#valueAA');
			c.select_bb = time_select_view_elem.find('select#valueBB');
			
			h.invokePlugins({
				parentEl: '#time-select-view',
				plugins: [ 'tooltip' ]
			});
			
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
						navigationControlOptions: {
						    style: google.maps.NavigationControlStyle.SMALL
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
					var num_of_pubs = c.pubs.size(),
							city_overlay,
							
							select_all_mode = 'Select All', 
							unselect_all_mode = 'Unselect All',
							text_mode = homeControlDivText.text() === select_all_mode ? unselect_all_mode : select_all_mode,
							click_type = homeControlDivText.text() === select_all_mode ? 'click' : 'rightclick';
					
					
					homeControlDivText.html(text_mode);
						
					c.pubs.forEach(
						function(city, index) {

							var city_overlay = city.get('circle_overlay'),
									last_city = num_of_pubs === index+1;

							google.maps.event.trigger(city_overlay, click_type, last_city);

						}
					);	
					
			  });

			}
		  var homeControlDiv = document.createElement('DIV'),
		  		homeControl = new HomeControl(homeControlDiv, map),
					homeControlDivText = $(homeControlDiv).find('b');

		  homeControlDiv.index = 1;
		  map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeControlDiv);
			
			// create legend
			
			function CreateLegend(el) {
				// Set CSS styles for the DIV containing the control
			  // Setting padding to 5 px will offset the control
			  // from the edge of the map
			  el.style.padding = '10px';

			  // Set CSS for the control border
			  var controlUI = document.createElement('DIV');
				controlUI.style.width = '130px';
				controlUI.style.padding = '10px';
			  controlUI.style.backgroundColor = 'white';
				controlUI.style.borderWidth = '1px';
			  controlUI.style.borderStyle = 'solid';
			 	controlUI.style.borderColor = '#555';
				controlUI.style.opacity = '0.8';
				controlUI.style.boxShadow = '0 0 3px rgba(0,0,0,0.5) inset';
			  el.appendChild(controlUI);

			  // Set CSS for the control interior
			  var controlText = document.createElement('DIV');
			  controlText.style.fontFamily = 'Arial,sans-serif';
			  controlText.style.fontSize = '12px';
			  controlText.style.paddingLeft = '4px';
			  controlText.style.paddingRight = '4px';
			  controlText.innerHTML = '<h6>Legend</h6><p>circle size is linearly proportional to the number of publications which is subject to the criteria of the time selected.';
			  controlUI.appendChild(controlText);
			}
			
			var legendControlDiv = document.createElement('DIV'),
		  		legendControl = new CreateLegend(legendControlDiv);

		  legendControlDiv.index = 1;
		  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legendControlDiv);
			
			// add border around Texas
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
				google.maps.event.addListener(city_circle, 'click', function(last_city) {
					
					console.log('circle click:');
					
					if (city.get('display') === true) { return; }
					
					city.set({display: true}, _.isBoolean(last_city) ? {fetch_data: last_city} : {});
					
					console.log('City data:');
					console.log(city.toJSON());
					
			    city_circle.setOptions({
						strokeColor: "#CCFF33"
					});

			  });
				
				// Click handler for "rightclick" on circle overlay
				google.maps.event.addListener(city_circle, 'rightclick', function(last_city) {
					
					console.log('circle rightclick:');
					
					//city.set({display: false});
					city.set({display: false}, _.isBoolean(last_city) ? {fetch_data: last_city} : {});
					
					console.log('City data:');
					console.log(city.toJSON());
					
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
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					
					wcc = c.wcc_collection,
					
					d3_chart = '#wcc-view .d3-chart',
					weights = data = wcc.pluck('count'),
					tags = labels = wcc.pluck('word'),
					width = $(this.el).find('#wcc-view .box').width(),
					
					tags = h.make_tag_cloud(tags, weights),
					
					wcc_view = new STANFORD.MAPPING_TEXTS.views.wcc_view({
						collection: wcc,
						tags: tags
					});
			
			$(this.el)
			.find('#wcc-view')
			.html( wcc_view.render().el );
			
			h.invokePlugins({
				parentEl: '#wcc-view',
				plugins: [ 'tabs', 'tooltip', 'modal' ]
			});
									
			h.make_bar_graph(
				data,
				labels,
				d3_chart,
				width
			);
			
			
		},
		
		// Render name entity counts view
		//  #ner-view
		//
		render_ner: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					
					ner = c.ner_collection,
					
					d3_chart = '#ner-view .d3-chart',
					weights = data = ner.pluck('count'),
					tags = labels = ner.pluck('entity'),
					width = $(this.el).find('#ner-view .box').width(),
					
					tags = h.make_tag_cloud(tags, weights),
					
					ner_view = new STANFORD.MAPPING_TEXTS.views.ner_view({
						collection: ner,
						tags: tags
					});
			
			$(this.el)
			.find('#ner-view')
			.html( ner_view.render().el );
			
			h.invokePlugins({
				parentEl: '#ner-view',
				plugins: [ 'tabs', 'tooltip', 'modal' ]
			});	
			
			h.make_bar_graph(
				data,
				labels,
				d3_chart,
				width
			);
		},
		
		// Render topics view
		//  #topic-view
		//
		render_topics: function() {
			var topic_view = new STANFORD.MAPPING_TEXTS.views.topic_view(),
					h = STANFORD.MAPPING_TEXTS.helpers;
			
			$(this.el)
			.find('#topic-view')
			.html( topic_view.render().el )
			
			h.invokePlugins({
				parentEl: '#topic-view',
				plugins: [ 'modal', 'tooltip' ]
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