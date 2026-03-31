public class App {
    public static void main(String[] args) throws Exception {
        Albero albero = new Albero();
        String input = "2+2*(2+2)";
        String normalizedPolish = new Calcolatore().toPolishNotation(input);
        albero.populateTree(normalizedPolish);
        System.out.println("Preorder visita:");
        albero.preorderVisita();

        Calcolatore calcolatore = new Calcolatore();
        int finalResult = calcolatore.calcola(albero.getRoot());
        System.out.println("Final Result: " + finalResult);
    }
}