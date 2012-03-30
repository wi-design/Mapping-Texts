$(function(){
	
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
	
});