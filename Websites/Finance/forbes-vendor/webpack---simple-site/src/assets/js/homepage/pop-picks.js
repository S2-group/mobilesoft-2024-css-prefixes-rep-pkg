import { isMobile, isTablet } from '../shared/is-mobile';
import { dataVizList, dataVizView, dataVizController } from './DataVizSingleton';
import { region } from '../shared/clientConfigService';
import throttle from '../shared/throttle';
import checkStatus from '../shared/checkStatus';
import { primeInviewEvent } from '../shared/tracking';
import { truncateCarouselTitles } from '../shared/carouselUtilities';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { template } from '../../../../dist/templates/_editorsPicks';

document.addEventListener('DOMContentLoaded', () => {
	const popPicks = document.querySelector('.channel__sidebar--pop-picks');
	const popularBtn = popPicks.querySelector('.pop-picks__nav-btn--popular');
	const picksBtn = popPicks.querySelector('.pop-picks__nav-btn--picks');
	const popularContent = popPicks.querySelector('.pop-picks__content--popular');
	const picksContent = popPicks.querySelector('.pop-picks__content--picks');
	let popularOnScreen = true;
	let picksData = null;
	let picksItems;

	function hideLargeScreenPicks() {
		const contentHeight = picksContent.clientHeight;
		const previousLastVisible = document.querySelector('.editors-pick--last-visible');
		if (previousLastVisible) {
			previousLastVisible.classList.remove('editors-pick--last-visible');
		}

		let lastVisibileItem;

		(picksItems || []).forEach((pick) => {
			if (pick.offsetTop + pick.clientHeight > contentHeight - 20) {
				pick.classList.add('editors-pick--hidden');
				pick.setAttribute('aria-hidden', 'true');
				pick.setAttribute('tabindex', '-1');
				lastVisibileItem?.classList.add('editors-pick--last-visible');
			} else {
				pick.classList.remove('editors-pick--hidden');
				pick.removeAttribute('aria-hidden', 'true');
				pick.removeAttribute('tabindex', '-1');
				lastVisibileItem = pick;
			}
		});
	}

	function checkToHidePicks() {
		if (window.innerWidth > 768) {
			hideLargeScreenPicks();
		}
	}

	function insertPicks() {
		const data = {
			picksData,
		};
		const html = template(data);
		picksContent.innerHTML = html;
		picksItems = [...picksContent.querySelectorAll('.editors-pick')];
		setTimeout(() => {
			truncateCarouselTitles(picksContent, '.data-viz__title');
		});
		setTimeout(() => {
			checkToHidePicks();
		}, 100);
	}

	function getPicksData() {
		fetch('/simple-data/editors-picks/')
			.then((response) => checkStatus(response))
			.then((res) => res.json())
			.then((res) => {
				picksData = res;
				insertPicks();
			})
			.catch((error) => console.error(error));
	}

	function onClickPopular() {
		if (!popularOnScreen) {
			popularOnScreen = true;
			popularBtn?.classList.add('pop-picks__nav-btn--active');
			picksBtn?.classList.remove('pop-picks__nav-btn--active');
			popularContent?.classList.add('pop-picks__content--active');
			picksContent?.classList.remove('pop-picks__content--active');
			if (!isMobile && !isTablet) {
				dataVizController.startTimer();
			}
		}
	}

	function onClickPicks() {
		if (popularOnScreen) {
			popularOnScreen = false;
			dataVizController.clearTimer();
			popularBtn?.classList.remove('pop-picks__nav-btn--active');
			picksBtn?.classList.add('pop-picks__nav-btn--active');
			popularContent?.classList.remove('pop-picks__content--active');
			picksContent?.classList.add('pop-picks__content--active');

			if (!picksData) {
				getPicksData();
			}
		}
	}

	function initializeDataViz() {
		if (dataVizController.hasData()) {
			if (isMobile || isTablet) {
				dataVizController.initializeMobileList();
			} else {
				dataVizController.initialize();
			}
		} else {
			// TODO Client side fetch?
			// See https://jira.forbes.com/browse/PROD-2110
			onClickPicks(); // Trigger Editor's Picks
		}
	}

	function setUpEventHandlers() {
		if (!isMobile && !isTablet) {
			window.addEventListener('focus', () => {
				if (popularOnScreen) {
					dataVizController.startTimer();
				}
			});

			window.addEventListener('blur', () => {
				if (popularOnScreen) {
					dataVizController.clearTimer();
				}
			});

			if (dataVizList) {
				dataVizList.addEventListener('mouseenter', throttle(() => dataVizController.clearTimer()));
				dataVizList.addEventListener('mouseleave', throttle(() => dataVizController.startTimer()));
			}
		}

		window.addEventListener('resize', throttle(() => {
			if (popularOnScreen) {
				dataVizView.updateListItemHeight();
				dataVizView.hideItemsOutOfView();
			} else {
				checkToHidePicks();
			}
		}, 200));

		popularBtn.onclick = onClickPopular;
		picksBtn.onclick = onClickPicks;
	}

	function internationalize() {
		if (region !== 'usa') {
			dataVizList?.classList.add('data-viz__list--international');
		}
	}

	initializeDataViz();
	setUpEventHandlers();
	internationalize();
	primeInviewEvent(document.querySelector('.pop-picks__content--popular'), 'Homepage Trending In-View', 0.05);
});
