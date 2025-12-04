public class AutoSportiva extends Auto {
    protected int potenzaCV;

    public AutoSportiva(String marca, String modello, int prezzo, int numeroPorte, int potenzaCV) {
        super(marca, modello, prezzo, numeroPorte);
        this.potenzaCV = potenzaCV;
    }

    public String toString() {
        return super.toString() + ", Potenza: " + potenzaCV + " CV";
    }
}
