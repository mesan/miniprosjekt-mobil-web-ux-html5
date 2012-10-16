/*
 * 
 * 
 */
(function () {
	
	$('#container').on('swipeUp', function(e) {
		var hash = window.location.hash;
				
		if (hash.match(new RegExp('#/timereg/[0-9]+$'))) {
			$('#handlingsPanel').show();
		} else if (hash.match(new RegExp('#/timereg'))) {
			$('#utvalgsPanel').show();
		}
	});
	
	$('#container').on('swipeDown', function(e) {
		var hash = window.location.hash;
				
		if (hash.match(new RegExp('#/timereg/[0-9]+$'))) {
			$('#handlingsPanel').hide();
		} else if (hash.match(new RegExp('#/timereg$'))) {
			$('#utvalgsPanel').hide();
		}
	})
	
	$('#tilbakeKnapp').on('tap', function(e) {
		window.history.back();
		
		e.preventDefault();
	});
})();

