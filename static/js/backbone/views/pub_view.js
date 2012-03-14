$(function(){
	
	STANFORD.MAPPING_TEXTS.views.pub_view = Backbone.View.extend({
		
		tagName: "section",
		
		id: "pub-view",
		
		className: "span-3 widget tool",
		
		events : {
			'change input[type="checkbox"]' : 'update'
		},
		
		initialize: function(attr) {
			console.log('pub_view view created');
		},
		
		render: function() {
			var template = STANFORD.MAPPING_TEXTS.config.templates.pub_view,
					data = { publocs: STANFORD.MAPPING_TEXTS.cached.pubs.toJSON() }, // {"pubs":[{"pubseq": "1", pub: "the optimist"}, ...],"city":"abilene"}
					html = Mustache.to_html(template, data);

			$(this.el).html(html);
			return this;
		},
		
		update: function(ev) {
			var y1 = STANFORD.MAPPING_TEXTS.cached.select_aa.val(),
					y2 = STANFORD.MAPPING_TEXTS.cached.select_bb.val(),
					x_pubs = [];
			
			STANFORD.MAPPING_TEXTS.cached.pub_cbs.each(function(){
				var cb = $(this),
						pub,
						city;
						
				if ( !cb.is(':checked') && cb.attr('disabled') === undefined ) {
					pub = cb.next('label').text().replace(/ /g, '_');
					city = cb.closest('ul').prev('h5').text().replace(/ /g, '_');
					
					x_pubs.push(city+':'+pub);
				}
				
			});
			
			console.log("x_pubs:");
			console.log(x_pubs);
		}
		
	});
	
});