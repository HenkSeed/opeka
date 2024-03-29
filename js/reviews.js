const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	// direction: 'horizontal',
	loop: true,

	// autoplay: {
	// 	delay: 500,
	// },

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-review',
		clickable: true,
		// dynamicBullets: true,
	},

	grabCursor: true,
	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

// ==================== Автопрокрутка ===================
// let sliderReview = document.getElementById('swiper1');

// sliderReview.addEventListener('mouseenter', () => {
// 	console.log('Yes!!!');
// 	swiper.params.autoplay.disableOnInteraction = false;
// 	swiper.params.autoplay.delay = 500;
// 	swiper.autoplay.start();
// });

// sliderReview.addEventListener('mouseleave', () => {
// 	console.log('No!!!');
// 	swiper.autoplay.stop();
// });

// ------------------------------------------------------
