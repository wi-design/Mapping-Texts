$(function(){
	
	STANFORD.MAPPING_TEXTS.views.city_view = Backbone.View.extend({
		
		tagName: "div",
		
		initialize: function() {},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.city_view, 
					data = {
						city: this.model.get('city'),
						pubs: this.model.get('pubs').toJSON()
					},
					html = Mustache.to_html(template, data),
					city_norm = this.model.get('city').replace(/ /g, '_');

			$(this.el)
			.html(html)
			.attr('id', city_norm);
			
			return this;
		}
		
	});
	
});