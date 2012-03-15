// set equal heights on columns in a given container 
function equalHeights( cols ) {
	var highestDiv = 0;
	
	cols.each( function() {
		
		var currentHeight = $(this).height();
		if ( currentHeight > highestDiv ) {
			highestDiv = currentHeight;
		}
	});
	
	cols.height( highestDiv );
}

