public class Telecomando extends DispositivoElettronico {
    private int canale, volume;
    public Telecomando(int annoAcquisto, String proprietario){
        super(annoAcquisto, proprietario);
        canale = 0;
        volume = 0;
    }
    public void AumentaCanale(){
        canale++;
    }
    public void DimCanale(){
        canale--;
    }
    public void AumentaVolume(){
        volume++;
    }
    public void DimVolume(){
        volume--;
    }
    public void ImpostaCanale(int c){
        canale = c;
    }
    public void Descrizione(){
        super.Descrizione();
        System.out.println("Canale: " + canale + ", Volume: " + volume);
    }
}

