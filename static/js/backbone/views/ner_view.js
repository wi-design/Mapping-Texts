$(function(){
	
	STANFORD.MAPPING_TEXTS.views.ner_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events : {},
		
		initialize: function(attr) {
			console.log('ner_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.ner_view,
					data = { 
						ner: this.collection.toJSON(),
						tags: this.options.tags 
					},
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		}
		
	});
	
});