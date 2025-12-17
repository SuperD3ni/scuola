public class Main {
    public static void main(String[] args) throws Exception {
        Distanza2 d1= new Distanza2(1, 2, 4, 6);
        System.out.println("Distanza tra i punti: " + d1.calcolaDistanza());
        Distanza2 d2 = new Distanza2(1, 2, 4, 6);
        System.out.println("Distanza tra i punti: " + d2.calcolaDistanza());

        Rettangolo r = new Rettangolo(1, 2, 4, 6);
        r.calcolaArea();
    }
}