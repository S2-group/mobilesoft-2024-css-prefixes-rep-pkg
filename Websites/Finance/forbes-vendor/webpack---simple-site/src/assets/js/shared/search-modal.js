import { isIOS } from './is-mobile';
import { handleEnterClick } from './keyboardUtils';

document.addEventListener('DOMContentLoaded', () => {
	const html = document.querySelector('html');
	const body = document.querySelector('body');
	const searchModal = document.querySelector('.search-modal');
	const searchInput = document.querySelector('.search-modal__input');
	const closeIcon = searchModal.querySelector('.search-modal__icon--close-circle');
	const searchIcon = document.querySelector('.header .icon--search');
	const submitIcon = document.querySelector('.search-modal__submit');

	// On initial load, set the value to '' for weird Chrome back button issues:
	// https://jira.forbes.com/browse/HDRFTR-66
	if (searchInput) {
		searchInput.value = '';
	}

	function handleClickSearchIcon(e) {
		if (!body.classList.contains('body--search-modal-open')) {
			body.classList.add('body--search-modal-open');

			if (isIOS) {
				html.classList.add('touch-screen-input-fixed-modal');
				body.classList.add('touch-screen-input-fixed-modal');
			}
		}
		e.preventDefault();
	}

	const removeSearchModal = () => (body.classList.remove('body--search-modal-open'));

	if (searchIcon) {
		searchIcon.addEventListener('click', (e) => {
			handleClickSearchIcon(e);
			searchInput.focus();
		});

		handleEnterClick(searchIcon, handleClickSearchIcon);
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', () => {
			removeSearchModal();

			if (isIOS) {
				html.classList.remove('touch-screen-input-fixed-modal');
				body.classList.remove('touch-screen-input-fixed-modal');
			}
		});

		handleEnterClick(closeIcon, removeSearchModal);
	}

	function handleClickSubmitIcon(e) {
		removeSearchModal();
		e.preventDefault();
		window.location.href = `/search/?q=${searchInput.value}`;
	}

	if (submitIcon) {
		submitIcon.addEventListener('click', (e) => {
			handleClickSubmitIcon(e);
		});

		handleEnterClick(submitIcon, handleClickSubmitIcon);
	}
});
