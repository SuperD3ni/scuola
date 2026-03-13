export class GraphModel {
    constructor(processes = 3, resources = 3) {
        this.processes = {
            quantity: processes,
        }

        let capacitiesList = [];
        let usedList = [];
        for (let i = 0; i < resources; i++) {
            const capacity = Math.floor(Math.random() * 3) + 1;
            capacitiesList.push(capacity);
            usedList.push(0);
        }
        this.resources = {
            quantity: resources,
            capacities: capacitiesList,
            used: usedList
        }
    }

    getInitialGraphSize() {
        return {
            processes: this.processes.quantity,
            resources: this.resources.quantity,
            resourceCapacities: this.resources.capacities
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
            this.resources.used[resourceIndex - 1]++;
            if (this.resources.used[resourceIndex - 1] > this.resources.capacities[resourceIndex - 1]) {
                return [processIndex, resourceIndex, this.resources.used[resourceIndex - 1], true, true];
            }
            console.log(this.resources.used);
            return [processIndex, resourceIndex, this.resources.used[resourceIndex - 1], false, true];
        } else {
            this.resources.used[resourceIndex - 1]--;
            console.log(this.resources.used);
            if (this.resources.used[resourceIndex - 1] > this.resources.capacities[resourceIndex - 1]) {
                return [processIndex, resourceIndex, this.resources.used[resourceIndex - 1], true, false];
            }
            return [processIndex, resourceIndex, this.resources.used[resourceIndex - 1], false, false];
        }
    }
}