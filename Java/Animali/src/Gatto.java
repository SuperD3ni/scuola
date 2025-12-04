public class Gatto extends Animale {
    private String colorePelo;
    public Gatto(String nome, int eta, String colorePelo) {
        super(nome, eta);
        this.colorePelo = colorePelo;
    }
    public void miagola(){
        System.out.println("Il gatto sta miagolando");
    }
    public void faLeFusa(){
        System.out.println("Il gatto sta facendo le fusa");
    }
    public String descrizione(){
        return super.descrizione() + ", Colore pelo: " + this.colorePelo;
    }
}