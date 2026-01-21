import gestioneDati.ListaAstratta;
import gestioneDati.Queue;
import gestioneDati.Stack;

public class App {
    public static void main(String[] args) throws Exception {
        ListaAstratta<Integer> stack = new Stack<>();
        ListaAstratta<Integer> queue = new Queue<>();

        for (int i = 1; i <= 5; i++) {
            stack.aggiungi(i);
            queue.aggiungi(i);
        }

        System.out.println("Stack:");
        stack.visualizza();
        System.out.println("Queue:");
        queue.visualizza();

        System.out.println("LIFO:");
        for (int i = 0; i < 5; i++) {
            System.out.print(stack.estrai() + " ");
        }
        System.out.println();

        System.out.println("FIFO:");
        for (int i = 0; i < 5; i++) {
            System.out.print(queue.estrai() + " ");
        }
        System.out.println();
    }
}