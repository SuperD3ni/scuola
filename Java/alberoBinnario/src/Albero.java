public class Albero {
    private Node<Character> root;
    private int parsePos;

    public Albero() {
        this.root = null;
        this.parsePos = 0;
    }

    public void populateTree(String normalizedPolish) {
        this.parsePos = 0;
        this.root = recursiveInsert(normalizedPolish, null);
    }

    public void preorderVisita() {
        preorderVisita(this.root);
    }

    private void preorderVisita(Node<Character> currentNode) {
        if (currentNode == null) {
            return;
        }

        System.out.println(currentNode.getData());
        preorderVisita(currentNode.getLeft());
        preorderVisita(currentNode.getRight());
    }

    private Node<Character> recursiveInsert(String normalizedPolish, Node<Character> parentNode) {
        if (parsePos >= normalizedPolish.length()) {
            return null;
        }

        char data = normalizedPolish.charAt(parsePos++);
        Node<Character> currentNode = new Node<Character>(data);
        currentNode.setParent(parentNode);

        if (Character.isDigit(data)) {
            // leaf node: number, no children
            return currentNode;
        }

        if (data == '+' || data == '-' || data == '*' || data == '/') {
            currentNode.setLeft(recursiveInsert(normalizedPolish, currentNode));
            currentNode.setRight(recursiveInsert(normalizedPolish, currentNode));
            return currentNode;
        }

        // invalid token: terminating branch
        return null;
    }

    public Node<Character> getRoot() {
        return root;
    }
}