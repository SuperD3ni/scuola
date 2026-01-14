public class SerraIdroponica implements ModuloSpaziale {
    public SerraIdroponica() {
    }
    @Override
    public void eseguiDiagnostica() {
        System.out.println("Serra idroponica attiva");
    }
    @Override
    public int getConsumoEnergetico() {
        return 5000;
    }
}
