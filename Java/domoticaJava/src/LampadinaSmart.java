public class LampadinaSmart implements DispositivoSmart {
    private boolean stato;
    private double consumo;

    public LampadinaSmart(double consumo) {
        this.stato = false;
        this.consumo = consumo;
    }
    @Override
    public void accendi() {
        stato = true;
        System.out.println("Lampadina accesa.");
    }
    @Override
    public void spegni() {
        stato = false;
        System.out.println("Lampadina spenta.");
    }
    @Override
    public double get_consumo() {
        return stato ? consumo : 0.0;
    }
}
