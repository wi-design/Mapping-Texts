$(function(){
	
	STANFORD.MAPPING_TEXTS.views.wcc_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "wcc-view",
		
		className: "span-third widget module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('wcc_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.wcc_view,
					data = { wcc: STANFORD.MAPPING_TEXTS.cached.wcc_collection.toJSON() },
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});