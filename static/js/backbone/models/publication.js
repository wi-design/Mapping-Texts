(function(){
	
	STANFORD.MAPPING_TEXTS.models.publication = Backbone.Model.extend({
		
		// attrs are {"pubseq": "46", "pub": "texas sentinel"}
		
		defaults: {
			"checked" : true
		},
		
		initialize: function() {
			console.log('publication model initialized');
			
			this.on("change:checked", this.info);
			this.on("change:checked", function(model, display, options) {
				
				var context = { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] };
				
				if (options.mode === 'BULK_SELECT_OPT') {
					if (options.fetch) this.fetch_data.call( context );
				}
				
				if (options.mode === 'USER_CLICKED_OPT') { // options.fetch should always be true
					if (options.fetch) this.fetch_data.call( context );
				}
				
				console.log('FETCH publication', model.get('pub'), 'Mode:', options.mode, 'Fetch:', options.fetch);
				
			});
			//this.on("change:checked", this.fetch_data, { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] });
		},
		
		info: function(model, checked) {
			console.log('pubname: ' + model.get('pub'));
			console.log('old checked value: ' + model.previous('checked'));
			console.log('new checked value: ' + checked);
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.models.publication.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
}());