package gestioneDati;
public class Stack<T> extends ListaAstratta<T> {
    public void aggiungi(T data) {
        Node<T> n = new Node<T>(data);
        n.setNext(head);
        head = n;
    }

    public T estrai() {
        return removeFromHead();
    }
}