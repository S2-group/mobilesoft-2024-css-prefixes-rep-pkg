/**
 * Event handler for "Read More" and "Read Less" buttons. Will add and remove classes
 * to display or hide the correct description (full desciption or initial(truncated) description)
 * @param {event} event event object when button is clicked
 * @param {boolean} readMore true if "Read More" button is the clicked button
 */
function toggleReadMore(event, readMore) {
	const parent = event.target.closest('.contrib-bio, .contributor-about__description');
	const readMoreButton = parent.querySelector('.contributor-about__read-more');
	const readLessButton = parent.querySelector('.contributor-about__read-less');
	const initialDescription = parent.querySelector('.contributor-about__initial-description');
	const fullDescription = parent.querySelector('.contributor-about__full-description');

	if (readMore) {
		readMoreButton?.classList.add('contributor-about__description-hidden');
		readLessButton?.classList.remove('contributor-about__description-hidden');
		initialDescription?.classList.add('contributor-about__description-hidden');
		fullDescription?.classList.remove('contributor-about__description-hidden');
	} else {
		readLessButton?.classList.add('contributor-about__description-hidden');
		readMoreButton?.classList.remove('contributor-about__description-hidden');
		fullDescription?.classList.add('contributor-about__description-hidden');
		initialDescription?.classList.remove('contributor-about__description-hidden');
	}
}

/**
 * Collects contributor bios and adds event if bio has readMore/readLess buttons.
 */
function setReadMoreBios() {
	const contributorBios = [...document.querySelectorAll('.contrib-bio, .contributor-about__description')];

	contributorBios.forEach((contributor) => {
		if (contributor.querySelector('.contributor-about__read-more') && contributor.querySelector('.contributor-about__read-less')) {
			contributor.querySelector('.contributor-about__read-more').addEventListener('click', (e) => { toggleReadMore(e, true); });
			contributor.querySelector('.contributor-about__read-less').addEventListener('click', (e) => { toggleReadMore(e, false); });
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setReadMoreBios();
});

export { setReadMoreBios as default };
