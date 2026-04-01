public class List {
    NodeList head;
    NodeList tail;  
    public List() {
        this.head = null;
        this.tail = null;
    }
    public void addTail(String data) {
        NodeList newNode = new NodeList(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    public void removeHead() {
        if (this.head == null) {
            return;
        }
        this.head = this.head.next;
    }
    public void removeTail() {
        if (this.head == null) {
            return;
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        NodeList current = this.head;
        while (current.next != this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }
    public void remove(String data) {
        if (this.head == null) {
            return;
        }
        if (this.head.data.equals(data)) {
            this.head = this.head.next;
            return;
        }
        NodeList current = this.head;
        while (current.next != null) {
            if (current.next.data.equals(data)) {
                current.next = current.next.next;
                if (current.next == null) {
                    this.tail = current;
                }
                return;
            }
            current = current.next;
        }
    }
    public void addHead(String data) {
        NodeList newNode = new NodeList(data);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail == null) {
            this.tail = newNode;
        }
    }
    public void addOrder(String data) {
        NodeList newNode = new NodeList(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        if (this.head.data.compareTo(data) > 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        NodeList current = this.head;
        while (current.next != null && current.next.data.compareTo(data) < 0) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        if (current.next == null) {
            this.tail = newNode;
        }
    }
}
