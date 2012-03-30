(function(){
	
	STANFORD.MAPPING_TEXTS.collections.topics = Backbone.Collection.extend({
		
		initialize: function() {
			console.log('topics collection initialized');
		},
		
		url: '/topic',
		
		parse: function(json) {
			return json.topics;
		}
		
	});
	
}());