
// set equal heights on columns in a given container 
function matchHeights( cols ) {
	var tallestCol = 0;
	
	cols.each( function() {
		var currentHeight = $(this).height();
		
		if ( currentHeight > tallestCol ) {
			tallestCol = currentHeight;
		}
	});
	
	cols.height( tallestCol );
}


// toggle row

/*$.fn.toggleRow = function(speed, fn) {

	return $(this).animate({
		'height': 'toggle',
		'opacity': 'toggle'
	}, speed || 400, function() {
		$.isFunction(fn) && fn.call(this);
	});
};

$(function() {
	
	var toggleRow = {
		
		row : $('.row').find('div'),
		
		config : {
			speed : 'fast'
		},
		
		init : function(config) {
			$.extend(this.config, config);
			
			row : $('.row').find('div'),
			
			$('<a></a>', {
				text: 'toggle'
			})
				.addClass('toggle')
				.insertAfter().filter(':last-child')
				.on( 'click', function() {
					$(this).parent('.row').find('div').animate({
						height : 'toggle'
					});
				});
		} 
		 
	}
	
toggleRow.init(); 
 
});*/


(function() {
	var toggle = $('i').data('data-toggle', 'height'),
			rowSpans = $('.row').find('> div'),
			icon = $('.row').find('i');
	
	toggle.on('click', function(e) {
			$(this).parent('.row').find('> div').animate({
				height : 'toggle'
			}, 'fast');
	
		icon.toggleClass(function() {
			if( $(this).find(rowSpans).filter(':hidden') ) {
				return 'down'
			} else {
				return 'up'
			}
		});
		
	});
	

	
})();

