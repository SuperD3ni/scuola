public class MotoreIperluce implements ModuloSpaziale {
    private int potenza;
    public MotoreIperluce(int potenza) {
        this.potenza = potenza;
    }
    @Override
    public void eseguiDiagnostica() {
        System.out.println("Motore online al "+ potenza +"%");
    }
    @Override
    public int getConsumoEnergetico() {
        return potenza * 10000;
    }
    public void saltoNellIperspazio() {
        System.out.println(">>> SALTO ATTIVATO!");
    }
}
