public class Rettangolo extends Distanza2 {
    public Rettangolo(double x1, double y1, double x2, double y2) {
        super(x1, y1, x2, y2);
    }
    public void calcolaArea() {
        System.out.println("Area del rettangolo: " + (Math.abs(x2 - x1) * Math.abs(y2 - y1)));
    }
}
