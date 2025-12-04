public class Telefono extends DispositivoElettronico {
    private int livBatteria;
    public Telefono(int annoAcquisto, String proprietario, int livBatteria) {
        super(annoAcquisto, proprietario);
        this.livBatteria = livBatteria;
    }
    public void Usa(int min) {
        for (int i = 1; i < min+1; i++) {
            if (livBatteria > 0) {
                livBatteria -= i*i;
            }
        }
        if (livBatteria <= 0) {
            livBatteria = 0;
            System.out.println("Batteria scarica!");
        }
    }
    public int getLivBatteria() {
        return livBatteria;
    }
}
