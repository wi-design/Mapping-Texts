(function(){
	
	STANFORD.MAPPING_TEXTS.collections.pubseqs = Backbone.Collection.extend({
		
		initialize: function(models, opts) {
			console.log('pubseq collection initialized...');
		},
		
		url: '/pubseq',
		
		parse: function(json) {
			return json.pubseqs;
		}
		
	});
	
}());