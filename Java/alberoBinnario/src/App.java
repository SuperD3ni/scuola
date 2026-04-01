public class App {
    public static void main(String[] args) throws Exception {
        Albero albero = new Albero();
        String input = "2+3+6*(5+6-4+3+2+4+7+4+2+7+8+4)";
        String normalizedPolish = new Calcolatore().toPolishNotation(input);
        albero.populateTree(normalizedPolish);
        System.out.println("Preorder visita:");
        albero.preorderVisita();

        Calcolatore calcolatore = new Calcolatore();
        int finalResult = calcolatore.calcola(albero.getRoot());
        System.out.println("Final Result: " + finalResult);
    }
}