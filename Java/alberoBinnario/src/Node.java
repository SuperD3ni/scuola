public class Node<T> {
    T data;
    Node<T> left;
    Node<T> right;
    Node<T> parent;
    Node<T> next;

    public Node(T data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }
    public Node<T> getLeft() {
        return left;
    }
    public void setLeft(Node<T> left) {
        this.left = left;
    }
    public Node<T> getRight() {
        return right;
    }
    public void setRight(Node<T> right) {
        this.right = right;
    }
    public Node<T> getParent() {
        return parent;
    }
    public void setParent(Node<T> parent) {
        this.parent = parent;
    }
    public void setNext(Node<T> next){
        this.next = next;
    }
    public Node<T> getNext(){
        return this.next;
    }
}