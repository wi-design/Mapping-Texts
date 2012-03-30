$(function(){
	
	STANFORD.MAPPING_TEXTS.views.topic_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic module",
		
		events: {
			'click #topic-view [data-click]' : 'showTopicKeys',
			'click .topic-key-list [data-dismiss]' : 'hideTopicKeys'
		},
		
		initialize: function(attr) {
			console.log('topic_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.topic_view,
					model = STANFORD.MAPPING_TEXTS.cached.topics,
					epoch = c.epochs.get_selected(),
					data = { 
						epoch: epoch ? epoch.get('years') : 'no era selected',
						topics: this.collection.toJSON()
					},
					html = Mustache.to_html(t, data);

			$(this.el).html(html);
			return this;
		},
		
		showTopicKeys: function(ev) {	
			$(ev.target)
			.attr('data-click' , 'true')
			
			// find the other rows and if one is showing data-click=true - make it false
			.closest('li')
			.siblings('li')
			.find('[data-click]')
			.attr('data-click' , '')
		},
		
		hideTopicKeys: function(ev) {
			$(ev.target)
			.closest('div')
			.attr('data-click' , 'false')
		}
		
	});
	
});