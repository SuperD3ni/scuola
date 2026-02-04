public class Coda<T> extends ListaAstratta<T> {
    private Nodo<T> tail;

    public Coda() {
        super();
        tail = null;
    }

    

    public void inserisci(T data) {
        Nodo<T> n = new Nodo<T>(data);
        if (tail != null) {
            tail.setNext(n);
        }
        tail = n;
        if (head == null) {
            head = n;
        }
    }

    public T estrai() {
        T data = rimuoviDallaTesta();
        if (head == null) {
            tail = null;
        } return data;
    }

    public T leggi(int index) {
        Nodo<T> current = head;
        int count = 0;
        while (current != null) {
            if (count == index) {
                return current.getData();
            }
            count++;
            current = current.getNext();
        }
        return null; 
    }

    public Nodo<T> getHead() {
        return head;
    }
}