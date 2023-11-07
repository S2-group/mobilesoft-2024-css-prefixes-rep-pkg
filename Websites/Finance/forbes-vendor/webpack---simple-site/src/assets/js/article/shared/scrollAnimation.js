/**
* Adds animation to the in-body images of the current article when the top 0.25 of the image is in/out off the view
* @param {Object} article Article in need of updating
* @param {Boolean} isMobile True if the client is using mobile, false otherwise
*/
export default (imagesInBody = [], isMobile = false) => {
	imagesInBody.forEach((image) => {
		const imageOffset = (['bleedleft', 'bleedright'].includes(image.classList) && !isMobile ? 0 : 150);

		// If the image is in the center or has full-bleed it will be 150px under its position due to the starting position of the animation
		if (!image.classList.contains('animate') && (image.getBoundingClientRect().top - imageOffset) / window.innerHeight <= 0.7) {
			image.classList.add('animate');
		} else if (image.classList.contains('animate') && (image.getBoundingClientRect().bottom / window.innerHeight) >= 0.75 && (image.getBoundingClientRect().top / window.innerHeight) > 0.85) {
			image.classList.remove('animate');
		}
	});
};
