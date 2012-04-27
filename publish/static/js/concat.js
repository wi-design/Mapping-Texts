/*
 * Mapping Texts v1.0
 *
 * Project Name: Mapping Texts
 * URL: mappingtexts.org
 *
 * 
 * Copyright 2012 Wi-Design, Inc. 
 * Website: wi-design.com
 * Email: info@wi-design.com
 *
 */

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
		tulia					:	new google.maps.LatLng(34.53589, -101.75852),
		contour				: [
											[36.50000,-103.00029],
											[33.99972,-103.04167],
											[32.99944,-103.06583],
											[31.99972,-103.06652],
											[31.99972,-106.61722],
											[31.98743,-106.66223],
											[31.88611,-106.62860],
											[31.82680,-106.59333],
											[31.78076,-106.52288],
											[31.75027,-106.46001],
											[31.75403,-106.41654],
											[31.68735,-106.33431],
											[31.63750,-106.30335],
											[31.55930,-106.27223],
											[31.47222,-106.20987],
											[31.43194,-106.14362],
											[31.40250,-106.06293],
											[31.39527,-106.01167],
											[31.36972,-105.97278],
											[31.26916,-105.84195],
											[31.20819,-105.78696],
											[31.08153,-105.60001],
											[30.99639,-105.54140],
											[30.94639,-105.49071],
											[30.86584,-105.39306],
											[30.79722,-105.25306],
											[30.77861,-105.16944],
											[30.74972,-105.12500],
											[30.63222,-104.99084],
											[30.60764,-104.93473],
											[30.56624,-104.89653],
											[30.52500,-104.87973],
											[30.46639,-104.86501],
											[30.38611,-104.82224],
											[30.31806,-104.77695],
											[30.23333,-104.70556],
											[30.18750,-104.68224],
											[30.10542,-104.67931],
											[30.05888,-104.70133],
											[30.00500,-104.69501],
											[29.94097,-104.67806],
											[29.67292,-104.54182],
											[29.59584,-104.45334],
											[29.52500,-104.33805],
											[29.52597,-104.28514],
											[29.49445,-104.22835],
											[29.42277,-104.16973],
											[29.34250,-104.06361],
											[29.32111,-104.02362],
											[29.30583,-103.97501],
											[29.28583,-103.88917],
											[29.19916,-103.73584],
											[29.12611,-103.53140],
											[29.07305,-103.46195],
											[29.03639,-103.40112],
											[28.99652,-103.29087],
											[28.98403,-103.16369],
											[29.09416,-103.05195],
											[29.18306,-102.95500],
											[29.25416,-102.89585],
											[29.35222,-102.85112],
											[29.47408,-102.80476],
											[29.74277,-102.67029],
											[29.78166,-102.49625],
											[29.85055,-102.35556],
											[29.88798,-102.30181],
											[29.84722,-102.22778],
											[29.80277,-102.09750],
											[29.79847,-102.04820],
											[29.80583,-101.99085],
											[29.80472,-101.82584],
											[29.79666,-101.77474],
											[29.77806,-101.70668],
											[29.76639,-101.62876],
											[29.77111,-101.53917],
											[29.77278,-101.40501],
											[29.66055,-101.35584],
											[29.61527,-101.31084],
											[29.54027,-101.21861],
											[29.49069,-101.13904],
											[29.43777,-101.02528],
											[29.35000,-100.93695],
											[29.25875,-100.79571],
											[29.10903,-100.66584],
											[28.99583,-100.62821],
											[28.93333,-100.62195],
											[28.86361,-100.56445],
											[28.82277,-100.52736],
											[28.72571,-100.49182],
											[28.67584,-100.47986],
											[28.62639,-100.44389],
											[28.51833,-100.35917],
											[28.40041,-100.33126],
											[28.28056,-100.28146],
											[28.19750,-100.18640],
											[28.15562,-100.07834],
											[27.96166,-99.93501],
											[27.90389,-99.88084],
											[27.80514,-99.86091],
											[27.77174,-99.80670],
											[27.71472,-99.74140],
											[27.66894,-99.71390],
											[27.64139,-99.65363],
											[27.64124,-99.60618],
											[27.56805,-99.50390],
											[27.47666,-99.47320],
											[27.25806,-99.44335],
											[27.04694,-99.45862],
											[26.86985,-99.31925],
											[26.83083,-99.25334],
											[26.71445,-99.20056],
											[26.52694,-99.13251],
											[26.43500,-99.10474],
											[26.40583,-98.97557],
											[26.34889,-98.78418],
											[26.28972,-98.69556],
											[26.25611,-98.57834],
											[26.22333,-98.43987],
											[26.19166,-98.38806],
											[26.15361,-98.36139],
											[26.09777,-98.28612],
											[26.06250,-98.20001],
											[26.04777,-98.03334],
											[26.05861,-97.97974],
											[26.06361,-97.84751],
											[26.03805,-97.67890],
											[26.00500,-97.61446],
											[25.95111,-97.55945],
											[25.89833,-97.51445],
											[25.84333,-97.41723],
											[25.85966,-97.34474],
											[25.92000,-97.31529],
											[25.94111,-97.26529],
											[25.96643,-97.14074],
											[26.07014,-97.16788],
											[26.02771,-97.18066],
											[25.98194,-97.24077],
											[26.16138,-97.31751],
											[26.24611,-97.31862],
											[26.36944,-97.40195],
											[26.41195,-97.41278],
											[26.54555,-97.42305],
											[26.80701,-97.50403],
											[26.84208,-97.56041],
											[27.00548,-97.55742],
											[27.03083,-97.47501],
											[27.12805,-97.44445],
											[27.26229,-97.42936],
											[27.25777,-97.47695],
											[27.23527,-97.53389],
											[27.25250,-97.63389],
											[27.31698,-97.67670],
											[27.39554,-97.72333],
											[27.44972,-97.76934],
											[27.43222,-97.72333],
											[27.38555,-97.67694],
											[27.34480,-97.62469],
											[27.37722,-97.52528],
											[27.30624,-97.49000],
											[27.32729,-97.41299],
											[27.65611,-97.27973],
											[27.71555,-97.31555],
											[27.78334,-97.39277],
											[27.82583,-97.48472],
											[27.87806,-97.49249],
											[27.85250,-97.34527],
											[27.82180,-97.19451],
											[28.03166,-97.02250],
											[28.09166,-97.04611],
											[28.06972,-97.09806],
											[28.04000,-97.14666],
											[28.06854,-97.21347],
											[28.16180,-97.16937],
											[28.18638,-97.02806],
											[28.12111,-96.98334],
											[28.12708,-96.93097],
											[28.14027,-96.88276],
											[28.24138,-96.78084],
											[28.34896,-96.78382],
											[28.40986,-96.84522],
											[28.47152,-96.80034],
											[28.43777,-96.74695],
											[28.39770,-96.70708],
											[28.33409,-96.69701],
											[28.32416,-96.62471],
											[28.44173,-96.39997],
											[28.50944,-96.48999],
											[28.56694,-96.58389],
											[28.71194,-96.64473],
											[28.69756,-96.56256],
											[28.64777,-96.55520],
											[28.61944,-96.49555],
											[28.63548,-96.40867],
											[28.76027,-96.44291],
											[28.73619,-96.39411],
											[28.68514,-96.26736],
											[28.69548,-96.19208],
											[28.62729,-96.14080],
											[28.58195,-96.21743],
											[28.60208,-96.13361],
											[28.63445,-96.05915],
											[28.65104,-95.99068],
											[28.60388,-95.99652],
											[28.57388,-96.07236],
											[28.53833,-96.14666],
											[28.48812,-96.21201],
											[28.52195,-96.13110],
											[28.59027,-96.00056],
											[28.62138,-95.89555],
											[28.64833,-95.82723],
											[28.69249,-95.76551],
											[28.66819,-95.84778],
											[28.64000,-95.89612],
											[28.62632,-95.94152],
											[28.68642,-95.94111],
											[28.73694,-95.79723],
											[28.73814,-95.68989],
											[28.75556,-95.61833],
											[28.89611,-95.35973],
											[28.93153,-95.30319],
											[29.05124,-95.14861],
											[29.18194,-95.08695],
											[29.33777,-94.89390],
											[29.42090,-94.89799],
											[29.56556,-95.01584],
											[29.71506,-95.06006],
											[29.71652,-95.00709],
											[29.69583,-94.95555],
											[29.76195,-94.82431],
											[29.78500,-94.75702],
											[29.75680,-94.71104],
											[29.71111,-94.70666],
											[29.61291,-94.73042],
											[29.56805,-94.76584],
											[29.55277,-94.67556],
											[29.57319,-94.57403],
											[29.55888,-94.47659],
											[29.51653,-94.51542],
											[29.49444,-94.61221],
											[29.46749,-94.69208],
											[29.36791,-94.75417],
											[29.40944,-94.70806],
											[29.44708,-94.65361],
											[29.58416,-94.31751],
											[29.65361,-94.13430],
											[29.67916,-94.03639],
											[29.68163,-93.85844],
											[29.76556,-93.91472],
											[29.81666,-93.95847],
											[29.98514,-93.85201],
											[29.99416,-93.79666],
											[30.06597,-93.72292],
											[30.15138,-93.69846],
											[30.25111,-93.71501],
											[30.31083,-93.73916],
											[30.37306,-93.75695],
											[30.54930,-93.73251],
											[30.64638,-93.67917],
											[30.68361,-93.63474],
											[30.83125,-93.56235],
											[31.07416,-93.53528],
											[31.18478,-93.53708],
											[31.23138,-93.60777],
											[31.36361,-93.66028],
											[31.54500,-93.78889],
											[31.60250,-93.83229],
											[31.68514,-93.81931],
											[31.78569,-93.83750],
											[31.86374,-93.88736],
											[31.90506,-93.93034],
											[31.92346,-93.97014],
											[31.99592,-94.04253],
											[32.91638,-94.04334],
											[33.01093,-94.04149],
											[33.55332,-94.04527],
											[33.57361,-94.09042],
											[33.58971,-94.19138],
											[33.56266,-94.31569],
											[33.55583,-94.38416],
											[33.60500,-94.45167],
											[33.64716,-94.48419],
											[33.64916,-94.54361],
											[33.69249,-94.71417],
											[33.74944,-94.85278],
											[33.81722,-94.95223],
											[33.85416,-94.99777],
											[33.94540,-95.15389],
											[33.96221,-95.22753],
											[33.91173,-95.25890],
											[33.88750,-95.30499],
											[33.87027,-95.37055],
											[33.86666,-95.43306],
											[33.91465,-95.54410],
											[33.94332,-95.59264],
											[33.86776,-95.77028],
											[33.85583,-95.87471],
											[33.87055,-95.96112],
											[33.84096,-96.09847],
											[33.82132,-96.14847],
											[33.76361,-96.18777],
											[33.69999,-96.32049],
											[33.77944,-96.47278],
											[33.84944,-96.59473],
											[33.84471,-96.72820],
											[33.86804,-96.84292],
											[33.90221,-96.87791],
											[33.95499,-96.90590],
											[33.94944,-96.97409],
											[33.84749,-97.04777],
											[33.75361,-97.08307],
											[33.73333,-97.16195],
											[33.78513,-97.19861],
											[33.83416,-97.19500],
											[33.89194,-97.24222],
											[33.82111,-97.39681],
											[33.84152,-97.45514],
											[33.90221,-97.51306],
											[33.97083,-97.59500],
											[33.98318,-97.67153],
											[33.95888,-97.71501],
											[33.89145,-97.78305],
											[33.86069,-97.86104],
											[33.87791,-97.94764],
											[33.93554,-97.94784],
											[33.99819,-97.98138],
											[34.00750,-98.05735],
											[34.06656,-98.09351],
											[34.12777,-98.16722],
											[34.13221,-98.28277],
											[34.08215,-98.40903],
											[34.06985,-98.47875],
											[34.10360,-98.53431],
											[34.15152,-98.58203],
											[34.15263,-98.65903],
											[34.13750,-98.74055],
											[34.15471,-98.83528],
											[34.19805,-99.02445],
											[34.21541,-99.17485],
											[34.27277,-99.20056],
											[34.32707,-99.19659],
											[34.40263,-99.25792],
											[34.43749,-99.34167],
											[34.41999,-99.39111],
											[34.38027,-99.44388],
											[34.37874,-99.62986],
											[34.39875,-99.68611],
											[34.45333,-99.75196],
											[34.50666,-99.81027],
											[34.55694,-99.87264],
											[34.57527,-99.93069],
											[34.57694,-99.99596],
											[34.88276,-100.00111],
											[36.49972,-100.00029],
											[36.50000,-103.00029]
										]
	},




	
	cached: {},
	config: {},

	// Backbone objects
	models: {},
	collections: {},
	views: {},
	
	
	
	
	
	
	
	helpers: {
		
		// Ajax loader
		//
		add_ajax_loader_template: function($parent_el) {
			$parent_el.append( STANFORD.MAPPING_TEXTS.config.templates.ajax_loader );
		},
		del_ajax_loader_template: function($parent_el) {
			$parent_el.children('.ajax-container').remove();
		},
		
		normalize: function(str) {
			return str.replace(/ /g, '_');
		},
		
		
		// d3 bar graph
		make_bar_graph: function(data, labels, d3_chart, width) {
			
			var height_of_bar = padding_size = 20,
					w = width - padding_size,
			    h = height_of_bar * data.length,
					left_translate = 90, 
					space_to_shrink_bar_graph_by = 150,
					width_of_bar = w - space_to_shrink_bar_graph_by,
					
			    x = d3.scale.linear().domain([0, d3.max(data)]).range([0, width_of_bar]),
			    y = d3.scale.ordinal().domain(d3.range(data.length)).rangeBands([0, h], .2),

					vis = d3.select(d3_chart)
			  					.append("svg:svg")
									.attr("class", 'chart')
			    				.attr("width", w + left_translate)
			    				.attr("height", h )
			  					.append("svg:g")
			    				.attr("transform", "translate(" + left_translate + ",0)"),

					bars = vis.selectAll("g.bar")
			    					.data(data)
			  						.enter()
										.append("svg:g")
			    					.attr("class", "bar")
			    					.attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

			bars.append("svg:rect")
					.attr("fill", "#F4765E")
			    .attr("width", x)
			    .attr("height", y.rangeBand());
		
			bars.append("svg:text")
			    .attr("x", width_of_bar + left_translate - 26)
			    .attr("y", y.rangeBand() / 2)
			    .attr("dx", -1)
			    .attr("dy", ".35em")
			    .attr("fill", "#333")
			    .attr("text-anchor", "end")
			    .text(function(d, i) { return numberWithCommas(data[i]); });

			bars.append("svg:text")
			    .attr("x", -3)
			    .attr("y", y.rangeBand() / 2)
			    .attr("dx", -6)
			    .attr("dy", ".35em")
					.attr("fill", "#333")
			    .attr("text-anchor", "end")
			    .text(function(d, i) { return labels[i]; });
			
			// using: http://stackoverflow.com/a/2901298
			function numberWithCommas(x) {
			    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
		
		
		// tag cloud
		make_tag_cloud: function(tags, weights) {
			
			var denominator = weights[0],
					percentage_mapping = function(w) {
						return Math.round((w / denominator) * 100);
					},
					class_mapping = function(percentage, index) {
						if (font_percentages[index] <= 14) return 'tag-1';
						else if (font_percentages[index] <= 25) return 'tag-2';
						else if (font_percentages[index] <= 50) return 'tag-3';
						else if (font_percentages[index] <= 75) return 'tag-4';
						else return 'tag-5';
					},
					font_percentages = _.map(weights, percentage_mapping),
					tag_classes = _.map(font_percentages, class_mapping),
					
					make_tag_obj = function(tag, index) {
						return {
							tag: tag,
							percentage: font_percentages[index],
							klass: tag_classes[index]
						};
					},
					tag_array = _.map(tags, make_tag_obj);
			
			// using: http://stackoverflow.com/a/962890
			function shuffle(array) {
			    var tmp, current, top = array.length;

			    if(top) while(--top) {
			        current = Math.floor(Math.random() * (top + 1));
			        tmp = array[current];
			        array[current] = array[top];
			        array[top] = tmp;
			    }

			    return array;
			}
			
			return shuffle(tag_array);
			
		},
		
		
		
		
		
		update_slider: function(y1, y2) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					index1, index2;
			
			c.select_aa.find('option:selected').removeAttr('selected');
			c.select_bb.find('option:selected').removeAttr('selected');
			
			c.select_aa.find('option[value="' + y1 + '"]').attr('selected', 'selected');
			c.select_bb.find('option[value="' + y2 + '"]').attr('selected', 'selected');
			
			index1 = c.select_aa.get(0).selectedIndex;
			index2 = c.select_bb.get(0).selectedIndex;
			
			c.jqui.jqui_slider.slider('values', 0, index1);
			c.jqui.jqui_slider.slider('values', 1, index2);
			
			
			$('#handle_valueAA')
			.attr('aria-valuetext', y1)
			.attr('aria-valuenow', index1)
			.find('.ui-slider-tooltip .ttContent')
			.text( y1 );
			
			$('#handle_valueBB')
			.attr('aria-valuetext', y2)
			.attr('aria-valuenow', index2)
			.find('.ui-slider-tooltip .ttContent')
			.text( y2 );
		},
		
		
		
		
		// Fetch collection helpers
		//
		fetch_publications: function(args) {
			var h = STANFORD.MAPPING_TEXTS.helpers,
			 		c = STANFORD.MAPPING_TEXTS.cached;
			
			c.pubs.fetch({
				data: args,
				success: function() {
					console.log("**** pubs fetched success");
					
					h.del_ajax_loader_template( $('#pub-view').find('.bd') );
					h.del_ajax_loader_template( $('#map-view') );
				}
			});
			
			h.add_ajax_loader_template( $('#pub-view').find('.box') );
			h.add_ajax_loader_template( $('#map-view') );
		},
		
		fetch_wcc: function(args) {
			var h = STANFORD.MAPPING_TEXTS.helpers,
			 		c = STANFORD.MAPPING_TEXTS.cached;
			
			c.wcc_collection.fetch({
				data: args,
				success: function() {
					console.log("**** wcc fetched success");
					
					h.del_ajax_loader_template( $('#wcc-view').find('.inner') );
				}
			});
			
			h.add_ajax_loader_template( $('#wcc-view').find('.inner') );
		},
		
		fetch_ner: function(args) {
			var h = STANFORD.MAPPING_TEXTS.helpers,
			 		c = STANFORD.MAPPING_TEXTS.cached;
			
			c.ner_collection.fetch({
				data: args,
				success: function() {
					console.log("**** ner fetched success");
					
					h.del_ajax_loader_template( $('#ner-view').find('.inner') );
				}
			});
			
			h.add_ajax_loader_template( $('#ner-view').find('.inner') );
		},
		
		fetch_topics: function(args) {
			var h = STANFORD.MAPPING_TEXTS.helpers,
			 		c = STANFORD.MAPPING_TEXTS.cached;
			
			c.topics.fetch({
				data: args,
				success: function(model){
					console.log("**** topics fetched success");
					
					h.del_ajax_loader_template( $('#topic-view').find('.inner') );
				}
			});
			
			h.add_ajax_loader_template( $('#topic-view').find('.inner') );
		},
		
		// set of functions that return the data arg for
		//  backbone fetch		
		get_fetch_data_arg: function(c) {
			return {
				fetch_publications: function() {
					return {
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2
					};
				},
			
				fetch_topics: function() {
					var epoch_selected, city_selected, city_pub_selected;
				
					if ( c.epochs.epoch_is_not_selected() ) {
						return {};
					} else {
					
						// epic selected at this point ...
						epoch_selected = c.pubs.get_if_all_cities_pubs_selected();
						if (epoch_selected === true) {
							return {
								v: c.epochs.epoch_norm()
							};
						} else {
						
							city_selected = c.pubs.get_if_city_and_all_its_pubs_selected();
							if (city_selected !== false) {
								return {
									v: c.epochs.epoch_norm(),
									postfix: city_selected
								};
							} else {
							
								city_pub_selected = c.pubs.get_if_city_and_one_pub_selected();
								if (city_pub_selected !== false) {
									return {
										v: c.epochs.epoch_norm(),
										postfix: city_pub_selected
									};
							
								} else {
									return {};
								} // end if city and pub selected
							
							} // end if city and all its pubs selected
					
						} // end if all cities/pubs selected
					
					} // end if epoch is not selected
				}, // end function()
			
				fetch_wcc: function() {
					return {
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2,
						pubs: c.pubs.parse_pubs()
					};
				},
			
				fetch_ner: function() {
					return {
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2,
						pubs: c.pubs.parse_pubs()
					};
				}
			
			};
		},

		// helper function to call plugins in the different views
		invokePlugins: function( args ) {
			
			_.forEach(
				args.plugins,
				function(plugin) {
					if (plugin === 'tabs') {
						$(args.parentEl)
						.find('.tabs')
						.tabs('.tab-content > .tab-pane', {
							effect: 'fade'
						});
					} else if (plugin === 'tooltip') {
						$(args.parentEl)
						.find('[title]')
						.tooltip({
							effect: 'fade',
							predelay: 500,
							offset: [-10,0]
						});
					} else if (plugin === 'modal') {
						$(args.parentEl)
						.find('a[data-modal-box]')
						.modal();
					} else if (plugin === 'clipboard') {						
						$(args.parentEl)
						.find('[data-copy-clipboard="button"]')
						.zclip({
							path:'static/flash/ZeroClipboard.swf',
							copy:$(args.parentEl).find('[data-copy-clipboard="text"]').text()
						});
					} else {
						throw "oops, plugin : " + plugin + " does not exist";
					}
				}
			);
		},
		
		// toggle row heights
		toggleRows: function() {
			var rows = $('[data-toggle="height"]'), //find row/s to toggle height on
					iconCont = $('<div><i></i></div>'), // create container to hold icon and icon
					toggleSwitch = iconCont.find('i'); // target icon
						
					// append icon after row				
					rows.after(iconCont); 
					
					// add classes for iconCont and icon itself
					iconCont.css('overflow' , 'hidden');
					iconCont.find('i').addClass('icon-arrow up push');
					
			toggleSwitch.on('click', function(e) { // toggle height of rows
					$(rows).animate({
						height : 'toggle'
					}, 'fast');

				toggleSwitch.toggleClass(function() { // toggle class of icon based on height of rows
					if( $(this).find(rows).filter(':hidden') ) {
						return 'down'
					} else {
						return 'up'
					}
				});

			});
		}
		
	}, // end helper functions
	
	
	
	
	
	
	
	
	
	
	objects: {

	}, // end helper objects








	

	traits: {

		fetch_data: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					data_fun = h.get_fetch_data_arg(c),
					
					cb = function(fetch_fun) {
						var data = data_fun[fetch_fun]();
												
						h[fetch_fun](data);
					};
			
			_.each( this.fetch_funs, cb );
			
			console.log('fetch_data() called');
			
		}
		
		
	}
};(function(){
	
	STANFORD.MAPPING_TEXTS.models.wcc = Backbone.Model.extend({
		
		// attrs are { word: x, count: y }
		
		initialize: function() {}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.models.ner = Backbone.Model.extend({
		
		// attrs are { word: x, count: y }
		
		initialize: function() {}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.models.city = Backbone.Model.extend({
		
		// attrs are { city:'name', pubs: [{...}, ...], display: false }
		
		defaults: {
			"display" : false
		},
		
		initialize: function() {
			
			console.log("city initialized");
			
			// Make pubs a collection (publications)
			this.set({
				pubs: new STANFORD.MAPPING_TEXTS.collections.publications( this.get('pubs') ) 
			});
			
			this.on("change:display", this.add_remove_city_to_pub_view);
			this.on("change:display", function(model, display, options) {
				
				var context = { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] };
				
				if (options.mode === 'BULK_SELECT_OPT') {
					if (options.fetch) this.fetch_data.call( context );
				}
				
				if (options.mode === 'USER_CLICKED_OPT') { // options.fetch should always be true
					if (options.fetch) this.fetch_data.call( context );
				}
				
				console.log('FETCH city', model.get('city'), 'Mode:', options.mode, 'Fetch:', options.fetch);
				
			});
		},
		
		
		
		
		
		// city model custom methods
		all_pubs_selected: function() {
			var query = function(publication) { return publication.get('checked'); }
			return this.get('pubs').all(query);
		},
		
		get_if_one_pub_selected: function() {
			var query = function(publication) { return publication.get('checked'); },
					pubs_checked = this.get('pubs').filter( query ),
					pub_selected;
			
			if (pubs_checked.length === 1) {
				pub_selected = pubs_checked[0];
				return pub_selected;
			} else {
				return false;
			}
		},
		
		
		
		
		
		// Event handlers for listening to changes to display attr
		add_remove_city_to_pub_view: function(model, display, options) {
			
			//console.log("called add_rm_city...()");
			
			if (model.previous("display") === false && display === true) {
				console.log('add city to pub-view: ' + model.get('city'));
				model.add_new_city();
			}
			
			if (model.previous("display") === true && display === false) {
				console.log('remove city from pub-view: ' + model.get('city'));
				model.remove_city();
			}
			
		},

		
		
		
		
		
		// helpers
		add_new_city: function(model) {
			var views = STANFORD.MAPPING_TEXTS.views,
					city_view = new views.city_view({model: this});
			
			$('#pub-view')
			.find('.spiffy-scrollbar')
			
			.children('i')
			.addClass('hidden')
			.end()
			
			.append( city_view.render().el )
			.find('[data-checkbox="check-all"]')
			.each( function(i) { 
				// need to add id separate id attr. for each check-all input
				$(this)
				.attr('id' , 'check-all-' + ( i + 1 ))
				// add and find sibling label
				.add()
				.next('label')
				// need to add same id from sibling check all input to for attr. for silbing label
				// this will enable clicking on label or checkbox to deselect or check all pubs
				.attr('for', 'check-all-' + ( i + 1 ));
				// invoke check all plugin
				$(this).setupCheckboxAll( {
					closestWrapper: $(this)
													.closest('[data-pub="label"]')
													.next('[data-pub="listings"]')
					} )
			});			
		},
		
		remove_city: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					city_norm = h.normalize( this.get('city') ),
					spiffy_children = $('#pub-view').find('.spiffy-scrollbar').children(),
					new_spiffy;
			
			spiffy_children
			.filter('#' + city_norm)
			.remove();
			
			new_spiffy = $('#pub-view').find('.spiffy-scrollbar').children();
			
			if (new_spiffy.size() === 1) {
				new_spiffy
				.eq(0)
				.removeClass('hidden');
			}
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.models.city.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.models.publication = Backbone.Model.extend({
		
		// attrs are {"pubseq": "46", "pub": "texas sentinel"}
		
		defaults: {
			"checked" : true
		},
		
		initialize: function() {
			console.log('publication model initialized');
			
			this.on("change:checked", this.info);
			this.on("change:checked", function(model, display, options) {
				
				var context = { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] };
				
				if (options.mode === 'BULK_SELECT_OPT') {
					if (options.fetch) this.fetch_data.call( context );
				}
				
				if (options.mode === 'USER_CLICKED_OPT') { // options.fetch should always be true
					if (options.fetch) this.fetch_data.call( context );
				}
				
				console.log('FETCH publication', model.get('pub'), 'Mode:', options.mode, 'Fetch:', options.fetch);
				
			});
			//this.on("change:checked", this.fetch_data, { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] });
		},
		
		info: function(model, checked) {
			console.log('pubname: ' + model.get('pub'));
			console.log('old checked value: ' + model.previous('checked'));
			console.log('new checked value: ' + checked);
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.models.publication.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.models.epoch = Backbone.Model.extend({
		
		// attrs are { "era": "World War II", "years": "1941-1945", "selected": true }
		
		defaults: {
			"selected" : false
		},
		
		initialize: function() {
			console.log('epoch model initialized');
			
			this.on("change:selected", this.update_epoch_el);
		},
		
		update_epoch_el: function(model, selected) {
			if (selected) {
				
				$('#time-select-view .era-nav')
					.find('a[data-epoch="' + model.get('years') + '"]')
					.addClass('active');

			} else {
				
				$('#time-select-view .era-nav')
					.find('a[data-epoch="' + model.get('years') + '"]')
					.removeClass('active');
			
			}
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.wcc = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.wcc,
		
		initialize: function(models, opts) {
			console.log('wcc collection initialized...');
		},
		
		url: '/wcc',
		
		parse: function(json) {
			return json.wcc;
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.ner = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.ner,
		
		initialize: function(models, opts) {
			console.log('ner collection initialized...');
		},
		
		url: '/ner',
		
		parse: function(json) {
			return json.ner;
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.pubs = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.city,
		
		initialize: function(models, opts) {
			console.log('pubs collection initialized...');
		},
		
		url: '/pub',
		
		parse: function(json) {
			return json.pubs;
		},
		
		comparator: function(city) {
			return city.get('city');
		},
		
		set_pubseq: function(pubseq, checked, options) {
			
			this.forEach(
				function(city) {
					
					var publication = city.get('pubs').find( 
						function(publication) { return publication.get('pubseq') === pubseq; }
					);
					
					if (publication) {
						publication.set({checked: checked}, options);
					} else {
						console.log('Not found for city ' + city.get('city'));
					}
					
				}
			);
		},
		
		parse_pubs: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					pubs = [];
			
			this.forEach(
				function(city) {
					
					if (city.get('display')) {
						
						city.get('pubs').forEach(
							function(publication) {
								var c, p;
								
								if (publication.get('checked')) {
									c = h.normalize( city.get('city') );
									p = h.normalize( publication.get('pub') );
									pubs.push(c + ':' + p);
								}	
							}
						);
					
					}
				
				}
			);

			return pubs;
		},
		
		
		// topic models
		get_if_all_cities_pubs_selected: function() {
			var query = function(city) { return city.get('display') && city.all_pubs_selected(); }
			return this.all( query );
		},
		
		get_if_city_and_all_its_pubs_selected: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					query = function(city) { return city.get('display'); },
					displayed_cities = this.filter( query ),
					city_selected;
			
			if (displayed_cities.length === 1) {
				city_selected = displayed_cities[0];
				
				if (city_selected.all_pubs_selected() === true) {
					return h.normalize( city_selected.get('city') );
				} else {
					return false;
				}
					
			} else {
				return false;
			}
		},
		
		get_if_city_and_one_pub_selected: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					query = function(city) { return city.get('display'); },
					displayed_cities = this.filter( query ),
					city_selected;
			
			if (displayed_cities.length === 1) {
				city_selected = displayed_cities[0];
				
				pub_selected = city_selected.get_if_one_pub_selected();
				if (pub_selected !== false) {
					return h.normalize( city_selected.get('city') ) + ':' + h.normalize( pub_selected.get('pub') );
				} else {
					return false;
				}
					
			} else {
				return false;
			}
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.publications = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.publication,
		
		initialize: function(models, opts) {
			console.log('publication collection initialized...');
		},
		
		comparator: function(publication) {
			return publication.get('pub');
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.epochs = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.epoch,
		
		initialize: function(models, opts) {
			console.log('epoch collection initialized...');
		},

		epoch_is_not_selected: function() {
			var result = this.get_selected();
			return typeof result === 'undefined';
		},
				
		epoch_norm: function() {
			var result = this.get_selected();
			if (typeof result !== 'undefined') {
				return result.get('years').replace('-', ':');
			}
			throw "Epoch should be selected at this point.";
		},
		
		get_selected: function() {
			var query = function(e) { return e.get('selected'); },
					result = this.find( query );
			return result;
		},
		
		unselect: function() {
			var prev_selected = this.get_selected();
			if (typeof prev_selected !== 'undefined') {
				prev_selected.set( {selected: false} );
			}
		},
				
		set_selected: function(args) {
			var query,
					result,
					y1, y2;
			
			if (args.epoch) {
			
				query = function(e) { return e.get('years') === args.epoch; };
				result = this.find( query );
			
			} else if (args.y1 && args.y2) {
				
				y1 = parseInt(args.y1, 10);
				y2 = parseInt(args.y2, 10);
				query = function(e) { return y1 === e.get('begin') && y2 === e.get('end'); };
				result = this.find( query );
				
			}
			
			this.unselect();
			
			if (typeof result !== 'undefined') {
				result.set( {selected: true} );
			}
		}
		
	});
	
}());(function(){
	
	STANFORD.MAPPING_TEXTS.collections.topics = Backbone.Collection.extend({
		
		initialize: function() {
			console.log('topics collection initialized');
		},
		
		url: '/topic',
		
		parse: function(json) {
			return json.topics;
		}
		
	});
	
}());$(function(){
	
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
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.wcc_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('wcc_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.wcc_view,
					data = { 
						wcc: this.collection.toJSON(),
						tags: this.options.tags,
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2 
					},
					html = Mustache.to_html(t, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.ner_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('ner_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.ner_view,
					data = { 
						ner: this.collection.toJSON(),
						tags: this.options.tags,
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2 
					},
					html = Mustache.to_html(t, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.topic_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events: {
			'click #topic-view [data-click]' : 'showTopicKeys',
			'click .topic-key-list [data-dismiss]' : 'hideTopicKeys'
		},
		
		initialize: function(attr) {
			console.log('topic_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.topic_view,
					model = STANFORD.MAPPING_TEXTS.cached.topics,
					epoch = c.epochs.get_selected(),
					data = { 
						epoch: epoch ? epoch.get('years') : 'no era selected',
						topics: this.collection.toJSON()
					},
					html = Mustache.to_html(t, data);

			$(this.el).html(html);
			return this;
		},
		
		showTopicKeys: function(ev) {	
			$(ev.target)
			.attr('data-click' , 'true')
			
			// find the other rows and if one is showing data-click=true - make it false
			.closest('li')
			.siblings('li')
			.find('[data-click]')
			.attr('data-click' , '')
		},
		
		hideTopicKeys: function(ev) {
			$(ev.target)
			.closest('div')
			.attr('data-click' , 'false')
		}
		
	});
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.map_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "map-view",
		
		className: "span-66pct widget basic map-view",
		
		events : {},
		
		initialize: function(attr) {
			console.log('map_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.map_view,
					data = {},
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.pub_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic tool",
		
		events : {
			'click label[data-checkbox="check-all"]' : 'city_label_clicked',
			'change [data-checkbox="check-all"]' : 'city_cb_change',
			
			'change [data-checkbox="pub-check"]' : 'pub_cb_change',
			
			'click [data-details="details"] [data-details="summary"]' : 'disclosureWidget'
		},
		
		initialize: function(attr) {
			console.log('pub_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.pub_view,
					data = {
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2
					}, 
					html = Mustache.to_html(t, data);

			$(this.el).html(html);
			return this;
		},
		
		
		
		// event handlers
		city_label_clicked: function(ev) {
			// click on label triggers change on its checkbox even 
			//  though its hidden in the dom
			
			//$(ev.target).prev('input').change();
		},
		
		city_cb_change: function(ev) {
			
			var self = this,
					c = STANFORD.MAPPING_TEXTS.cached,
					initial_options = {
						mode: 'BULK_SELECT_OPT',
						fetch: false
					},
					last_option = {
						mode: 'BULK_SELECT_OPT',
						fetch: true
					},
					
					cb_all = $(ev.target),
					cb_all_checked = cb_all.is(':checked'),
					
					cb_children = cb_all.parent()
															.next('ul')
															.find('li input'),
															
					cb_children_size = cb_children.size(),
					
					onAllChecked = function(index) {
						var pubseq = self.get_pubseq($(this));
						
						$(this).attr('checked', 'checked');
						
						if ( index === (cb_children_size - 1) )
							c.pubs.set_pubseq(pubseq, true, last_option);
						else 
							c.pubs.set_pubseq(pubseq, true, initial_options);
					},
					onAllUnchecked = function(index) {
						var pubseq = self.get_pubseq($(this));
						
						$(this).removeAttr('checked');
							
						if ( index === (cb_children_size - 1) )
							c.pubs.set_pubseq(pubseq, false, last_option);
						else 
							c.pubs.set_pubseq(pubseq, false, initial_options);
					};

			console.log('city cb all change.');		
			cb_children.each( cb_all_checked ? onAllChecked : onAllUnchecked );
		},
		
		
		
		pub_cb_change: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					options = {
						mode: 'USER_CLICKED_OPT',
						fetch: true
					},
			
					cb = $(ev.target),
					checked = cb.is(':checked'),
					pubseq = this.get_pubseq(cb);

			c.pubs.set_pubseq(pubseq, checked, options);
		},
		
		
		
		disclosureWidget: function(ev) { 
			$(ev.target)
			// this is the ul with the listings for publications
			.next('[data-details="content"]')
			.animate({
				height : 'toggle'
			}, 'fast')
			// the equivalent if you used the <details>
			.closest('[data-details="details"]')
			.toggleClass('open');
		},
		
		
		get_pubseq: function(cb) {
			return cb.attr('id').split('-')[1];
		}
	});

	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.time_select_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "time-select-view",
		
		className: "span-full",
		
		events : {
			'slidestop'				: 'slider_updated',
			'click .epoch a'	: 'epoch_updated'
		},
		
		initialize: function(attr) {
			console.log('time_select_view view created');
		},
		
		render: function() {
			var t = STANFORD.MAPPING_TEXTS.config.templates.time_select_view,
					c = STANFORD.MAPPING_TEXTS.cached,
					config = STANFORD.MAPPING_TEXTS.config,
					data = { 
						epochs		: this.collection.toJSON(),
						_1800s		: _.range(config.start, 1900),
						_1900s		: _.range(1900, 2000),
						_2000s		: _.range(2000, config.end+1)
					},
					html = Mustache.to_html(t, data);
					
			$(this.el)
			.html(html)
			.find('#valueAA option[value="' + config.start + '"]').attr('selected','selected')
			.end()
			.find('#valueBB option[value="' + config.end + '"]').attr('selected','selected');
			
			return this;
		},
		
		slider_updated: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					y1 = c.select_aa.val(),
					y2 = c.select_bb.val();
					
			c.selected_year_range = {y1: y1, y2: y2};
			
			c.epochs.set_selected({y1: y1, y2: y2});
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });
		},
		
		
		epoch_updated: function(ev) { 
			ev.preventDefault();
			this.process_epoch( $(ev.target).attr('data-epoch') );
		},		
		
		process_epoch: function(epoch) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					h = STANFORD.MAPPING_TEXTS.helpers,
					years = epoch.split('-'),
					y1 = years[0],
					y2 = years[1];
			
			h.update_slider(y1, y2);
			
			c.selected_year_range = {y1: y1, y2: y2};
			
			c.epochs.set_selected({epoch: epoch});
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.views.time_select_view.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
});$(function(){
	
	STANFORD.MAPPING_TEXTS.views.city_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: 'open',
		
		initialize: function() {},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.city_view, 
					h = STANFORD.MAPPING_TEXTS.helpers,
					data = {
						city: this.model.get('city'),
						pubs: this.model.get('pubs').toJSON()
					},
					html = Mustache.to_html(template, data),
					city_norm = h.normalize( this.model.get('city') );

			$(this.el)
			.html(html)
			.attr('id', city_norm)
			.attr('data-details' , 'details');
			
			return this;
		}
		
	});
	
});