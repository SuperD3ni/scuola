public class App {
    public static void main(String[] args) throws Exception {
        Animale[] animali = new Animale[3];
        animali[0] = new Cane("Fido", 3, "Labrador");
        animali[1] = new Animale("Whiskers", 2);
        animali[2] = new Animale("Tweety", 1);

        for (int i=0; i < animali.length; i++) {
            System.out.println(animali[i]);
            animali[i].mangia();
            if (animali[i] instanceof Cane) {
                System.out.println("È un cane");
                ((Cane)animali[i]).abbaia();
            }
        }
    }
}
