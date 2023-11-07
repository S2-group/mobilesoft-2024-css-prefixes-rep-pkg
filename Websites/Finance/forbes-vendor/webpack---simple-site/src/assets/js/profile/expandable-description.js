import Event from '../shared/event';

const expandableText = document.querySelector('.profile-text__expand');
let isProfileTextExpanded = false;

function toggleDescription(event) {
	if (!isProfileTextExpanded) {
		event.target.previousElementSibling?.classList.add('expanded');
		event.target.innerText = 'Read Less';
	} else {
		event.target.previousElementSibling?.classList.remove('expanded');
		event.target.innerText = '... Read More';
	}

	isProfileTextExpanded = !isProfileTextExpanded;
}

if (expandableText) {
	const expandButtons = [...document.querySelectorAll('.profile-text__expand-button')];

	expandButtons.forEach((expandButton) => {
		Event.addEventListener('click', toggleDescription, expandButton);
	});
}
