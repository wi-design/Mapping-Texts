(function(){
	
	STANFORD.MAPPING_TEXTS.collections.publications = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.publication,
		
		initialize: function(models, opts) {
			console.log('publication collection initialized...');
		}
		
	});
	
}());