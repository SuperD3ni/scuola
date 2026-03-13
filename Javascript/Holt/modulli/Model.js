export class GraphModel {
    constructor(processes = 3, resources = 3) {
        this.processes = {
            quantity: processes,
        }
        this.resources = {
            quantity: resources,
            capacity: Math.floor(Math.random() * 3) + 1 // random number between 1 and 3
        }
    }

    getInitialGraphSize() {
        return {
            processes: this.processes.quantity,
            resources: this.resources.quantity,
        };
    }

    setGraph(processes, resources) {
        this.processes.quantity = processes;
        this.resources.quantity = resources;  
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