export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.drawInitial();
        const checkboxes = document.getElementsByClassName('checkbox');
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.addEventListener('change', () => {
            });
        });
    }

    drawInitial() {
        const { processes, resources } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources);
    }

}
