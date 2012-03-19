(function(){
	
	STANFORD.MAPPING_TEXTS.collections.pubs = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.city,
		
		initialize: function(models, opts) {
			console.log('pubs collection initialized...');
		},
		
		url: '/pub',
		
		parse: function(json) {
			return json.pubs;
		},
		
		
		set_pubseq: function(pubseq, checked) {
			
			this.forEach(
				function(city) {
					
					var publication = city.get('pubs').find( 
						function(publication) { return publication.get('pubseq') === pubseq; }
					);
					
					if (publication) {
						publication.set({checked: checked});
					} else {
						console.log('Not found for city ' + city.get('city'));
					}
					
				}
			);
		},
		
		parse_xpubs : function() {
			var x_pubs = [];
			
			this.forEach(
				function(city) {
					
					city.get('pubs').forEach(
						function(publication) {
							var c, p, add = false;
							
							if ( !city.get('display') ) { add = true; } 
							else if ( !publication.get('checked') ) { add = true; }
							
							if (add) {
								c = city.get('city').replace(/ /g, '_');
								p = publication.get('pub').replace(/ /g, '_');
								x_pubs.push(c + ':' + p);
							}
						}
					);
					
				}
			);
			
			return x_pubs;
		}
		
	});
	
}());