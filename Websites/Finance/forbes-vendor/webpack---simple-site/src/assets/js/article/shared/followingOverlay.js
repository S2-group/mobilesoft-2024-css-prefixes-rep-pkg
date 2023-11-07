// eslint-disable-next-line import/no-unresolved, import/extensions
import { template as overlayTemplate } from '../../../../../dist/templates/_following-overlay';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { template as loadingTemplate } from '../../../../../dist/templates/_following-loading';
import { fireGAEvent } from '../../shared/tracking';

/**
 * Add mutation observer on each of the recommended authors to follow and change the
 * place of the author when followed to the top of the modal
 * @param {HTML DOM Element} containers the follow container to add the observer at
 */
function followLocationChange(containers) {
	const followingOutro = document.querySelector('.following-outro');
	containers = Array.from(containers);
	containers.forEach((container) => {
		const observer = new MutationObserver(((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'state' && container.state === 'Follow') {
					container.querySelector('button').addEventListener('click', () => {
						const authorBlock = container.closest('.author-block');
						followingOutro.insertAdjacentElement('beforebegin', authorBlock);
						fireGAEvent({
							eventAction: 'click',
							eventLabel: 'Recommend Writer Following Tooltip',
						});
						observer.disconnect();
					});
				}
			});
		}));

		observer.observe(container, { attributes: true });
	});
}

/**
 * filter out followed authors and return the correct number of authors based on if
 * mobile or desktop
 * @param {Array} authorArray array containing recommended authors
 * @param {boolean} isMobile if the device is mobile
 * @returns {Array} array with the correct number of recommended authors
 */
async function filterFollowedAuthors(authorArray, isMobile) {
	return window.fbsCordial.userCordialData.then((data) => {
		authorArray = authorArray.filter((author) => !data.followedAuthors.includes(author.naturalId));

		if (isMobile) {
			return	authorArray.slice(0, 5);
		}

		return authorArray.slice(0, 3);
	});
}

/**
 * Adds Event Listeners to The Author Follow Button to add an attribute to get the click position
 * @param {HTML Dom Element} article the article that we add the follow button on
 * @param {HTML DOM Element} followContainer html dom that has the follow buttons in it
 */
function followAuthorsAddEventListeners(article, followContainer) {
	const bottomBelow = article.querySelectorAll('fbs-cordial');
	bottomBelow.forEach((element) => {
		element.addEventListener('click', (event) => {
			if (event.target.className === 'unfollow-button') {
				followContainer.setAttribute('cposition', element.getAttribute('page-position'));
			}
		});
	});
}

/**
 * Initialize the following overlay when clicking on the follow button
 * fetch the authors data to show at the top of the overlay modal
 * add functionality of closing and manipulating the modal
 * @param {HTML DOM Element} article the article that we add the follow button on
 * @param {boolean} isMobile if the device is mobile
 */
export default function followingOverlay(article = document, isMobile = false) {
	const followContainer = article.querySelector('fbs-cordial');

	if (!followContainer) {
		return;
	}

	followAuthorsAddEventListeners(article, followContainer);
	const parent = followContainer.closest('.fs-author-group-wrapper');
	const authorLink = parent.querySelector('a');
	const authorName = authorLink?.innerHTML || '';
	const authorPage = authorLink?.getAttribute('href') || '';
	const authorBio = (parent.querySelector('.short-bio span') || {}).innerHTML || '';
	const insertionLocation = isMobile ? document.body : followContainer;
	let oldState = followContainer.state;

	let flag = true;
	const observer = new MutationObserver(((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName === 'cposition' && followContainer.state === 'Unfollow' && oldState && flag && followContainer.getAttribute('cposition') === 'top') {
				flag = false;

				let html = loadingTemplate();
				insertionLocation.insertAdjacentHTML('beforeend', html);

				const zephrUser = window.Zephr?.user || {};
				const sealId = zephrUser['piano-id'] || zephrUser['tracking-id'];

				fetch(`https://seal-author.forbes.com/user?userId=${sealId}&n=12`)
					.then((response) => response.json())
					.then(async (data) => {
						const input = {
							mainAuthor: {
								name: authorName,
								profileUrl: authorPage,
								shortBio: authorBio,
							},
							authorData: await filterFollowedAuthors(data.result, isMobile),
						};

						html = overlayTemplate({ ...input });
						insertionLocation.removeChild(insertionLocation.querySelector('.following-overlay'));
						insertionLocation.insertAdjacentHTML('beforeend', html);

						if (isMobile) {
							document.documentElement.style.overflow = 'hidden';
						}

						const closeButton = document.querySelector('.following-overlay .close-button');
						const followContainers = insertionLocation.querySelectorAll('.following-overlay fbs-cordial:not(.hidden)');
						followLocationChange(followContainers);

						closeButton.addEventListener('click', () => {
							fireGAEvent({
								eventAction: 'click',
								eventLabel: 'Following Overlay Close',
							});
							insertionLocation.removeChild(insertionLocation.querySelector('.following-overlay'));
							flag = true;
							if (isMobile) {
								document.documentElement.style.overflow = 'auto';
							}
						});
					});
			}

			if (!oldState) {
				oldState = followContainer.state;
			}
		});
	}));

	observer.observe(followContainer, { attributes: true });
}
