var hadoukenAudio = new Audio('./sound/hadouken.mp3');

$(document).ready( function() {
	$('.ryu-standing').show();
	$('.click-instructions').fadeIn(1000);
	$('.x-instructions').fadeIn(1000);

	// Ryu ready on hover
	$('.img-container').mouseenter( function() {
		$('.ryu-standing').hide();
		$('.ryu-ready').show();
	})
	.mouseleave( function() {
		$('.ryu-standing').show();
		$('.ryu-ready').hide();
	})

	// Ryu throwing hadouken on click
	$('.img-container').mousedown( function() {
		hadoukenAudio.play();
		$('.ryu-standing').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();	
	})
	.mouseup( function() {
		$('.ryu-standing').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
	})

	


		// Hadouken moving across screen on click

	// Ryu ready on click release

	// Ryu cool position on 'x' button

});