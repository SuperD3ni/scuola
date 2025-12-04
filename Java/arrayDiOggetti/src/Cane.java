public class Cane extends Animale {
    
    private String razza;

    public Cane(String nome, int eta, String razza) {
        super(nome, eta);
        this.razza = razza;
    }

    public void abbaia() {
        System.out.println(nome + " fa BAU BAU!");
    }

    public String toString() {
        return super.toString() + ", Razza: " + razza;
    }
    
}
