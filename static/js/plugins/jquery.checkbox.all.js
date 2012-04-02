(function( $ ) {
	$.fn.setupCheckboxAll = function( options ) {
		
		var settings = $.extend(
				{	
					closestWrapper: this.closest('ul')
				},
				options
			),
			all_checked = true,
			cb_all = this;

		/*
		cb_all.click(function(e) {
			if ($(this).is(':checked')) {
				settings.closestWrapper.find(':checkbox').not(cb_all).each(function(){
					$(this).attr('checked', 'checked');
					//$(this).change();
				});
			} else {
				settings.closestWrapper.find(':checkbox').not(cb_all).each(function(){
					$(this).removeAttr('checked');;
					//$(this).change();
				});	
			}
		});
		*/
		
		settings.closestWrapper.click(function(e){
			$(this).find(':checkbox').not(cb_all)
			.each(function(e){
				if (!$(this).is(':checked')) {
					all_checked = false;
				}
			});
			if (all_checked) {
				cb_all.attr('checked', 'checked');
			} else {
				cb_all.removeAttr('checked');
				all_checked = true;
			}
		})
		.trigger('click');
		
		return this;
	};
})( jQuery );