(function(){
	
	STANFORD.MAPPING_TEXTS.models.epoch = Backbone.Model.extend({
		
		// attrs are { "era": "World War II", "years": "1941-1945", "selected": true }
		
		defaults: {
			"selected" : false
		},
		
		initialize: function() {
			console.log('epoch model initialized');
			
			this.on("change:selected", this.update_epoch_el);
		},
		
		update_epoch_el: function(model, selected) {
			if (selected) {
				
				$('#time-select-view .era-nav')
					.find('a[data-epoch="' + model.get('years') + '"]')
					.addClass('active');

			} else {
				
				$('#time-select-view .era-nav')
					.find('a[data-epoch="' + model.get('years') + '"]')
					.removeClass('active');
			
			}
		}
		
	});
	
}());