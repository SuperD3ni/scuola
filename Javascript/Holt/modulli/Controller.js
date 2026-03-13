export class GraphController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.drawInitial();
        const checkboxes = document.getElementsByClassName('checkbox');
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {;
                const toDraw = this.model.checked(event);
                if (toDraw && toDraw[4]) {
                    this.view.changeGraph(toDraw[0], toDraw[1], toDraw[2], toDraw[3], true);
                } else if (toDraw && !toDraw[4]) {
                    console.log('Checkbox unchecked');
                    this.view.changeGraph(toDraw[0], toDraw[1], toDraw[2], toDraw[3], false);
                } else {
                    console.error('Invalid checkbox event data:', toDraw);
                }
            })
        });
    }

    drawInitial() {
        const { processes, resources, resourceCapacities } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources, resourceCapacities);
    }

}
