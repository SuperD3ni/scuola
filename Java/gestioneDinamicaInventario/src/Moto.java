public class Moto extends Veicolo {
    protected int cilindrata;

    public Moto(String marca, String modello, int prezzo, int cilindrata) {
        super(marca, modello, prezzo);
        this.cilindrata = cilindrata;
    }
    
    public String toString() {
        return super.toString() + ", Cilindrata: " + cilindrata + " cc";
    }
}
