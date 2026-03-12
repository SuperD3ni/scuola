import { GraphModel } from './modulli/Model.js';
import { GraphView } from './modulli/View.js';
import { GraphController } from './modulli/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
	const view = new GraphView('holtCanvas');
	const model = new GraphModel(3, 3);
	const controller = new GraphController(model, view);

	controller.init();
});