import { GraphModel } from './modulli/Model.js';
import { GraphView } from './modulli/View.js';
import { GraphController } from './modulli/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
	const view = new GraphView('holtCanvas', 3, 3);
	const model = new GraphModel(); 
	const controller = new GraphController(model, view);
});