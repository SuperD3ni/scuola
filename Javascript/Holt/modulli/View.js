export class GraphView {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 500;
    }

    drawInitial(process, resource) {
        const radius = 25;
        const squareSize = 50;
        const leftColumnX = 100;  // Posizione X per procesi
        const rightColumnX = 400; // Posizione X per risorse
        const startY = 80;        // Partenza verticale
        const spacingY = 130;     // Spazio tra pezi 

//procesi
        for (let i = 0; i < process; i++) {
            const y = startY + i * spacingY;
            
            this.ctx.beginPath();
            this.ctx.arc(leftColumnX, y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = '#3498db';
            this.ctx.fill();
            this.ctx.strokeStyle = '#2980b9';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

//tsto
            this.ctx.fillStyle = '#ffffff';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`P${i + 1}`, leftColumnX, y);
        }

//risorse
        for (let i = 0; i < resource; i++) {
            const x = rightColumnX - squareSize / 2;
            const y = startY + i * spacingY - squareSize / 2;


            this.ctx.fillStyle = '#e67e22';
            this.ctx.fillRect(x, y, squareSize, squareSize);
            this.ctx.strokeStyle = '#d35400';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x, y, squareSize, squareSize);

//testo
            this.ctx.fillStyle = '#ffffff';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText(`R${i + 1}`, rightColumnX, y + 18);
        }


        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(5, 5, this.canvas.width - 10, this.canvas.height - 10);
    }
}