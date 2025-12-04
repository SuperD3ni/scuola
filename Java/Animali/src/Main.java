public class Main {
    public static void main(String[] args) throws Exception {
        Animale animale = new Animale("AnimaleGenerico", 5);
        System.out.println(animale.descrizione());
        animale.mangia();
        animale.dormi();

        Cane cane = new Cane("Fido", 3, "Labrador");
        System.out.println(cane.descrizione());
        cane.mangia();
        cane.dormi();
        cane.abbaia();
        cane.scodinzola();

        Gatto gatto = new Gatto("Micio", 2, "Nero");
        System.out.println(gatto.descrizione());
        gatto.mangia();
        gatto.dormi();
        gatto.miagola();
        gatto.faLeFusa();
    }
}
