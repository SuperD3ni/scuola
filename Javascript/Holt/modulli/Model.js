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
        this.arrows = []; // matrix to track the state of each arrow (0 for no arrow(white), 1 for visible(dark grey), 2 for overcap(red))
        for (let i = 0; i < processes; i++) {
            this.arrows[i] = [];
            for (let j = 0; j < resources; j++) {
                this.arrows[i].push(0);
            }
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

    checked(processIndex, resourceIndex, isChecked) {
        console.log(`Checkbox at Process ${processIndex}, Resource ${resourceIndex} changed.`);
        if (isChecked) {
            this.resources.used[resourceIndex - 1]++;
            if (this.resources.used[resourceIndex - 1] > this.resources.capacities[resourceIndex - 1]) {
                this.arrows[processIndex - 1][resourceIndex - 1] = 2; // over capacity
            } else {
                this.arrows[processIndex - 1][resourceIndex - 1] = 1; // within capacity
            }
            console.log(this.resources.used);
            console.log(this.arrows);
            return [this.arrows, this.resources.used, this.resources.capacities];
        } else {
            this.resources.used[resourceIndex - 1]--;
            console.log(this.resources.used);
            this.arrows[processIndex - 1][resourceIndex - 1] = 0; // no arrow
            this.changeAllArrows();
            console.log(this.arrows);
            return [this.arrows, this.resources.used, this.resources.capacities];
        }
    }

    changeAllArrows() {
        for (let i = 0; i < this.processes.quantity; i++) {
            for (let j = 0; j < this.resources.quantity; j++) {
                if (this.arrows[i][j] === 1 && this.resources.used[j] > this.resources.capacities[j]) {
                    this.arrows[i][j] = 2; // change to over capacity
                } else if (this.arrows[i][j] === 2 && this.resources.used[j] <= this.resources.capacities[j]) {
                    this.arrows[i][j] = 1; // change to within capacity
                }
            }
        }

        // keep as many arrows gray as capacity allows.
        for (let j = 0; j < this.resources.quantity; j++) {
            if (this.resources.used[j] > this.resources.capacities[j]) {
                let grayCount = 0;
                for (let i = 0; i < this.processes.quantity; i++) {
                    if (this.arrows[i][j] === 1) {
                        grayCount++;
                    }
                }

                for (let i = 0; i < this.processes.quantity && grayCount < this.resources.capacities[j]; i++) {
                    if (this.arrows[i][j] === 2) {
                        this.arrows[i][j] = 1;
                        grayCount++;
                    }
                }
            }
        }
    }

    reduce() {
        let reduced = [];
        for (let i = 0; i < this.processes.quantity; i++) {
            // check if red arow
            let hasRed = false;
            for (let j = 0; j < this.resources.quantity; j++) {
                if (this.arrows[i][j] === 2) {
                    hasRed = true;
                    break;
                }
            }

            if (!hasRed) {
                // reduce
                for (let j = 0; j < this.resources.quantity; j++) {
                    if (this.arrows[i][j] > 0) {
                        this.resources.used[j]--;
                        this.arrows[i][j] = 0;
                    }
                }
                reduced.push(i);
            }
        }
        // update
        this.changeAllArrows();
        return {
            reduced
        };
    }
    getGraphState() {
            return {
                arrows: this.arrows,
                used: this.resources.used,
                capacities: this.resources.capacities
            };
    }   
}