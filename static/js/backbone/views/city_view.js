$(function(){
	
	STANFORD.MAPPING_TEXTS.views.city_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: 'open',
		
		initialize: function() {},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.city_view, 
					h = STANFORD.MAPPING_TEXTS.helpers,
					data = {
						city: this.model.get('city'),
						pubs: this.model.get('pubs').toJSON()
					},
					html = Mustache.to_html(template, data),
					city_norm = h.normalize( this.model.get('city') );

			$(this.el)
			.html(html)
			.attr('id', city_norm)
			.attr('data-details' , 'details');
			
			return this;
		}
		
	});
	
});