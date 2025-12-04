public class Main {
    public static void main(String[] args) throws Exception {
        DispositivoElettronico d = new DispositivoElettronico(2019, "Giovanni Verdi");
        d.Descrizione();

        Telecomando t = new Telecomando(2020, "Mario Rossi");
        t.AumentaCanale();
        t.AumentaCanale();
        t.AumentaVolume();
        t.Descrizione();

        Telefono tel = new Telefono(2021, "Luigi Bianchi", 100);
        tel.Usa(10);
        System.out.println("Livello batteria: " + tel.getLivBatteria());
    }
}
