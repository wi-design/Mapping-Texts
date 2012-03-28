(function(){
	
	STANFORD.MAPPING_TEXTS.collections.epochs = Backbone.Collection.extend({
		
		model: STANFORD.MAPPING_TEXTS.models.epoch,
		
		initialize: function(models, opts) {
			console.log('epoch collection initialized...');
		},

		epoch_is_not_selected: function() {
			var result = this.get_selected();
			return typeof result === 'undefined';
		},
				
		epoch_norm: function() {
			var result = this.get_selected();
			if (typeof result !== 'undefined') {
				return result.get('years').replace('-', ':');
			}
			throw "Epoch should be selected at this point.";
		},
		
		get_selected: function() {
			var query = function(e) { return e.get('selected'); },
					result = this.find( query );
			return result;
		},
		
		unselect: function() {
			var prev_selected = this.get_selected();
			if (typeof prev_selected !== 'undefined') {
				prev_selected.set( {selected: false} );
			}
		},
				
		set_selected: function(args) {
			var query,
					result;
			
			if (args.epoch) {
			
				query = function(e) { return e.get('years') === args.epoch; };
				result = this.find( query );
			
			} else if (args.y) {
			
				query = function(e) { return args.y > e.get('begin') && args.y <= e.get('end'); };
				result = this.find( query );
				
			}
			
			this.unselect();
			
			if (typeof result !== 'undefined') {
				result.set( {selected: true} );
			}
		}
		
	});
	
}());