public class LampadinaDimmerabile extends LampadinaSmart {
    private int intensita;

    public LampadinaDimmerabile(double consumo) {
        super(consumo);
    }
    public void accendi(int intensita) {
        super.accendi();
        this.intensita = intensita;
        System.out.println("Lampadina dimmerabile accesa con intensita: " + intensita);
    }
}
