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
                if (toDraw && toDraw[2]) {
                    this.view.changeArrow(toDraw[0], toDraw[1]);
                } else if (toDraw && !toDraw[2]) {
                    console.log('Checkbox unchecked');
                    this.view.changeArrow(toDraw[0], toDraw[1], false);
                } else {
                    console.error('Invalid checkbox event data:', toDraw);
                }
            })
        });
    }

    drawInitial() {
        const { processes, resources } = this.model.getInitialGraphSize();
        this.view.drawInitial(processes, resources);
    }

}
