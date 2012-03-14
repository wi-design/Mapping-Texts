(function(){
	
	STANFORD.MAPPING_TEXTS.collections.wcc = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.wcc,
		
		initialize: function(models, opts) {
			console.log('wcc collection initialized...');
		},
		
		url: '/wcc',
		
		parse: function(json) {
			return json.wcc;
		}
		
	});
	
}());