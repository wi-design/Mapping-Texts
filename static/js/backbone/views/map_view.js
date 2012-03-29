$(function(){
	
	STANFORD.MAPPING_TEXTS.views.map_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "map-view",
		
		className: "span-50pct widget basic map-view",
		
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
	
});