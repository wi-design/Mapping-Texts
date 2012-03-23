$(function(){
	
	STANFORD.MAPPING_TEXTS.views.time_select_view = Backbone.View.extend({
		
		tagName: "div",
		
		id: "time-select-view",
		
		className: "span-full",
		
		events : {
			'slidestop'			: 'update',
			'click a.epoch'	: 'epoch_update'
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
			var c = STANFORD.MAPPING_TEXTS.cached,
					y1 = c.select_aa.val(),
					y2 = c.select_bb.val();

			c.selected_year_range = {y1: y1, y2: y2};
			this.fetch_data.call({ fetch_funs: ['fetch_publications'] });
				
			//this.fetch_all(args, fetch_funs);
		},
		
		epoch_update: function(ev) {
			var cached = STANFORD.MAPPING_TEXTS.cached,
					epoch = $(ev.target).text().replace('-', ':'),
					years = epoch.split(':'),
					y1 = years[0],
					y2 = years[1],
					
					fetch_funs = ['fetch_publications', 'fetch_topics', 'fetch_wcc', 'fetch_ner'],
					els_to_load_until_complete = $('#time-select-view'),
					fetched_set = STANFORD.MAPPING_TEXTS.objects.TrackFetchedSet(fetch_funs, els_to_load_until_complete),
					
					args = {
						y1: y1,
						y2: y2,
						x_pubs: [], // not using
						fetched_set: fetched_set,
						epoch: epoch
					};
			
			cached.selected_year_range = {y1: y1, y2: y2};
			
			this.fetch_all(args, fetch_funs);
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.views.time_select_view.prototype,
		{
			fetch_all: STANFORD.MAPPING_TEXTS.traits.fetch_all,
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
});