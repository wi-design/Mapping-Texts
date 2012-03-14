(function(){
	
	STANFORD.MAPPING_TEXTS.collections.pubs = Backbone.Collection.extend({
		
		initialize: function(models, opts) {
			console.log('pubs collection initialized...');
		},
		
		url: '/pub',
		
		parse: function(json) {
			return json.pubs;
		}
		
	});
	
}());