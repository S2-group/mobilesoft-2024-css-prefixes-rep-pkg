import { fireGAEvent } from './tracking';

let pianoNewsletterData;

/**
 * Initialize offer event when fbs-zephr-init is set.
 */
const newsletterEvent = () => {
	pianoNewsletterData = document.querySelector('input.piano-newsletter');

	if (!pianoNewsletterData) {
		return;
	}

	const isSubscribed = JSON.parse(pianoNewsletterData.getAttribute('user-subscription'));

	if ((isSubscribed || {}).error) {
		fireGAEvent({
			eventCategory: 'Piano',
			eventAction: 'NewslettersPaywall',
			eventLabel: 'Shown',
		});
	}
};

/**
 * newsletterOffer used by article and contributor.
 * @param {*} containerSelector used to populate the templateOffer
 * @param {*} type determine the object (lander or article) to populate templateOffer
 */
const newsletterOffers = (containerSelector) => {
	if (document.querySelector(containerSelector)) {
		document.addEventListener('fbs-zephr-init', () => newsletterEvent());
	}
};

export default newsletterOffers;
