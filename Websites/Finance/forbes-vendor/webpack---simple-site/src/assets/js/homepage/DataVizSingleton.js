import DataVizController from './DataVizController';
import DataVizView from './DataVizView';
import DataVizModel from './DataVizModel';

const dataVizActiveUsers = document.querySelector('.data-viz__active-number');
const dataVizList = document.querySelector('.data-viz__list');
const dataVizView = new DataVizView(dataVizList, dataVizActiveUsers);
const dataVizModel = new DataVizModel();
const dataVizController = new DataVizController(dataVizModel, dataVizView);

export {
	dataVizList,
	dataVizView,
	dataVizController,
};
