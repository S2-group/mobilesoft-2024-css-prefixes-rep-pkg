import DataVizCanvas from './DataVizCanvas';

/**
 * Create singleton by creating a null instance variable scoped to module
 * and assigning the 'this' keyword inside class constructor. This will
 * return the unique instance (the first created).
 * https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae
 */
let instance = null;
export default class DataVizController {
	constructor(dataVizModel, dataVizView) {
		if (!instance) {
			instance = this;
		}

		this.dataVizModel = dataVizModel;
		this.dataVizView = dataVizView;
		this.dataVizCanvas = new DataVizCanvas();
		this.dataVizCanvas.init();

		this.currentDataVizList = {};
		this.newDataVizList = {};

		this.dataIndex = 0;
		this.timer = null;

		return instance;
	}

	getNewData() {
		return (this.dataVizModel.dataModel.data[this.dataIndex] || {}).pages || [];
	}

	getNewPageInfo() {
		return this.dataVizModel.dataModel.pageInfo || {};
	}

	getActiveUsers() {
		return Math.max(0, (this.dataVizModel.dataModel.data[this.dataIndex] || {}).siteVisits || 0);
	}

	mapNewData(pages, pageInfo) {
		let pageIndex = 0;
		return pages.forEach((pageSegment) => {
			const page = pageInfo[pageSegment.index];
			if (!this.newDataVizList[page.url]) {
				this.newDataVizList[page.url] = {
					index: pageIndex,
					views: (pageSegment.users).toLocaleString(),
					pageInfo: page,
				};
				pageIndex++;
			}
		});
	}

	leave(oldKeys, newKeys) {
		const leavingKeys = oldKeys.filter((key) => newKeys.indexOf(key) === -1);
		if (leavingKeys) {
			leavingKeys.forEach((key) => {
				delete this.currentDataVizList[key];
				this.dataVizView.leaving(key);
			});
		}
	}

	reposition(oldKeys, newKeys) {
		const repositioningKeys = [...new Set(oldKeys.filter((key) => newKeys.indexOf(key) !== -1))];
		if (repositioningKeys) {
			repositioningKeys.forEach((key) => {
				const direction = this.currentDataVizList[key].views < this.newDataVizList[key].views ? 'up' : 'down';
				this.currentDataVizList[key] = this.newDataVizList[key];
				this.dataVizView.repositioning(key, this.newDataVizList, direction);
			});
		}
	}

	enter(oldKeys, newKeys) {
		const enteringKeys = newKeys.filter((key) => oldKeys.indexOf(key) === -1);
		if (enteringKeys) {
			enteringKeys.forEach((key) => {
				this.currentDataVizList[key] = this.newDataVizList[key];
				this.dataVizView.entering(key, this.newDataVizList);
			});
		}
	}

	renderUpdatedUsersAndCanvas() {
		this.dataVizView.renderUsers(this.getActiveUsers());
		this.dataVizCanvas.changeNumber(this.getActiveUsers());
	}

	/**
	 * if page is in both current and new object, just need to update index (reposition)
	 * if page is in current, but not in new, remove from current object (leave)
	 * if page is in new, but not in current, add it to current object (enter)
	 */
	renderUpdatedList() {
		const oldKeys = Object.keys(this.currentDataVizList);
		const newKeys = Object.keys(this.newDataVizList);

		this.leave(oldKeys, newKeys);
		this.reposition(oldKeys, newKeys);
		this.enter(oldKeys, newKeys);
		this.dataVizView.hideItemsOutOfView();

		this.renderUpdatedUsersAndCanvas();
	}

	renderInitialList() {
		if (Object.keys(this.currentDataVizList).length === 0) {
			const initialList = Object.keys(this.newDataVizList);
			initialList.forEach((key) => {
				this.dataVizView.loadInitialList(key, this.newDataVizList);
				this.dataVizView.hideItemsOutOfView();
			});

			// Hides Ghost Elements
			this.dataVizView.dataVizList?.classList.remove('data-viz__loading');
		}

		this.renderUpdatedUsersAndCanvas();
	}

	renderMobileList() {
		const oldKeys = Object.keys(this.currentDataVizList);
		const newKeys = Object.keys(this.newDataVizList);

		// mobile implementation does not care about leaving items
		const repositioningKeys = [...new Set(oldKeys.filter((key) => newKeys.indexOf(key) !== -1))];
		const enteringKeys = newKeys.filter((key) => oldKeys.indexOf(key) === -1);
		const mobileArr = repositioningKeys.concat(enteringKeys);

		mobileArr.forEach((key) => {
			if (this.newDataVizList[key].index < 10) {
				const increaseViews = (this.currentDataVizList[key] && this.currentDataVizList[key].views < this.newDataVizList[key].views);
				const direction = (increaseViews || !this.currentDataVizList[key]) ? 'up' : 'down';
				this.dataVizView.loadMobileList(key, this.newDataVizList, direction);
			}
		});

		// Hides Ghost Elements
		this.dataVizView.dataVizList?.classList.remove('data-viz__loading');
		this.renderUpdatedUsersAndCanvas();
		this.dataVizView.hideItemsOutOfView();
	}

	updateData(type) {
		this.dataIndex++;
		this.mapNewData(this.getNewData(), this.getNewPageInfo());

		if (type === 'mobile') {
			this.renderUpdatedUsersAndCanvas();
		} else {
			this.renderUpdatedList();
		}
	}

	getData(type) {
		this.clearTimer();
		this.dataVizModel.refetchData()
			.then(() => {
				this.dataIndex = 0;
				this.mapNewData(this.getNewData(), this.getNewPageInfo());

				if (type === 'mobile') {
					this.renderUpdatedUsersAndCanvas();
				} else {
					this.renderUpdatedList();
				}

				this.startTimer(type);
			});
	}

	clearTimer() {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	startTimer(type) {
		if (this.timer) return;

		if (this.hasData()) {
			this.timer = setInterval(() => {
				this.newDataVizList = {}; // reset new data

				/**
				 * get new data when data viz is on last dataset.
				 * otherwise, continue going through array to update data.
				 */
				if (this.dataIndex === this.dataVizModel.dataModel.data.length - 1) {
					this.getData(type);
				} else {
					this.updateData(type);
				}
			}, 5000);
		}
	}

	hasData() {
		return this.dataVizModel.dataModel && this.dataVizModel.dataModel.data;
	}

	initializeMobileList() {
		if (Object.keys(this.currentDataVizList).length === 0) {
			this.mapNewData(this.getNewData(), this.getNewPageInfo());
			this.currentDataVizList = this.newDataVizList;
		}

		this.dataIndex++;
		this.newDataVizList = {};

		this.mapNewData(this.getNewData(), this.getNewPageInfo());
		this.renderMobileList();
	}

	initialize() {
		if (this.hasData()) {
			this.mapNewData(this.getNewData(), this.getNewPageInfo());
			this.renderInitialList();

			// current data is set to new data only after initial list is rendered
			if (Object.keys(this.currentDataVizList).length === 0) {
				this.currentDataVizList = this.newDataVizList;
			}

			this.startTimer();
		}
	}
}
