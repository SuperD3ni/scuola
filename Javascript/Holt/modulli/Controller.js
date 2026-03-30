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
                this.view.changeGraph(this.model.arrows, this.model.resources.used, this.model.resources.capacities);
                if (result.hasDeadlock) {
                    console.log("riduzione con deadlock");
                } else {
                    console.log("riduzione no deadlock")
                }
            });
        }
    }
}