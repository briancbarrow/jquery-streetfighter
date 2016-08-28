// Ryu Standing Still
$(document).ready( function() {
	$('.click-instructions').fadeIn(1000);
	$('.x-instructions').fadeIn(1000);

	// Ryu ready on hover
	$('.img-container').hover( function() {
		$('.ryu-standing').hide();
		$('.ryu-ready').show();
	}, function() {	
		$('.ryu-ready').hide();
		$('.ryu-standing').show();
		$('.ryu-throwing').hide();	
	});

	// Ryu throwing hadouken on click
	$('.img-container').click( function() {
		$('.ryu-standing').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();		
	});

	// $('.img-container').off("click" function() {
	// 	$('.ryu-throwing').hide();
	// })


		// Hadouken moving across screen on click

	// Ryu ready on click release

	// Ryu cool position on 'x' button

});