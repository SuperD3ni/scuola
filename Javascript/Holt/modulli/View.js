export class GraphView {
    constructor(canvasId, process = 3, resource = 3, resourceCapacities = [1, 1, 1]) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 900;
        this.canvas.height = 620;
        this.checksDiv = document.getElementsByClassName('checks')[0];
        this.baseArrows = [];
        this.currentArrows = [];
        this.process = process;
        this.resource = resource;
        this.resourceCapacities = resourceCapacities;
        this.yPositions = [];
    }

    drawInitial(processes, resources, resourceCapacities) {
        this.process = processes;
        this.resource = resources;
        this.resourceCapacities = resourceCapacities;
        this.baseArrows = [];

        const radius = 30;
        const squareSize = 58;
        const leftColumnX = 210;
        const rightColumnX = 690;
        const topPadding = 130;
        const availableHeight = this.canvas.height - 220;
        const processSpacing = this.process > 1 ? availableHeight / (this.process - 1) : 0;
        const resourceSpacing = this.resource > 1 ? availableHeight / (this.resource - 1) : 0;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#111111';
        this.ctx.font = '700 22px Segoe UI';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('PROCESSI', 66, 62);
        this.ctx.fillText('RISORSE', 556, 62);


        for (let p = 0; p < this.process; p++) {
            const processY = topPadding + p * processSpacing;
            this.yPositions.push(processY);

            for (let r = 0; r < this.resource; r++) {
                const resourceY = topPadding + r * resourceSpacing;
                const startX = leftColumnX + radius;
                const endX = rightColumnX - squareSize / 2;

                this.drawArrow(startX, processY, endX, resourceY);
                this.baseArrows.push({ startX, startY: processY, endX, endY: resourceY, colour: '#707070', lineWidth: 2, arrowHeadLength: 11 });
            }
        }

        for (let i = 0; i < this.process; i++) {
            const y = topPadding + i * processSpacing;

            this.ctx.beginPath();
            this.ctx.arc(leftColumnX, y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = '#4a90e2';
            this.ctx.fill();
            this.ctx.strokeStyle = '#2c5f99';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '600 17px Segoe UI';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`P${i + 1}`, leftColumnX, y);
        }

        for (let i = 0; i < this.resource; i++) {
            const yCenter = topPadding + i * resourceSpacing;
            const x = rightColumnX - squareSize / 2;
            const y = yCenter - squareSize / 2;

            this.ctx.fillStyle = '#f2994a';
            this.ctx.fillRect(x, y, squareSize, squareSize);
            this.ctx.strokeStyle = '#b06a2f';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x, y, squareSize, squareSize);

            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '600 14px Segoe UI';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`R${i + 1} (0/${this.resourceCapacities[i]})`, rightColumnX, yCenter);
        }
        for (let i = 0; i < this.process; i++) {
            const processCheckboxes = document.createElement('div');
            processCheckboxes.className = 'process-checkboxes';
            processCheckboxes.textContent = `P${i + 1}: `;
            for (let j = 0; j < this.resource; j++) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `${i + 1}-${j + 1}`;
                checkbox.className = 'checkbox';
                processCheckboxes.appendChild(checkbox);
                const label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.textContent = `R${j + 1}`;
                processCheckboxes.appendChild(label);
            }
            this.checksDiv.appendChild(processCheckboxes);
        } 
        this.hideArrows();
        console.log(this.yPositions);
    }

    drawArrow(startX, startY, endX, endY, colour = '#707070', lineWidth = 2, arrowHeadLength = 11) {
        const arrowAngle = Math.PI / 7;
        const angle = Math.atan2(endY - startY, endX - startX);

        this.ctx.strokeStyle = colour;
        this.ctx.lineWidth = lineWidth;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(startX+10, startY);
        this.ctx.lineTo(endX-10, endY);
        this.ctx.stroke();

        this.ctx.fillStyle = colour;
        this.ctx.beginPath();
        this.ctx.moveTo(endX-10, endY);
        this.ctx.lineTo(
            endX - 10 - arrowHeadLength * Math.cos(angle - arrowAngle),
            endY - arrowHeadLength * Math.sin(angle - arrowAngle)
        );
        this.ctx.lineTo(
            endX - 10 - arrowHeadLength * Math.cos(angle + arrowAngle),
            endY - arrowHeadLength * Math.sin(angle + arrowAngle)
        );
        this.ctx.closePath();
        this.ctx.fill();
    }

    hideArrows() {
        this.baseArrows.forEach(arrow => {
            this.drawArrow(arrow.startX, arrow.startY, arrow.endX, arrow.endY, '#ffffff', 6, 16);
        });
    }

    changeGraph(processIndex, resourceIndex, capacityUsed, overCapacity = false, add = true) {
        const arrowIndex = (processIndex - 1) * this.resource + (resourceIndex - 1);
        this.baseArrows[arrowIndex].colour = overCapacity ? '#ff0000' : '#707070';
        const arrow = this.baseArrows[arrowIndex];
        this.changeResourcesCapacity(resourceIndex, capacityUsed);
        if (add === true) {
            console.log(arrow);
            this.currentArrows.push(arrow);
            this.drawArrow(arrow.startX, arrow.startY, arrow.endX, arrow.endY, arrow.colour, 4, 14);
        } else {
            console.log(arrow);
            const index = this.currentArrows.indexOf(arrow);
            if (index > -1) {
                this.currentArrows.splice(index, 1);
                this.hideArrows();
                this.drawArrows();
            }
        }
    }

    drawArrows() {
        this.currentArrows.forEach(arrow => {
            this.drawArrow(arrow.startX, arrow.startY, arrow.endX, arrow.endY, arrow.colour, 4, 14);
        });
    }

    changeResourcesCapacity(processIndex, newQuantity) {
            const resourceY = this.yPositions[processIndex - 1];
            const x = 690 - 58 / 2;
            const y = resourceY - 58 / 2;
            this.ctx.fillStyle = '#f2994a';
            this.ctx.fillRect(x, y, 58, 58);
            this.ctx.strokeStyle = '#b06a2f';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x, y, 58, 58);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '600 14px Segoe UI';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`R${processIndex} (${newQuantity}/${this.resourceCapacities[processIndex - 1]})`, 690, resourceY);
    }
}
