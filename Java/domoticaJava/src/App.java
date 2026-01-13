public class App {
    public static void main(String[] args) throws Exception {
        LampadinaDimmerabile l = new LampadinaDimmerabile(10.5);
        l.accendi();
        l.accendi(75);
        // Su java funziona perche l'overloading e' permesso

        VecchioVentilatore v = new VecchioVentilatore();
        v.accendi();

        DispositivoSmart[] dispositivi = new DispositivoSmart[2];
        dispositivi[0] = l;
        // dispositivi[1] = v; // Errore di compilazione, VecchioVentilatore non puo essere considerato un DispositivoSmart
    }
}
