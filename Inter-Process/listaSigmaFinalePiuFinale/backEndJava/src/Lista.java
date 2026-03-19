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
            NodeString current = head;

            for (int i = 0; i < index - 1; i++) {
                current = current.getNext();
            }
            NodeString p = current.getNext();
            n.setNext(p);
            current.setNext(n);

            size++;
        }
    }

    public NodeString getHead() { return head; }

    public void rimuoviNodo(String nome) {
        NodeString currentBefore = null;
        NodeString current = head;
        while (current != null) {
            if (current.getData().equals(nome)) {
                NodeString next = current.getNext();

                if (currentBefore != null) {
                    currentBefore.setNext(next);
                } else {
                    head = next;
                }

                if (next == null) {
                    tail = currentBefore;
                }

                size--;
                current = null;
            } else {
                currentBefore = current;
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
