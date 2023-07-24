const swiperN = new Swiper('.swiper-news', {
	// Optional parameters
	// direction: 'vertical',
	// direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-news',
		clickable: true,
		// dynamicBullets: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
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
// let sliderBlock = document.querySelector('.swiper-wrapper');

// sliderBlock.addEventListener('mouseenter', (e) => {
// 	console.log('Yes');
// 	swiperN.params.autoplay.disableOnInteraction = false;
// 	swiperN.params.autoplay.delay = 1000;
// 	swiperN.autoplay.start();
// });

// sliderBlock.addEventListener('mouseleave', (e) => {
// 	swiperN.autoplay.stop();
// });

// ------------------------------------------------------
