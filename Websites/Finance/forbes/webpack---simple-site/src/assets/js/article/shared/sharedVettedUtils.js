import { primeInviewEvent } from '../../shared/tracking';
import { serverData } from '../../shared/clientConfigService';

// Remove the data-ga-track attribute from each anchor and the button inside
const removeBtnAttribute = new MutationObserver(((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.attributeName === 'data-ga-track') {
			mutation.target.removeAttribute('data-ga-track');
			mutation.target.childNodes.forEach((item) => item.removeAttribute('data-ga-track'));
		}
	});
}));

/**
 * Add tracking for the fbs pricing modules on scroll
 */
const setFbsPricingTracking = () => {
	const findsModule = document.querySelectorAll('fbs-pricing');
	findsModule.forEach((module, index) => {
		const findsEmbedBtns = module.querySelectorAll('.finds-embed');

		findsEmbedBtns.forEach((btn, i) => {
			const isAward = serverData.award[index][0] === 'award';
			const label = serverData.affiliatedLinks[index];
			removeBtnAttribute.observe(btn, { attributes: true });
			primeInviewEvent(btn, `ExternalModuleB${i + 1}${isAward ? 'AwardView' : 'View'}:${label[i]}`, 0);
		});
	});
};

document.addEventListener('DOMContentLoaded', () => {
	if (serverData.isForbesFinds) {
		setFbsPricingTracking();
	}
});
