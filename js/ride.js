'use strict'

let switcher = document.querySelector('.switcher__buttons');
switcher.addEventListener('click', changeSection);

function changeSection(event) {
	let elem = event.target;
	if (!elem.closest('li')) return;
	let activeButton = document.querySelector('.switcher__active');
	activeButton.classList.remove('switcher__active');
	activeButton.classList.add('switcher__deactive');
	let node = document.querySelector(`.switcher__element${activeButton.dataset.set}`);
	node.style.display = 'none';
	let index = elem.closest('li');
	index.classList.add('switcher__active');
	index.classList.remove('switcher__deactive');
	node = document.querySelector(`.switcher__element${index.dataset.set}`);
	node.style.display = 'block';
}