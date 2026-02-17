public class Lista {
    private NodeString head;
    private NodeString tail;
    private int size;

    public Lista() {
        head = null;
        tail = null;
        size = 0;
    }

    public int getSize() { return size; }

    public void inserimentoInTesta(String value) {
        NodeString n = new NodeString(value);
        if (head == null) {
            head = tail = n;
        } else {
            n.setNext(head);
            head.setPrev(n);
            head = n;
        }
        size++;
    }

    public void inserimentoInCoda(String value) {
        NodeString n = new NodeString(value);
        if (tail == null) {
            head = tail = n;
        } else {
            tail.setNext(n);
            n.setPrev(tail);
            tail = n;
        }
        size++;
    }

    public void inserimentoPerIndice(int index, String value) {
        if (index < 0 || index > size) {
            return;
        }
        if (index == 0) {
            inserimentoInTesta(value);
        }
        else if (index == size) {
            inserimentoInCoda(value);
        }
        else {
            NodeString n = new NodeString(value);
            NodeString p = head;

            for (int i = 0; i < index; i++) {
                p = p.getNext();
            }
            NodeString prev = p.getPrev();

            n.setNext(p);
            n.setPrev(prev);

            prev.setNext(n);
            p.setPrev(n);

            size++;
        }
    }

    public void inserimentoIndietroPerIndice(int index, String value) {
        if (index < 0 || index > size) {
            return;
        }
        if (index == 0) {
            inserimentoInCoda(value);
        }
        else if (index == size) {
            inserimentoInTesta(value);
        }
        else {
            NodeString n = new NodeString(value);
            NodeString p = tail;
            for (int i = 0; i < index; i++) {
                p = p.getPrev();
            }
            NodeString successivo = p.getNext();

            n.setNext(successivo);
            n.setPrev(p);

            if (successivo != null) {
                successivo.setPrev(n);
            }
            p.setNext(n);

            size++;
        }
    }

    public NodeString getHead() { return head; }

    public void rimuoviNodo(String nome) {
        NodeString current = head;
        while (current != null) {
            if (current.getData().equals(nome)) {
                NodeString prev = current.getPrev();
                NodeString next = current.getNext();

                if (prev != null) {
                    prev.setNext(next);
                } else {
                    head = next;
                }

                if (next != null) {
                    next.setPrev(prev);
                } else {
                    tail = prev;
                }

                current = null;
            } else {
                current = current.getNext();
            }
        }
    }

    public void stampaNodi() {
        NodeString current = head;
        while (current != null) {
            System.out.println(current.getData());
            current = current.getNext();
        }
    }
}
