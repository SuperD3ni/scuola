public class App {
    public static void main(String[] args) throws Exception {
        if (args.length == 0) {
            System.out.println("provide an expression as argument");
            return;
        } else {
            String expression = args[0];
            Calcolatore calcolatore = new Calcolatore();
            String[] polishNotation = calcolatore.toPolishNotation(expression);

            Albero albero = new Albero();
            albero.populateTree(polishNotation);
            int result = calcolatore.calcola(albero.getRoot());
            System.out.println(result);
        }
    }
}
