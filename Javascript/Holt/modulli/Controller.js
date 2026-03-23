export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.drawInitial();
        this.attachCheckboxListeners();
    }

    attachCheckboxListeners() {
        this.view.getCheckboxes().forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => {
                const [processIndex, resourceIndex] = event.target.id.split('-');
                const isChecked = event.target.checked;
                const [arrows, usedResources, resourceCapacities] = this.model.checked(processIndex, resourceIndex, isChecked);
                if (arrows && usedResources && resourceCapacities) {
                    this.view.changeGraph(arrows, usedResources, resourceCapacities);
                } else {
                    console.error('Invalid checkbox event data.');
                }
            });
        });
    }

    drawInitial() {
        const { processes, resources, resourceCapacities } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources, resourceCapacities);
    }

}
