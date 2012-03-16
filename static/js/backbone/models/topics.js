(function(){
	
	STANFORD.MAPPING_TEXTS.models.topics = Backbone.Model.extend({
		
		// attrs are { topcis: x }
		
		initialize: function() {
			console.log('topics model initialized');
		},
		
		url: '/topic'
		
	});
	
}());