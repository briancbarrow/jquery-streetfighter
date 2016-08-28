// var hadoukenAudio = new Audio('./sound/hadouken.mp3');

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
	.mousedown( function() {
		// hadoukenAudio.play();
		playHadouken();
		$('.ryu-standing').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate({
				"right": "0px",			
			}, 500, function() {
				$('.hadouken').hide();
				$('.hadouken').css('right', '625px');
			});	
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

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}