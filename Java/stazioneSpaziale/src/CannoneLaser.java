public class CannoneLaser implements ModuloSpaziale{
    private int danno;
    public CannoneLaser(int danno) {
        this.danno = danno;
    }
    @Override
    public void eseguiDiagnostica() {
        System.out.println("Cannon laser online con danno di "+ danno);
    }
    @Override
    public int getConsumoEnergetico() {
        return danno * 10000;
    }
    public void fuoco() {
        System.out.println(" Laser sparato.");
    }
}
