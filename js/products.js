'use strict'

let slides = document.querySelectorAll('*[class*="slider__slide"]'),
	frontSlide = document.querySelector('.slider__slide-active'),
	backSlide = document.querySelector('.slider__slide-deactive'),
	indices = Array.from(document.querySelectorAll('.slider__nav div')),
	curIndex = 0;
indices.map((elem) => elem.addEventListener('click', changeSlide));
frontSlide.src = slides[0].src;
frontSlide.style.opacity = '1';
backSlide.style.opacity = '0';

let timeToChange = setTimeout(() => changeSlide(undefined, (curIndex + 1) % 3), 5000);

function changeSlide(event, order) {
	let index = (event) ? +event.target.dataset.index : order,
		currentSlide = document.querySelector('.slider__nav-active');
	if (index == +currentSlide.dataset.index) return;
	currentSlide.classList.remove('slider__nav-active');
	indices[index].classList.add('slider__nav-active');
	curIndex = index;
	let frontSlide = document.querySelector('.slider__slide-active'),
		backSlide = document.querySelector('.slider__slide-deactive');
	backSlide.src = slides[index].src;
	let frontSlideInt = setInterval(() => {
		frontSlide.style.opacity = (frontSlide.style.opacity - 0.01 < 0) ? 0 : frontSlide.style.opacity - 0.01;
		if (frontSlide.style.opacity == 0) {
			clearInterval(frontSlideInt);
			frontSlide.classList.remove('slider__slide-active');
			frontSlide.classList.add('slider__slide-deactive');
		}
	}, 10),
		backSlideInt = setInterval(() => {
			backSlide.style.opacity = (+backSlide.style.opacity + 0.01 > 1) ? 1 : +backSlide.style.opacity + 0.01;
			if (backSlide.style.opacity == 1) {
				clearInterval(backSlideInt);
				backSlide.classList.add('slider__slide-active');
				backSlide.classList.remove('slider__slide-deactive');
			}
		}, 10);
	clearTimeout(timeToChange);
	timeToChange = setTimeout(() => changeSlide(undefined, (curIndex + 1) % 3), 5000);
}