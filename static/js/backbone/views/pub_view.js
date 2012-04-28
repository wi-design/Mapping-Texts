$(function(){
	
	STANFORD.MAPPING_TEXTS.views.pub_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "inner",
		
		events : {
			'click label[data-checkbox="check-all"]' : 'city_label_clicked',
			'change [data-checkbox="check-all"]' : 'city_cb_change',
			
			'change [data-checkbox="pub-check"]' : 'pub_cb_change',
			
			'click [data-details="details"] [data-details="summary"]' : 'disclosureWidget'
		},
		
		initialize: function(attr) {
			console.log('pub_view view created');
		},
		
		render: function() {
			var c = STANFORD.MAPPING_TEXTS.cached,
					t = STANFORD.MAPPING_TEXTS.config.templates.pub_view,
					data = {
						y1: c.selected_year_range.y1,
						y2: c.selected_year_range.y2
					}, 
					html = Mustache.to_html(t, data);

			$(this.el).html(html);
			return this;
		},
		
		
		
		// event handlers
		city_label_clicked: function(ev) {
			// click on label triggers change on its checkbox even 
			//  though its hidden in the dom
			
			//$(ev.target).prev('input').change();
		},
		
		city_cb_change: function(ev) {
			
			var self = this,
					c = STANFORD.MAPPING_TEXTS.cached,
					initial_options = {
						mode: 'BULK_SELECT_OPT',
						fetch: false
					},
					last_option = {
						mode: 'BULK_SELECT_OPT',
						fetch: true
					},
					
					cb_all = $(ev.target),
					cb_all_checked = cb_all.is(':checked'),
					
					cb_children = cb_all.parent()
															.next('ul')
															.find('li input'),
															
					cb_children_size = cb_children.size(),
					
					onAllChecked = function(index) {
						var pubseq = self.get_pubseq($(this));
						
						$(this).attr('checked', 'checked');
						
						if ( index === (cb_children_size - 1) )
							c.pubs.set_pubseq(pubseq, true, last_option);
						else 
							c.pubs.set_pubseq(pubseq, true, initial_options);
					},
					onAllUnchecked = function(index) {
						var pubseq = self.get_pubseq($(this));
						
						$(this).removeAttr('checked');
							
						if ( index === (cb_children_size - 1) )
							c.pubs.set_pubseq(pubseq, false, last_option);
						else 
							c.pubs.set_pubseq(pubseq, false, initial_options);
					};

			console.log('city cb all change.');		
			cb_children.each( cb_all_checked ? onAllChecked : onAllUnchecked );
		},
		
		
		
		pub_cb_change: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					options = {
						mode: 'USER_CLICKED_OPT',
						fetch: true
					},
			
					cb = $(ev.target),
					checked = cb.is(':checked'),
					pubseq = this.get_pubseq(cb);

			c.pubs.set_pubseq(pubseq, checked, options);
		},
		
		
		
		disclosureWidget: function(ev) { 
			$(ev.target)
			// this is the ul with the listings for publications
			.next('[data-details="content"]')
			.animate({
				height : 'toggle'
			}, 'fast')
			// the equivalent if you used the <details>
			.closest('[data-details="details"]')
			.toggleClass('open');
		},
		
		
		get_pubseq: function(cb) {
			return cb.attr('id').split('-')[1];
		}
	});

	
});