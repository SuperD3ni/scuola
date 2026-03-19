public class App {
    public static void main(String[] args) throws Exception {
        Albero albero = new Albero();
        System.out.println("Inserisci i nodi in preorder (usa '.' per null), esempio: A B . . C . .");
        albero.populateTree();
        System.out.println("Preorder visita:");
        albero.preorderVisita();
    }
}
