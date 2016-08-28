var down = false;

$(document).ready( function() {
	playTheme();
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
	});
	// Ryu cool position on 'x' button
	$(window).keydown(function(event) {
		if(down === false) {
			down = true;
			if(event.which === 88) {
				stopTheme();
				playCool();
				console.log(event.which);
				$('.ryu-standing').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.hadouken').hide();
				$('.ryu-cool').show();
			}
		}
	})
		.keyup(function() {
			down = false;
			stopCool();
			$('.ryu-standing').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-cool').hide();
		});

});

function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
}

function playCool () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].load();
	$('#cool-sound')[0].play();
	
}

function stopCool() {
	$('#cool-sound')[0].pause();
  	$('#cool-sound')[0].load();
}

function playTheme() {
	$('#theme-sound')[0].volume = 0.5;
	$('#theme-sound')[0].load();
	$('#theme-sound')[0].play();
}

function stopTheme() {
	$('#theme-sound')[0].pause();
	$('#theme-sound')[0].load();
}