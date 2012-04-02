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
		
		comparator: function(city) {
			return city.get('city');
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
			var h = STANFORD.MAPPING_TEXTS.helpers,
					pubs = [];
			
			this.forEach(
				function(city) {
					
					if (city.get('display')) {
						
						city.get('pubs').forEach(
							function(publication) {
								var c, p;
								
								if (publication.get('checked')) {
									c = h.normalize( city.get('city') );
									p = h.normalize( publication.get('pub') );
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
		get_if_all_cities_pubs_selected: function() {
			var query = function(city) { return city.get('display') && city.all_pubs_selected(); }
			return this.all( query );
		},
		
		get_if_city_and_all_its_pubs_selected: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					query = function(city) { return city.get('display'); },
					displayed_cities = this.filter( query ),
					city_selected;
			
			if (displayed_cities.length === 1) {
				city_selected = displayed_cities[0];
				
				if (city_selected.all_pubs_selected() === true) {
					return h.normalize( city_selected.get('city') );
				} else {
					return false;
				}
					
			} else {
				return false;
			}
		},
		
		get_if_city_and_one_pub_selected: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					query = function(city) { return city.get('display'); },
					displayed_cities = this.filter( query ),
					city_selected;
			
			if (displayed_cities.length === 1) {
				city_selected = displayed_cities[0];
				
				pub_selected = city_selected.get_if_one_pub_selected();
				if (pub_selected !== false) {
					return h.normalize( city_selected.get('city') ) + ':' + h.normalize( pub_selected.get('pub') );
				} else {
					return false;
				}
					
			} else {
				return false;
			}
		}
		
	});
	
}());