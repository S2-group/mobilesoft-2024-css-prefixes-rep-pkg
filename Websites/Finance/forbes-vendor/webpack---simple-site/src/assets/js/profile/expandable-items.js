import Event from '../shared/event';

const expandableItem = document.querySelector('.profile-expandable_item');
const icon = document.querySelector('.profile-expanded__icon');

function toggle() {
	expandableItem.classList.toggle('expanded');
	icon?.classList.toggle('icon-chevron-up');
	icon?.classList.toggle('icon-chevron-down');
}

if (expandableItem) {
	Event.addEventListener('click', toggle, icon);
}
