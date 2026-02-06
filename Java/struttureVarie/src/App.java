public class App {
    public static void main(String[] args) throws Exception {
        ListaConcatenataBidirezionale list = new ListaConcatenataBidirezionale();
        list.inserimentoInTesta("uno");
        list.inserimentoInMezzo("due");

        System.out.print("Da testa: ");
        list.visualizza();

        System.out.print("Da coda: ");
        list.visualizzaIndietro();

        list.inserimentoIndietro("zero"); // inserisce all'inizio se necessario
        list.inserimentoIndietro("quattro"); // inserisce in coda se necessario

        System.out.print("Dopo inserimenti indietro: ");
        list.visualizza();
    }
}
