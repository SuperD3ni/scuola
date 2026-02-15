export class GraphModel {
    constructor(view) {
        this.view = view;
        this.processes = 3;
        this.systems = 3;
    }
    drawInitial(){
        this.view.drawInitial(this.processes, this.systems);
    }
}