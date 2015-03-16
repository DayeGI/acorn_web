/**
 * Created by shawnl on 15/03/15.
 */
$( document ).ready(function() {

	$(".coverflow-btn").click(function() {
		var offset = 1; //Offset of 1px to account for top nav bar appearing

		$('html, body').animate({
			scrollTop: $(".background-wrapper").offset().top + offset
		}, 500);
	});

	// get the value of the bottom of the video element by adding the offset of that element plus its height, set it as a variable
	// minus 50px due to navbar height + 1px to trigger the activation
	var mainbottom = $('.scroll-marker').offset().top + $('.scroll-marker').height();

	var stop = Math.round($(window).scrollTop());

	//check navbar status on initialization
	if (stop >= mainbottom) {
		$('.navbar').addClass('past-navbar');
		$('.navbar-default .navbar-nav > li > a').css('color', '#5F5F5F');
	} else {
		$('.navbar').removeClass('past-navbar');
		$('.navbar-default .navbar-nav > li > a').css('color', '#FFFFFF');
	}

	// on scroll, activate class to turn navbar visible
	$(window).on('scroll',function(){

		stop = Math.round($(window).scrollTop());
		if (stop >= mainbottom) {
			$('.navbar').addClass('past-navbar');
			$('.navbar-default .navbar-nav > li > a').css('color', '#5F5F5F');
		} else {
			$('.navbar').removeClass('past-navbar');
			$('.navbar-default .navbar-nav > li > a').css('color', '#FFFFFF');
		}

	});

});
