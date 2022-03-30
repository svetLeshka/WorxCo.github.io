'use strict'

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 800,
	autoplay: {
		delay: 4000,
	},
	setWrapperSize: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});