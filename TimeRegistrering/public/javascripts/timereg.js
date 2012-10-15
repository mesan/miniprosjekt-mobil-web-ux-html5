/*
 * 
 * 
 */
(function () {
		
	$('#innhold').on('swipeUp', function() {
		$('#handlingsPanel').show();
	});
	
	$('#innhold').on('swipeDown', function() {
		$('#handlingsPanel').hide();
	});
	
	// Sletter et arbeid.
	$('#slettArbeidKnapp').on('longTap', function() {
		window.location.href="http://www.db.no";
	});	
	
	$('#redigerArbeidKnapp').on('tap', function() {
		window.location.href="http://finn.no";
	});
	
	// Går til neste registrerte arbeid.	
	$('#innhold').on('swipeLeft', function() {
		window.location.href="http://www.vg.no";
	});
})();

