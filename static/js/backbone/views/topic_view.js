$(function(){
	
	STANFORD.MAPPING_TEXTS.views.topic_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "topic-view",
		
		className: "span-third widget module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('topic_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.topic_view,
					data = {},
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});