export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.drawInitial();
        this.attachCheckboxListeners();
        this.attachRiduzioneButtonListener();
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
    attachRiduzioneButtonListener() {
        const button = this.view.getRiduzioneButton();
        if (button) {
            button.addEventListener('click', () => {
                const result = this.model.reduce();
                this.view.uncheckCheckboxesForProcesses(result.reduced);
                const { arrows, used, capacities } = this.model.getGraphState();
                this.view.changeGraph(arrows, used, capacities);
            });
        }
    }
}