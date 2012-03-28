$(function(){
	
	STANFORD.MAPPING_TEXTS.views.pub_view = Backbone.View.extend({
		
		tagName: "div",
		
		className: "widget basic tool",
		
		events : {
			'change .pub-cb' : 'update',
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
		
		update: function(ev) {
			var c = STANFORD.MAPPING_TEXTS.cached,
					cb = $(ev.target),
					checked = cb.is(':checked'),
					pubseq = cb.attr('id').split('-')[1];

			c.pubs.set_pubseq(pubseq, checked);
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
		}
	});

	
});