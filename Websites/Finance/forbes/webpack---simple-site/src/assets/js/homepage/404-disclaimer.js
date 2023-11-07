import { handleEnterClick } from '../shared/keyboardUtils';

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.error-banner__search');
	const button = document.querySelector('.error-banner__close');
	const input = document.querySelector('.error-banner__search-input');

	function onButtonClick() {
		document.body.classList.remove('error-messaging');
	}

	function onInputKeyup(e) {
		e.preventDefault();
		window.location.href = `/search/?q=${input.value}`;
	}

	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			return false;
		});
	}

	if (button) {
		button.addEventListener('click', onButtonClick);
	}

	handleEnterClick(input, onInputKeyup);
});
