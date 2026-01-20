public class Queue <T>{
    Node<T> head; //rm
    Node<T> tail; //add

    public void enqueue(T data) {
        Node<T> n = new Node<T>(data);
        if (tail != null){
            tail.setNext(n);
        } tail = n;

        if (head == null){
            head = n;
        }
    }

    public T dequeue(){
        if (head != null){
            T data = head.getData();
            head = head.getNext();
            return data;
        } else {
            return null;
        }
    }
}
