(function(){
	
	STANFORD.MAPPING_TEXTS.collections.ner = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.ner,
		
		initialize: function(models, opts) {
			console.log('ner collection initialized...');
		},
		
		url: '/ner',
		
		parse: function(json) {
			return json.ner;
		}
		
	});
	
}());