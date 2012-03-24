$(function(){
	
	STANFORD.MAPPING_TEXTS.views.time_select_view = Backbone.View.extend({
		
		tagName: "div",
		
		id: "time-select-view",
		
		className: "span-80pct mtl",
		
		events : {
			'slidestop'			: 'slider_updated',
			'click a.epoch'	: 'epoch_updated'
		},
		
		initialize: function(attr) {
			console.log('time_select_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.time_select_view,
					config = STANFORD.MAPPING_TEXTS.config,
					start = parseInt(config.start, 10),
					end = parseInt(config.end, 10),
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
			.find('#valueAA option[value="' + start + '"]').attr('selected','selected')
			.end()
			.find('#valueBB option[value="' + end + '"]').attr('selected','selected');
			
			return this;
		},
		
		slider_updated: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					y1 = c.select_aa.val(),
					y2 = c.select_bb.val();

			c.selected_year_range = {y1: y1, y2: y2};
			c.selected_epoch = false;
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });
		},
		
		epoch_updated: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					epoch = $(ev.target).text().replace('-', ':'),
					years = epoch.split(':'),
					y1 = years[0],
					y2 = years[1];
			
			if (c.selected_epoch_el) {
				// prev selected epoch
				c.selected_epoch_el.removeClass('active');
			}
			c.selected_epoch_el = $(ev.target);
			c.selected_epoch_el.addClass('active');
			
			c.selected_year_range = {y1: y1, y2: y2};
			c.selected_epoch = epoch;
			
			this.fetch_data.call({ fetch_funs: ['fetch_publications', 'fetch_topics'] });
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.views.time_select_view.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
});