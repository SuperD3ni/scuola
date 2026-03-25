public class Stack<T> {
    private Node<T> head;

    public void push(T data) {
        Node<T> n = new Node<T>(data);
        n.setNext(head);
        head = n;
    }

    public T pop() {
        if (head == null) {
            throw new IllegalStateException("Stack is empty");
        }
        T data = head.getData();
        head = head.getNext();
        return data;
    }
}
