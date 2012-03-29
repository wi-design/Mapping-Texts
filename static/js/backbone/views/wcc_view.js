$(function(){
	
	STANFORD.MAPPING_TEXTS.views.wcc_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events : {
			//'click a[data-modal-box]' : 'callModal'
		},
		
		initialize: function(attr) {
			console.log('wcc_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.wcc_view,
					data = { wcc: STANFORD.MAPPING_TEXTS.cached.wcc_collection.toJSON() },
					html = Mustache.to_html(template, data);
		
			$(this.el).html(html);
			return this;
		},
		
		callModal: function(ev) {
			$(ev.target).modal();
		}
		
	});
	
});