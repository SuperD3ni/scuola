export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.drawInitial();
    }

    drawInitial() {
        const { processes, resources } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources);
    }
}
