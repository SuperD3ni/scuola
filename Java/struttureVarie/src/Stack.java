public class Stack <T>{
    Node<T> top;

    public Stack() {
        this.top = null;
    }
    
    public void push(T data) {
        Node<T> n = new Node<T>(data);
        if (top != null){
            top.setNext(n);
        } top = n;
    }

    public T pop() {
        if (top == null){
            return null;
        } else {
            T data = top.getData();
            top = top.getNext();
            return data;
        }
    }

    public T peek(){
        if (top == null){
            return null;
        } else {
            return top.getData();
        }
    }

}
