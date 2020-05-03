var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function () {
	function tgl(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.text-wrapper_links').eq(i).toggleClass('text-wrapper_links_active');
				$('.text-wrapper_descr').eq(i).toggleClass('text-wrapper_descr_active');
			});
		});
	}

	tgl('.more');
	tgl('.more-back');

});