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
		
		parse_pubs: function() {
			pubs = [];
			
			this.forEach(
				function(city) {
					
					if (city.get('display')) {
						
						city.get('pubs').forEach(
							function(publication) {
								var c, p;
								
								if (publication.get('checked')) {
									c = city.get('city').replace(/ /g, '_');
									p = publication.get('pub').replace(/ /g, '_');
									pubs.push(c + ':' + p);
								}	
							}
						);
					
					}
				
				}
			);

			return pubs;
		},
		
		
		// topic models
		get_city_if_one_selected: function() {
			var query = function(city) { return city.get('display'); },
					displayed_cities = this.filter( query );
			
			if (displayed_cities.length === 1) {
				console.log('Cities selected: ' + displayed_cities[0].get('city'));
			}
		},
		
		get_pub_if_one_selected: function() {
			
		}
		
	});
	
}());