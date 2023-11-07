import { play } from '@forbes/fbs-icons';
import multiclamp from '@forbesmedia/multiclamp';
import CountUp from 'countup.js';

export default class DataVizView {
	constructor(dataVizList, dataVizActiveUsers) {
		this.dataVizList = dataVizList;
		this.dataVizActiveUsers = dataVizActiveUsers;
		this.updateListItemHeight();

		// CountUp configuration options
		this.easeInOptions = {
			easingFn: this.easeInCubic,
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
		};
		this.noEasingOptions = {
			useEasing: false,
			useGrouping: true,
			separator: ',',
			decimal: '.',
		};
		this.easeOutOptions = {
			easingFn: this.easeOutCubic,
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
		};
		const textCanvas = document.createElement('canvas');
		this.textCtx = textCanvas.getContext('2d');
	}

	static createNumberContainer(newItem) {
		const numberContainer = document.createElement('div');
		numberContainer.classList.add('data-viz__number-container');

		const numberEl = document.createElement('h4');
		const numberText = document.createTextNode(newItem.views);
		numberEl.classList.add('data-viz__value');
		numberEl.appendChild(numberText);

		const arrow = document.createElement('div');
		arrow.setAttribute('class', 'data-viz__arrow-wrapper');
		arrow.innerHTML = play;
		numberContainer.append(numberEl, arrow);

		return numberContainer;
	}

	static createPaidContentContainer(newItemLabel) {
		const paidContentContainer = document.createElement('div');
		paidContentContainer.classList.add('data-viz__paid-content-container');

		const paidContentNameEl = document.createElement('span');
		const paidContentNameText = document.createTextNode(newItemLabel.brandName);
		paidContentNameEl.classList.add('data-viz__paid-content-name');
		paidContentNameEl.appendChild(paidContentNameText);

		const paidContentLabelEl = document.createElement('span');
		const paidContentLabelText = document.createTextNode(` ${newItemLabel.label} `);
		paidContentLabelEl.classList.add('data-viz__paid-content-label');
		paidContentLabelEl.style.color = newItemLabel.primaryColor;
		paidContentLabelEl.appendChild(paidContentLabelText);

		const paidContentFTCEl = document.createElement('span');
		const paidContentFTCText = document.createTextNode(newItemLabel.ftcLabel);
		paidContentFTCEl.classList.add('data-viz__paid-content-ftc');
		paidContentFTCEl.appendChild(paidContentFTCText);

		paidContentContainer.append(paidContentNameEl, paidContentLabelEl, paidContentFTCEl);

		return paidContentContainer;
	}

	static createTitleContainer(newItem) {
		const titleContainer = document.createElement('div');
		titleContainer.classList.add('data-viz__title-container');
		const titleEl = document.createElement('a');
		const titleText = document.createTextNode(newItem.pageInfo.title);
		titleEl.setAttribute('href', newItem.pageInfo.url);
		titleEl.setAttribute('data-ga-track', `Trending - Article - ${newItem.pageInfo.title}`);
		titleEl.setAttribute('title', newItem.pageInfo.title);
		titleEl.classList.add('data-viz__title', 'body--dense-merriweather');
		titleEl.appendChild(titleText);

		if ((newItem.paidLabel || {}).brandName) {
			const paidContentContainer = DataVizView.createPaidContentContainer(newItem.paidLabel);
			titleContainer.append(paidContentContainer, titleEl);
		} else {
			titleContainer.append(titleEl);
		}
		return titleContainer;
	}

	static createListItem(key, newDataVizList) {
		const newItem = newDataVizList[key];

		const numberContainer = DataVizView.createNumberContainer(newItem);
		const titleContainer = DataVizView.createTitleContainer(newItem);

		const listItem = document.createElement('li');
		listItem.setAttribute('data-index', newItem.index);
		listItem.setAttribute('data-key', key);
		listItem.classList.add('data-viz__item');
		listItem.append(numberContainer, titleContainer);

		return listItem;
	}

	static updateViewNumber(element, key, index, newDataVizList) {
		element.setAttribute('data-index', index);
		const updatedItem = newDataVizList[key];
		const valueEl = element.querySelector('.data-viz__value');
		valueEl.innerHTML = updatedItem.views;
	}

	static updateArrowDirection(element, direction) {
		const arrow = element.querySelector('.data-viz__arrow-wrapper');
		const downArrowClass = 'data-viz__arrow--down';

		if (direction === 'up') {
			if (arrow?.classList.contains(downArrowClass)) {
				arrow.classList.remove(downArrowClass);
			}
		} else if (direction === 'down') {
			if (!arrow?.classList.contains(downArrowClass)) {
				arrow.classList.add(downArrowClass);
			}
		}
	}

	updateListItemHeight() {
		if (document.body.clientWidth <= 480) {
			this.listItemHeight = 75;
		} else if (document.body.clientWidth <= 1024) {
			this.listItemHeight = 90;
		} else {
			this.listItemHeight = 100;
		}
	}

	// easing functions credit to http://gizma.com/easing/#cub3
	easeInCubic = (t, b, c, d) => {
		t /= d;
		return (c * (t ** 3)) + b;
	};

	easeOutCubic = (t, b, c, d) => {
		t /= d;
		t--;
		return (c * ((t ** 3) + 1)) + b;
	};

	countUp(startVal, endVal, timing, options, callback) {
		// params for CountUp(target, start value, end value, number of decimal places, animation duration, configuration options)
		const countUp = new CountUp(this.dataVizActiveUsers, startVal, endVal, 0, timing, options);
		if (!countUp.error) {
			countUp.start(callback);
		} else {
			this.dataVizActiveUsers.innerText = endVal;
		}
	}

	renderUsers(users) {
		const currentUserCount = parseInt(this.dataVizActiveUsers.innerText.replace(',', ''), 10) || 0;
		const halfway = (currentUserCount + users) / 2;
		// ease out is applied to the last 50 to emphasize easing at the end of animation
		const fiftyShy = Math.max(0, (currentUserCount < users ? users - 50 : users + 50));
		const easeOutCallback = () => {
			this.countUp(fiftyShy, users, 1.0, this.easeOutOptions);
		};
		const easeInCallback = () => {
			this.countUp(halfway, fiftyShy, 1.5, this.noEasingOptions, easeOutCallback);
		};

		this.countUp(currentUserCount, halfway, 2.5, this.easeInOptions, easeInCallback);
	}

	setInitialAnimation(item) {
		requestAnimationFrame(() => {
			item.style.transform = `translateY(${item.dataset.index * this.listItemHeight}px)`;
		});
	}

	hideItemsOutOfView() {
		this.resetHiddenItems();

		const numItemsInView = Math.floor(this.dataVizList.clientHeight / this.listItemHeight);

		const listItems = [...this.dataVizList.querySelectorAll('li')];
		listItems.forEach((item) => {
			if (item.dataset.index >= numItemsInView) {
				item.classList.add('data-viz__hide');
			}
		});

		const lastElementInView = this.dataVizList.querySelector(`[data-index="${numItemsInView - 1}"]`);
		if (lastElementInView) {
			lastElementInView.classList.add('data-viz__hide-border-bottom');
		}
	}

	resetHiddenItems() {
		const itemWithHiddenBorderBottom = this.dataVizList.querySelector('.data-viz__hide-border-bottom');
		if (itemWithHiddenBorderBottom) {
			itemWithHiddenBorderBottom.classList.remove('data-viz__hide-border-bottom');
		}

		const itemsOutOfView = [...this.dataVizList.querySelectorAll('.data-viz__hide')];
		itemsOutOfView.forEach((item) => {
			item.classList.remove('data-viz__hide');
		});
	}

	loadInitialList(key, newDataVizList) {
		const listItem = DataVizView.createListItem(key, newDataVizList);
		this.setInitialAnimation(listItem);
		this.dataVizList.appendChild(listItem);
		// need timeout to give item a chance to attach to the DOM
		setTimeout(() => {
			const title = listItem.querySelector('.data-viz__title');
			multiclamp(title, 2, false);
		});
	}

	loadMobileList(key, newDataVizList, direction) {
		const { index } = newDataVizList[key];
		const listItem = DataVizView.createListItem(key, newDataVizList);
		listItem.style.transform = `translateY(${listItem.dataset.index * this.listItemHeight}px)`;
		this.dataVizList.appendChild(listItem);

		// need timeout to give item a chance to attach to the DOM
		setTimeout(() => {
			const title = listItem.querySelector('.data-viz__title');
			multiclamp(title, 2, false);
		});

		const element = this.dataVizList.querySelector(`[data-key="${key}"]`);
		DataVizView.updateViewNumber(element, key, index, newDataVizList);
		DataVizView.updateArrowDirection(element, direction);
	}

	leaving(key) {
		const element = this.dataVizList.querySelector(`[data-key="${key}"]`);
		if (element) {
			element.style.transition = 'transform 0.5s ease';
			element.style.transform = 'translateY(1500px)';
			setTimeout(() => {
				element.parentNode.removeChild(element);
			}, 500);
		}
	}

	repositioning(key, newDataVizList, direction) {
		const { index } = newDataVizList[key];
		const element = this.dataVizList.querySelector(`[data-key="${key}"]`);
		if (element) {
			element.style.transition = 'transform 0.5s ease';
			element.style.transform = `translateY(${index * this.listItemHeight}px)`;
			DataVizView.updateViewNumber(element, key, index, newDataVizList);
			DataVizView.updateArrowDirection(element, direction);
		}
	}

	entering(key, newDataVizList) {
		const listItem = DataVizView.createListItem(key, newDataVizList);
		const { index } = newDataVizList[key];

		if (listItem) {
			listItem.style.transform = 'translateY(1500px)';
			this.dataVizList.appendChild(listItem);
			// need timeout to give item a chance to attach to the DOM
			setTimeout(() => {
				const title = listItem.querySelector('.data-viz__title');
				multiclamp(title, 2, false);
			});
			requestAnimationFrame(() => {
				listItem.style.transition = 'transform 0.5s ease';
				listItem.style.transform = `translateY(${index * this.listItemHeight}px)`;
			});
		}
	}
}
