public class Auto extends Veicolo {
    protected int numeroPorte;

    public Auto(String marca, String modello, int prezzo, int numeroPorte) {
        super(marca, modello, prezzo);
        this.numeroPorte = numeroPorte;
    }

    public String toString() {
        return super.toString() + ", Numero Porte: " + numeroPorte;
    }
}
