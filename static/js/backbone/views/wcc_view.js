$(function(){
	
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
	
});