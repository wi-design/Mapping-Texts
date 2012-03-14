$(function(){
	
	STANFORD.MAPPING_TEXTS.views.time_select_view = Backbone.View.extend({
		
		tagName: "div",
		
		id: "time-select-view",
		
		className: "span-80pct mtl",
		
		events : {
			'slidestop': 'update'
		},
		
		initialize: function(attr) {
			console.log('time_select_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.time_select_view,
					start = parseInt(STANFORD.MAPPING_TEXTS.config.start, 10),
					end = parseInt(STANFORD.MAPPING_TEXTS.config.end, 10),
					epochs = STANFORD.MAPPING_TEXTS.config.epochs,
					data = { 
						epochs		: epochs,
						_1800s		: _.range(start, 1900),
						_1900s		: _.range(1900, 2000),
						_2000s		: _.range(2000, end+1)
					},
					html = Mustache.to_html(template, data);
		
			$(this.el)
			.html(html)
			.find('#valueAA option[value="1990"]').attr('selected','selected')
			.end()
			.find('#valueBB option[value="1995"]').attr('selected','selected');
			
			return this;
		},
		
		update: function(ev) {
			var y1 = STANFORD.MAPPING_TEXTS.cached.select_aa.val(),
					y2 = STANFORD.MAPPING_TEXTS.cached.select_bb.val();
			
			STANFORD.MAPPING_TEXTS.cached.pubs.fetch({
				data: {
					y1: y1,
					y2: y2,
					x_pubs: ['brownwood:the_yellow_jacket', 'abilene:the_reata']
				}
			});
			
			STANFORD.MAPPING_TEXTS.cached.wcc_collection.fetch({
				data: {
					y1: y1,
					y2: y2,
					x_pubs: ['brownwood:the_yellow_jacket', 'abilene:the_reata']
				}
			});
			
			STANFORD.MAPPING_TEXTS.cached.ner_collection.fetch({
				data: {
					y1: y1,
					y2: y2,
					x_pubs: [/*'brownwood:the_yellow_jacket', */'abilene:the_reata']
				}
			});		
			
		}
		
	});
	
});