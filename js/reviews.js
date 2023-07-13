const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	// direction: 'horizontal',
	loop: true,

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
