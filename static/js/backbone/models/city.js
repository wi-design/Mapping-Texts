(function(){
	
	STANFORD.MAPPING_TEXTS.models.city = Backbone.Model.extend({
		
		// attrs are { city:'name', pubs: [{...}, ...], display: 1|0 }
		
		defaults: {
			"display" : false
		},
		
		initialize: function() {
			
			console.log("city initialized");
			
			// Make pubs a collection (publications)
			this.set({
				pubs: new STANFORD.MAPPING_TEXTS.collections.publications( this.get('pubs') ) 
			});
			
			this.on("change:display", this.add_remove_city_to_pub_view);
			this.on("change:display", this.fetch_data_if);
		},
		
		
		// city model custom methods
		all_pubs_selected: function() {
			var query = function(publication) { return publication.get('checked'); }
			return this.get('pubs').all(query);
		},
		
		get_if_one_pub_selected: function() {
			var query = function(publication) { return publication.get('checked'); },
					pubs_checked = this.get('pubs').filter( query ),
					pub_selected;
			
			if (pubs_checked.length === 1) {
				pub_selected = pubs_checked[0];
				return pub_selected;
			} else {
				return false;
			}
		},
		
		
		
		
		
		// Event handlers for listening to changes to display attr
		add_remove_city_to_pub_view: function(model, display, options) {
			
			console.log("called add_rm_city...()");
			
			if (model.previous("display") === false && display === true) {
				console.log('add city to pub-view: ' + model.get('city'));
				model.add_new_city();
			}
			
			if (model.previous("display") === true && display === false) {
				console.log('remove city from pub-view: ' + model.get('city'));
				model.remove_city();
			}
			
		},
		
		fetch_data_if: function(model, display, options) {
			var context;
			console.log("Fetch Data IF: " + options.fetch_data + " For city: " + model.get('city'));
			
			if ( options.fetch_data || typeof options.fetch_data === 'undefined' ) {
				context = { fetch_funs: ['fetch_wcc', 'fetch_ner', 'fetch_topics'] };
				this.fetch_data.call( context );
			} 
		},
		
		
		
		
		
		// helpers
		add_new_city: function(model) {
			var views = STANFORD.MAPPING_TEXTS.views,
					city_view = new views.city_view({model: this});
			
			$('#pub-view')
			.find('.spiffy-scrollbar')
			
			.children('span')
			.addClass('hidden')
			.end()
			
			.append( city_view.render().el )
			.find('[data-checkbox="check-all"]')
			.each( function(i) { 
				// need to add id separate id attr. for each check-all input
				$(this)
				.attr('id' , 'check-all-' + ( i + 1 ))
				// add and find sibling label
				.add()
				.next('label')
				// need to add same id from sibling check all input to for attr. for silbing label
				// this will enable clicking on label or checkbox to deselect or check all pubs
				.attr('for', 'check-all-' + ( i + 1 ));
				// invoke check all plugin
				$(this).setupCheckboxAll( {
					closestWrapper: $(this)
													.closest('[data-pub="label"]')
													.next('[data-pub="listings"]')
					} )
			});			
		},
		
		remove_city: function() {
			var h = STANFORD.MAPPING_TEXTS.helpers,
					city_norm = h.normalize( this.get('city') ),
					spiffy_children = $('#pub-view').find('.spiffy-scrollbar').children(),
					new_spiffy;
			
			spiffy_children
			.filter('#' + city_norm)
			.remove();
			
			new_spiffy = $('#pub-view').find('.spiffy-scrollbar').children();
			
			if (new_spiffy.size() === 1) {
				new_spiffy
				.eq(0)
				.removeClass('hidden');
			}
		}
		
	});
	
	// Mix in traits
	_.extend(
		STANFORD.MAPPING_TEXTS.models.city.prototype,
		{
			fetch_data: STANFORD.MAPPING_TEXTS.traits.fetch_data
		}
	);
	
}());