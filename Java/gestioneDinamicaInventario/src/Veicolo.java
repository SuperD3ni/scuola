public class Veicolo {
    protected String marca, modello;
    protected int prezzo;
    public Veicolo(String marca, String modello, int prezzo) {
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
    }
    
    public String toString() {
        return "Marca: " + marca + ", Modello: " + modello + ", Prezzo: " + prezzo + " EUR";
    }

}
