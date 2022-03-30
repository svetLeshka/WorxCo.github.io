'use strict'

let form = document.querySelector('.footer__form'),
	input = document.querySelector('.footer__form input');

form.addEventListener('click', focusInput);
input.addEventListener('blur', {
	handleEvent() {
		form.classList.add('unfocused');
		form.classList.remove('focused');
		input.value = (input.value == '') ? 'Enter email' : input.value;
	}
});

function focusInput(event) {
	if (event.target.tagName == 'BUTTON') return;
	form.classList.add('focused');
	form.classList.remove('unfocused');
	input.value = (input.value == 'Enter email') ? '' : input.value;
	input.focus();
}