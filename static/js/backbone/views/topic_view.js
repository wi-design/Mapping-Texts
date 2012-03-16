$(function(){
	
	STANFORD.MAPPING_TEXTS.views.topic_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('topic_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.topic_view,
					model = STANFORD.MAPPING_TEXTS.cached.topics,
					data = { topics: model.has('topics') ? model.get('topics').split('<br>') : [] },
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});