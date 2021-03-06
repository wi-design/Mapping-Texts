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
			//c.pubs.on('reset', this.fetch_data, { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] });
			c.pubs.on('reset', function() { google.maps.event.trigger(c.controlUI, 'click'); });
			
			c.wcc_collection = new STANFORD.MAPPING_TEXTS.collections.wcc();
			c.wcc_collection.on('reset', this.render_wcc, this);
			
			c.ner_collection = new STANFORD.MAPPING_TEXTS.collections.ner();
			c.ner_collection.on('reset', this.render_ner, this);
			
			c.topics = new STANFORD.MAPPING_TEXTS.collections.topics();
			c.topics.on('reset', this.render_topics, this);

		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					
					// default date range
					config = STANFORD.MAPPING_TEXTS.config,
					start = parseInt(config.start, 10),
					end = parseInt(config.end, 10);
			
			this.render_time();
						
			c.selected_year_range = {y1: start, y2: end};
			c.epochs.set_selected({y: end});
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });

			this.render_wcc();
			this.render_ner();
			this.render_topics();
			
			h.invokePlugins({
				parentEl: '#app-ds-view',
				plugins: [ 'modal' ]
			});
			
			h.toggleRows();
		},

		
		
		
		
		
		
		
		
		
		
		
		
		// ----
		// ---- Top row
		// ----
		
		// Render time view
		//  #time-view (replaces #map-view with new #map-veiw for each render)
		//
		render_time: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					time_select_view = new STANFORD.MAPPING_TEXTS.views.time_select_view({
						collection: c.epochs
					}),
					time_select_view_elem = $(this.el).find('#time-select-view ').find('div');
					
			
			time_select_view_elem.replaceWith( time_select_view.render().el );
			time_select_view_elem = $(this.el).find('#time-select-view').find('div');
			
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
						backgroundColor: '#E2E2E2',
        		center: center,
        		zoom: 6,
        		mapTypeId: google.maps.MapTypeId.TERRAIN
      		},
					map,
					mapWidget = $('#map-view').find('.widget');

			$(this.el).find(mapWidget).html( map_view.render().el );
			
			map = new google.maps.Map( $(this.el).find(mapWidget).get(0), map_options );
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
			  controlDiv.appendChild(controlUI);

			  // Set CSS for the control interior
			  var controlText = document.createElement('DIV'),
						select_all_text = 'Select All', 
						unselect_all_text = 'Unselect All';
						
			  controlText.style.fontFamily = 'Arial,sans-serif';
			  controlText.style.fontSize = '12px';
			  controlText.style.paddingLeft = '4px';
			  controlText.style.paddingRight = '4px';
			  controlText.innerHTML = '<b>' + select_all_text + '</b>';
			  controlUI.appendChild(controlText);

			  // Click handler for "Select All"
				c.controlUI = controlUI;
				
			  google.maps.event.addDomListener(controlUI, 'click', function(ev) {
					var num_of_pubs = c.pubs.size(),
							fun;
					
					if (homeControlDivText.text() === unselect_all_text) {
						console.log('===SET from unselected to selected===');
						homeControlDivText.html(select_all_text);
						
						fun = function(city, index) {
							var city_overlay = city.get('circle_overlay'),
									last_city = num_of_pubs === index+1,
									options = {
										mode: 'BULK_SELECT_OPT',
										fetch: last_city
									};

							// set city attr
							city.set({display: false}, options);
							city_overlay.setOptions({ strokeColor: "#FF0000" });
						};
					} else {
						console.log('===SET from selected to unselected===');
						homeControlDivText.html(unselect_all_text);
						
						fun = function(city, index) {
							var city_overlay = city.get('circle_overlay'),
									last_city = num_of_pubs === index+1,
									options = {
										mode: 'BULK_SELECT_OPT',
										fetch: last_city
									};

							// set city attr
							city.set({display: true}, options);
							city_overlay.setOptions({ strokeColor: "#CCFF33" });
						};
					}
					
					c.pubs.forEach( fun );

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
			  controlText.innerHTML = '<h6>Legend</h6><p>Circle size corresponds to the number of publications per city for the selected time period.';
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
			        fillOpacity: 0
			    }).setMap(map);
			}

			c.pubs.forEach(function(city) {
				var city_norm = h.normalize( city.get('city') ),
						center = STANFORD.MAPPING_TEXTS.geocoding[city_norm],
						pubs_tally = city.get('pubs').length,
						radius = 20000 + (pubs_tally * 5000),
						zIndex = 1000000,
						city_options = {
							clickable: true,
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
						
						content = "<h6>" + city.get('city') + "</h6><p>Publications: " + pubs_tally,
						infowindow = new google.maps.InfoWindow({content: content}),
						
						circle_overlay = new google.maps.Circle(city_options);
						
				city.set({circle_overlay: circle_overlay});
				
				// Mouse handlers for circle overlay
				google.maps.event.addListener(circle_overlay, 'mouseover', function(ev) {
					infowindow.setPosition(circle_overlay.getCenter());
					infowindow.open(map);
				});
				
				google.maps.event.addListener(circle_overlay, 'mouseout', function(ev) {
					infowindow.close();
				});
				
				// Click handler for "click" on circle overlay		
				google.maps.event.addListener(circle_overlay, 'click', function(ev) {
					var options = {
								fetch: true,
								mode: 'USER_CLICKED_OPT'
							};
					
					if (city.get('display') === true) { 
						console.log(city.get('city'), 'circle clicked, *DISPLAYED*');
						
						// set city attr
						city.set({display: false}, options);
						
						circle_overlay.setOptions({ strokeColor: "#FF0000" });
						
					} else {
						console.log(city.get('city'), 'circle clicked, *NOT DISPLAYED*');
						
						// set city attr
						city.set({display: true}, options);
						
						circle_overlay.setOptions({ strokeColor: "#CCFF33" });
					}


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
			.find('#pub-view .widget')
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
				plugins: [ 'tabs', 'tooltip', 'modal', 'clipboard' ]
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
				plugins: [ 'tabs', 'tooltip', 'modal', 'clipboard' ]
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
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					
					topics = c.topics,
					topic_view = new STANFORD.MAPPING_TEXTS.views.topic_view({
						collection: topics
					});
			
			$(this.el)
			.find('#topic-view')
			.html( topic_view.render().el )
			
			h.invokePlugins({
				parentEl: '#topic-view',
				plugins: [ 'modal', 'tooltip', 'clipboard' ]
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