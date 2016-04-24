var timeout = null;
$(document).ready(function() {
	/* Handle portfelo slider events */
	$('.portfelowrapper').on('mouseenter', '.minportfelo', showPortfelo);
	$('.portfelowrapper').on('mouseleave', hidePortfelo);
	
	/* Login slider events */
	$('.loginwrapper').on('mouseenter', '.minlogin', showLogin);
	$('.loginwrapper').on('mouseleave', hideLogin);

	/* Idle UI events */
	$(document).on('mousemove', function(event) {
		clearTimeout(timeout);
		showHome();

		timeout = setTimeout(function() {
			hideHome();
			event.stopPropagation();
		}, 5000);
	});

	$(document).on('keypress', function(event) {
		clearTimeout(timeout);
		showHome();

		timeout = setTimeout(function() {
			hideHome();
			event.stopPropagation();
		}, 5000);
	});
});

/* Portfelo Slider Functions */
function showPortfelo() {
	var portfelowrapper = $(this).closest('.portfelowrapper');
	portfelowrapper.find('.slideportfelo').slideDown('slow');
}

function hidePortfelo() {
	var portfelowrapper = $(this).closest('.portfelowrapper');
	portfelowrapper.find('.slideportfelo').slideUp('slow');
}

/* Login Slider Functions */
function showLogin() {
	var loginwrapper = $(this).closest('.loginwrapper');
	loginwrapper.find('.slidelogin').slideDown('slow');
}

function hideLogin() {
	var loginwrapper = $(this).closest('.loginwrapper');
	loginwrapper.find('.slidelogin').slideUp('slow');
}

/* Toggle Home Functions */
function hideHome() {
	$('.portfelowrapper').hide('fast');
	$('.loginwrapper').hide('fast');
}

function showHome() {
	$('.portfelowrapper').show('fast');
	$('.loginwrapper').show('fast');
}