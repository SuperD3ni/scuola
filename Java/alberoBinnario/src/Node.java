public class  Node {
    char data;
    Node left;
    Node right;
    Node parent;
    Node next;

    public Node(char data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    public char getData() {
        return data;
    }
    public void setData(char data) {
        this.data = data;
    }
    public Node getLeft() {
        return left;
    }
    public void setLeft(Node left) {
        this.left = left;
    }
    public Node getRight() {
        return right;
    }
    public void setRight(Node right) {
        this.right = right;
    }
    public Node getParent() {
        return parent;
    }
    public void setParent(Node parent) {
        this.parent = parent;
    }
    public void setNext(Node next){
        this.next = next;
    }
    public Node getNext(Node next){
        return next;
    }
}