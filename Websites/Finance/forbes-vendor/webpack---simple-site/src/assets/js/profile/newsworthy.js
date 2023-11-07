import { insertAd } from '../shared/adInsertion';

document.addEventListener('DOMContentLoaded', () => {
	const stream = document.querySelector('.profile-news__items');

	if (!stream) {
		return;
	}

	const moreArticlesButton = document.querySelector('.load-more');
	const desktopStreamAd = stream.querySelector('.fbs-ad--moreon-wrapper');
	const desktopDynamicAd = stream.querySelector('.fbs-ad--moreon-wrapper--incremental');

	if (moreArticlesButton) {
		moreArticlesButton.addEventListener('click', () => {
			moreArticlesButton.style.display = 'none';
			stream.classList.remove('profile-news__items--has-hidden');

			if (desktopStreamAd) {
				desktopStreamAd.className = 'fbs-ad--loaded-moreon-wrapper';
			}

			if (desktopDynamicAd) {
				insertAd('moreon');
			}
		});
	}
});
