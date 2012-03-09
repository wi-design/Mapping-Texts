
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


