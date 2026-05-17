public class CartaCredito implements FormaPagamento {
    int massimale;
    String codiceContoCorrente;
    int speseMensiliEffettuate;
    public CartaCredito(int massimale, String codiceContoCorrente) {
        this.massimale = massimale;
        this.codiceContoCorrente = codiceContoCorrente;
        this.speseMensiliEffettuate = 0;
    }
    public int getSpeseMensiliEffettuate() {
        return this.speseMensiliEffettuate;
    }
    public boolean accredita(int eur){
        if (this.speseMensiliEffettuate + eur > this.massimale){
            return false;
        }else{
            this.speseMensiliEffettuate += eur;
            return true;
        }
    }
}
