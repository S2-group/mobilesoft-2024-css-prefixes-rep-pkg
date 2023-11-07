/**
 * Handles adding Enter keyboard event listeners to elements
 * @param {HTMLElement} element the element to add the event listener to
 * @param {Function} callBack the function to call after the event happens
 */
function handleEnterClick(element, callBack) {
	if (!element) {
		return;
	}

	element.addEventListener('keyup', (e) => {
		if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
			callBack(e);
		}
	});
}

module.exports = {
	handleEnterClick,
};
