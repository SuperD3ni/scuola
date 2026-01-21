package gestioneDati;
public abstract class ListaAstratta<T> {
    protected Node<T> head;

    public ListaAstratta() {
        head = null;
    }

    public void visualizza() {
        Node<T> current = head;
        while (current != null) {
            System.out.print(current.getData() + " ");
            current = current.getNext();
        }
        System.out.println();
    }

    protected T removeFromHead() {
        T data = head.getData();
        head = head.getNext();
        return data;
    }

    public abstract void aggiungi(T data);
    public abstract T estrai();
}