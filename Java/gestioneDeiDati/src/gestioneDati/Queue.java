package gestioneDati;
public class Queue<T> extends ListaAstratta<T> {
    private Node<T> tail;

    public Queue() {
        super();
        tail = null;
    }

    public void aggiungi(T data) {
        Node<T> n = new Node<T>(data);
        if (tail != null) {
            tail.setNext(n);
        }
        tail = n;
        if (head == null) {
            head = n;
        }
    }

    public T estrai() {
        T data = removeFromHead();
        if (head == null) {
            tail = null;
        } return data;
    }
}