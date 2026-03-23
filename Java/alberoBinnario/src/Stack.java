public class Stack {
    private Node head;

    public void push(char data) {
        Node n = new Node(data);
        n.setNext(head);
        head = n;
    }

    public char pop() {
        char data = head.getData();
        head = head.getNext(head);
        return data;
    }
}
