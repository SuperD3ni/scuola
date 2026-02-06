public class ListaConcatenataBidirezionale {
    private NodeString head;
    private NodeString tail;
    private int size;

    public ListaConcatenataBidirezionale() {
        head = null;
        tail = null;
        size = 0;
    }

    public int size() { return size; }

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

    public void inserimentoInMezzo(String value) {
        NodeString n = new NodeString(value);
        if (head != null && value.compareTo(head.getData()) > 0) {
            NodeString p = head;
            while (p.getNext() != null && value.compareTo(p.getNext().getData()) > 0) {
                p = p.getNext();
            }
            n.setNext(p.getNext());
            if (p.getNext() != null) p.getNext().setPrev(n);
            p.setNext(n);
            n.setPrev(p);
            if (n.getNext() == null) tail = n;
        } else {
            n.setNext(head);
            if (head != null) head.setPrev(n);
            head = n;
            if (tail == null) tail = n;
        }
        size++;
    }

    public void inserimentoIndietro(String value) {
        NodeString n = new NodeString(value);
        if (head == null) {
            head = tail = n;
            size++;
            return;
        }
        NodeString p = tail;
        while (p != null && p.getData().compareTo(value) >= 0) {
            p = p.getPrev();
        }
        if (p == null) {
            // inserisci in testa
            n.setNext(head);
            head.setPrev(n);
            head = n;
        } else {
            // inserisci dopo p
            n.setNext(p.getNext());
            n.setPrev(p);
            if (p.getNext() != null) p.getNext().setPrev(n);
            p.setNext(n);
            if (n.getNext() == null) tail = n;
        }
        size++;
    }

    public void visualizza() {
        NodeString p = head;
        while (p != null) {
            System.out.print(p.getData());
            p = p.getNext();
        }
        System.out.println();
    }

    public void visualizzaIndietro() {
        NodeString p = tail;
        while (p != null) {
            System.out.print(p.getData());
            p = p.getPrev();
        }
        System.out.println();
    }

}
