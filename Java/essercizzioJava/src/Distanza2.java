public class Distanza2 extends Punti2 {
    public Distanza2(double x1, double y1, double x2, double y2) {
        super(x1, y1, x2, y2);
    }

    public double calcolaDistanza() {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
}