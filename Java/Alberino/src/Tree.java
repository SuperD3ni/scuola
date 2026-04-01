public class Tree {
    Node root;
    public Tree() {
        this.root = new Node('u');
        this.root.left = new Node('r');
        this.root.right = new Node('i');
        this.root.left.left = new Node('s');
        this.root.left.right = new Node('e');
        this.root.right.left = new Node('g');
    }
    public void postOrder() {
        postOrder(this.root);
    }
    private void postOrder(Node node) {
        if (node == null) {
            return;
        }
        postOrder(node.left);
        postOrder(node.right);
        System.out.print(node.data + " ");
    }
    public void preOrder() {
        preOrder(this.root);
    }
    private void preOrder(Node node) {
        if (node == null) {
            return;
        }
        System.out.print(node.data + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
    public void inOrder() {
        inOrder(this.root);
    }
    private void inOrder(Node node) {
        if (node == null) {
            return;
        }
        inOrder(node.left);
        System.out.print(node.data + " ");
        inOrder(node.right);
    }
}
