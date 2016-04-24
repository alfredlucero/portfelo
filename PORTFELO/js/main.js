var timeout = null;
$(document).ready(function() {
	/* Handle header slider events */
	$('.headerwrapper').on('mouseenter', '.minheader', showHeader);
	$('.headerwrapper').on('mouseleave', hideHeader);
	
	/* Left sidebar slider events */
	$('.sidebarwrapper').on('mouseenter', '.minsidebar', showSidebar);
	$('.sidebarwrapper').on('mouseleave', hideSidebar);
	
	/* Right creditbar slider events */
	$('.creditbarwrapper').on('mouseenter', '.mincreditbar', showCredits);
	$('.creditbarwrapper').on('mouseleave', hideCredits);

	/* Idle UI events */
	$(document).on('mousemove', function(event) {
		clearTimeout(timeout);
		showUI();

		timeout = setTimeout(function() {
			hideUI();
			event.stopPropagation();
		}, 5000);
	});

	$(document).on('keypress', function(event) {
		clearTimeout(timeout);
		showUI();

		timeout = setTimeout(function() {
			hideUI();
			event.stopPropagation();
		}, 5000);
	});
});

/* Header Slider Functions */
function showHeader() {
	var headerwrapper = $(this).closest('.headerwrapper');
	headerwrapper.find('.slideheader').slideDown('slow');
}

function hideHeader() {
	var headerwrapper = $(this).closest('.headerwrapper');
	headerwrapper.find('.slideheader').slideUp('slow');
}

/* Left Sidebar Slider Functions */
function showSidebar() {
	var sidebarwrapper = $(this).closest('.sidebarwrapper');
	sidebarwrapper.find('.slidesidebar').slideDown('slow');
}

function hideSidebar() {
	var sidebarwrapper = $(this).closest('.sidebarwrapper');
	sidebarwrapper.find('.slidesidebar').slideUp('slow');
}

/* Right Creditbar Slider Functions */
function showCredits() {
	var creditbarwrapper = $(this).closest('.creditbarwrapper');
	creditbarwrapper.find('.slidecreditbar').slideDown('slow');
}

function hideCredits() {
	var creditbarwrapper = $(this).closest('.creditbarwrapper');
	creditbarwrapper.find('.slidecreditbar').slideUp('slow');
}

/* Toggle UI Functions */
function hideUI() {
	$('.headerwrapper').hide('fast');
	$('.sidebarwrapper').hide('fast');
	$('.descriptionwrapper').hide('fast');
	$('.creditbarwrapper').hide('fast');
	$('.arrownavwrapper').hide('fast');
}

function showUI() {
	$('.headerwrapper').show('fast');
	$('.sidebarwrapper').show('fast');
	$('.descriptionwrapper').show('fast');
	$('.creditbarwrapper').show('fast');
	$('.arrownavwrapper').show('fast');
}