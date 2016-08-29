var down = false;
var click = false;

$(document).ready( function() {
	playTheme();
	$('.ryu-standing').show();
	sflogoFade();

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
		if(down === false) {
			click = true;
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
		}
	})
	.mouseup( function() {
		if(down === false) {
			click = false;
			$('.ryu-standing').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
		}
	});
	// Ryu cool position on 'x' button
	$(window).keydown(function(event) {
		if(down === false && click === false) {			
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

function sflogoFade() {
	$('.sf-logo').fadeIn(2000, function() {
		$('.sf-logo').fadeOut(1000, function() {
			broughtToYou();
		});
	})			
};

function jqueryFade() {
	$('.jquery-logo').fadeIn(1000, function() {
		$('.jquery-logo').fadeOut(1000, function() {
			instructionFade();
		});
	})
};

function broughtToYou() {
	$('.brought-to-you').fadeIn(1000, function() {
		$('.brought-to-you').fadeOut(1000, function() {
			jqueryFade();
		});
	})
};

function instructionFade() {
	$('.click-instructions').fadeIn(1000);
	$('.x-instructions').fadeIn(1000);
};