export class GraphModel {
    constructor(processes = 3, resources = 3) {
        this.processes = processes;
        this.resources = resources;
    }

    getInitialGraphSize() {
        return {
            processes: this.processes,
            resources: this.resources,
        };
    }

    setGraph(processes, resources) {
        this.processes = 3;
        this.resources = 3;

        if (Number.isInteger(processes) && processes > 0) {
            this.processes = processes;
        }

        if (Number.isInteger(resources) && resources > 0) {
            this.resources = resources;
        }
    }

    checked(event) {
        const checkbox = event.target;
        const [processIndex, resourceIndex] = checkbox.id.split('-');
        console.log(`Checkbox at Process ${processIndex}, Resource ${resourceIndex} changed.`);
        if (checkbox.checked) {
            return [processIndex, resourceIndex, true];
        } else {
            return [processIndex, resourceIndex, false];
        }
    }
}