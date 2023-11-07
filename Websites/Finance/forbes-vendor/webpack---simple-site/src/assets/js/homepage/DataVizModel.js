import { serverData } from '../shared/clientConfigService';
import checkStatus from '../shared/checkStatus';

export default class DataVizModel {
	constructor() {
		this.dataModel = serverData.dataVizModel;
	}

	/**
	 * Retrieves more data from the api.
	 */
	refetchData() {
		const url = serverData.division ? `/simple-data/data-viz/?division=${serverData.division}` : '/simple-data/data-viz/';
		return fetch(url)
			.then((response) => checkStatus(response))
			.then((res) => res.json())
			.then((res) => {
				this.dataModel = res;
				return this.dataModel;
			})
			.catch((error) => console.error(error));
	}
}
