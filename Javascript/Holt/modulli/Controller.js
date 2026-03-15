export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.drawInitial();
        this.view.onCheckboxChange((processIndex, resourceIndex, isChecked) => {
            const [arrows, usedResources, resourceCapacities] = this.model.checked(processIndex, resourceIndex, isChecked);
            if (arrows && usedResources && resourceCapacities) {
                this.view.changeGraph(arrows, usedResources, resourceCapacities);
            } else {
                console.error('Invalid checkbox event data:', toDraw);
            }
        });
    }

    drawInitial() {
        const { processes, resources, resourceCapacities } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources, resourceCapacities);
    }

}
