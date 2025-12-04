public class DispositivoElettronico {
    protected int annoAcquisto;
    protected String proprietario;
    public DispositivoElettronico(int annoAcquisto, String proprietario) {
        this.annoAcquisto = annoAcquisto;
        this.proprietario = proprietario;
    }
    public void Descrizione() {
        System.out.println("Acquistato nel " + annoAcquisto + " da " + proprietario);
    }
}
