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

    public void sposta() {
        // Controlla tutta la lista e sposta il primo nodo fuori posto
        NodeString p = head;
        while (p != null) {
            // Controlla se il nodo è minore del dopo (dovrebbe stare a sinistra)
            if (p.getPrev() != null && p.getData().compareTo(p.getPrev().getData()) < 0) {
                NodeString prev = p.getPrev();
                
                // Rimuovi p dalla lista
                if (p.getNext() != null) p.getNext().setPrev(prev);
                prev.setNext(p.getNext());
                if (p == tail) tail = prev;
                
                // Inserisci p prima di prev (sposta a sinistra)
                p.setPrev(prev.getPrev());
                p.setNext(prev);
                if (prev.getPrev() != null) prev.getPrev().setNext(p);
                prev.setPrev(p);
                if (p.getPrev() == null) head = p;
                
                return;
            }
            // Controlla se il nodo è maggiore del dopo (dovrebbe stare a destra)
            else if (p.getNext() != null && p.getData().compareTo(p.getNext().getData()) > 0) {
                NodeString next = p.getNext();
                
                // Rimuovi p dalla lista
                if (p.getPrev() != null) p.getPrev().setNext(next);
                next.setPrev(p.getPrev());
                if (p == head) head = next;
                
                // Inserisci p dopo next (sposta a destra)
                p.setNext(next.getNext());
                p.setPrev(next);
                if (next.getNext() != null) next.getNext().setPrev(p);
                next.setNext(p);
                if (p.getNext() == null) tail = p;
                
                return;
            }
            
            p = p.getNext();
        }
    }
    
    public NodeString getHead() { return head; }
    public void setHead(NodeString newHead) { head = newHead; }
    
    public NodeString getTail() { return tail; }
    public void setTail(NodeString newTail) { tail = newTail; }
    
    public void stampaNodi() {
        NodeString current = head;
        while (current != null) {
            System.out.println(current.getData());
            current = current.getNext();
        }
    }
    
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
    
    public boolean isOrdinata() {
        NodeString current = head;
        while (current != null && current.getNext() != null) {
            // Se il nodo corrente è > del successivo, non è ordinata
            if (current.getData().compareTo(current.getNext().getData()) > 0) {
                return false;
            }
            current = current.getNext();
        }
        return true;
    }
}
