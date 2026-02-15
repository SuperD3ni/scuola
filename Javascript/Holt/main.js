import { GraphModel } from './modulli/Model.js';
import { GraphView } from './modulli/View.js';
import { GraphController } from './modulli/Controller.js';

const view = new GraphView('holtCanvas');

const model = new GraphModel(view);

const controller = new GraphController(model);

view.drawInitial(3,3);