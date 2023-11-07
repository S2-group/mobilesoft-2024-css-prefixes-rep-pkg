/**
* Accounts for the shifting effect that is caused by the hidden scrollbar when a modal is open
*/
function handlePageShiftOnModalOpen() {
	const style = document.createElement('style');
	const loginButton = document.querySelector('.login');
	const header = document.querySelector('header');
	document.getElementsByTagName('head')[0].appendChild(style);
	const body = document.querySelector('body');
	const scrollbarWidth = window.innerWidth - body.clientWidth;
	style.innerHTML = `.zephr-modal-open { padding-right: ${scrollbarWidth}px; } .zephr-modal-open .universal-header {padding-right: ${scrollbarWidth}px;} `;

	loginButton.addEventListener('click', () => {
		if (body.classList.contains('noScroll')) {
			header.style.paddingRight = '0';
		} else {
			header.style.removeProperty('padding-right');
		}
	});
}

document.addEventListener('DOMContentLoaded', handlePageShiftOnModalOpen);
