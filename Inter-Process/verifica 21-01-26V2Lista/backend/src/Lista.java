public class Lista<T> extends ListaAstratta<T> {
    private Nodo<T> tail;

    public Lista() {
        super();
        tail = null;
    }

    

    public void inserisci(T data) {
        Nodo<T> n = new Nodo<T>(data);
        // insert in order by string representation
        if (head == null) {
            head = n;
            tail = n;
            return;
        }
        String sData = data == null ? "" : data.toString();
        // if should be before head
        String headData = head.getData() == null ? "" : head.getData().toString();
        if (sData.compareTo(headData) <= 0) {
            n.setNext(head);
            head = n;
            return;
        }
        Nodo<T> current = head;
        while (current.getNext() != null) {
            String nextData = current.getNext().getData() == null ? "" : current.getNext().getData().toString();
            if (sData.compareTo(nextData) <= 0) {
                n.setNext(current.getNext());
                current.setNext(n);
                return;
            }
            current = current.getNext();
        }
        // insert at end
        current.setNext(n);
        tail = n;
    }

    public T estrai(T data) {
        if (head == null) return null;
        Nodo<T> current = head;
        Nodo<T> prev = null;
        String target = data == null ? "" : data.toString();
        while (current != null) {
            String curData = current.getData() == null ? "" : current.getData().toString();
            if (curData.equals(target)) {
                // remove current
                if (prev == null) {
                    // removing head
                    head = current.getNext();
                    if (head == null) tail = null;
                } else {
                    prev.setNext(current.getNext());
                    if (current.getNext() == null) {
                        // removed tail
                        tail = prev;
                    }
                }
                return current.getData();
            }
            prev = current;
            current = current.getNext();
        }
        return null;
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