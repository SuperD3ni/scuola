public class Cane extends Animale {
    private String razza;
    public Cane(String nome, int eta, String razza) {
        super(nome, eta);
        this.razza = razza;
    }
    public void abbaia(){
        System.out.println("Il cane sta abbaiando");
    }
    public void scodinzola(){
        System.out.println("Il cane sta scodinzolando");
    }
    public String descrizione(){
        return super.descrizione() + ", Razza: " + this.razza;
    }
}