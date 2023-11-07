import { toggleClassEventListener } from '../shared/domUtilities';
import { isMobile } from '../shared/is-mobile';

document.addEventListener('DOMContentLoaded', () => {
	const qToggles = [...document.querySelectorAll('.q-toggle')];
	const qFactorRows = [...document.querySelectorAll('.q-factor-row--aspect')];
	const collapseIcon = document.querySelector('.collapse-icon');
	const collapseDiv = document.querySelector('.profile-info__q-factor-collapse');
	const qInfo = document.querySelector('.q-score-label--total .fs-icon');
	const qDisclaimerLink = document.querySelector('.disclaimer-link');
	const qlegalText = document.querySelector('.q-legal-disclaimer');
	const qDescription = document.querySelector('.q-info-text');
	const qDetailsClose = document.querySelector('.q-disclaimer-mobile-close');
	const qDetailsLabelMobile = document.querySelector('.q-factor-score-text-label');
	const qFactorParent = document.querySelector('.profile-info__q-factor-details');
	const qLegalParent = document.querySelector('.q-factor-legal-disclaimer');

	if (qFactorParent) {
		qToggles.forEach((toggle) => {
			toggle.addEventListener('click', () => {
				qFactorRows.forEach((el) => {
					el.classList.toggle('q-factor--hidden');
					collapseDiv?.classList.toggle('q-factor--hidden');
				});
				collapseIcon?.classList.toggle('collapse-icon--collapsed');
				qToggles.forEach((el) => {
					el.classList.toggle('q-factor--hidden');
					collapseDiv?.classList.toggle('q-factor--hidden');
				});
			});
		});

		qDisclaimerLink.addEventListener('click', () => {
			toggleClassEventListener('q-disclaimer-show', qlegalText);
			toggleClassEventListener('q-disclaimer-parent-show', qLegalParent);
		});

		if (!isMobile) {
			qInfo.addEventListener('mouseenter', () => {
				qDescription?.classList.add('q-disclaimer-show');
			});

			qDescription.addEventListener('mouseleave', () => {
				setTimeout(() => {
					qDescription?.classList.remove('q-disclaimer-show');
				}, 400);
			});
		}

		if (isMobile) {
			qInfo.addEventListener('click', () => {
				qDescription?.classList.toggle('q-disclaimer-show');
			});

			qDetailsClose.addEventListener('click', () => {
				qDescription?.classList.remove('q-disclaimer-show');
			});

			qDetailsLabelMobile.addEventListener('click', () => {
				qDescription?.classList.toggle('q-disclaimer-show');
			});
		}
	}

	// Keep video ads from pausing on click for companies with stock analytics
	const fbsVideoService = window['fbs-video'];
	if (fbsVideoService) {
		fbsVideoService.hiddenPauseEnabled = false;
	}
});
