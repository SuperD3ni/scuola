public class Albero {
    private Node<String> root;
    private int parsePos;

    public Albero() {
        this.root = null;
        this.parsePos = 0;
    }

    public void populateTree(String[] normalizedPolish) {
        this.parsePos = 0;
        String[] tokens;
        if (normalizedPolish == null) {
            tokens = new String[0];
        } else {
            tokens = normalizedPolish;
        }
        this.root = recursiveInsert(tokens, null);
    }

    public void preorderVisita() {
        preorderVisita(this.root);
    }

    private void preorderVisita(Node<String> currentNode) {
        if (currentNode == null) {
            return;
        }

        System.out.println(currentNode.getData());
        preorderVisita(currentNode.getLeft());
        preorderVisita(currentNode.getRight());
    }

    private Node<String> recursiveInsert(String[] tokens, Node<String> parentNode) {
        if (parsePos >= tokens.length) {
            return null;
        }

        String data = tokens[parsePos++];
        Node<String> currentNode = new Node<>(data);
        currentNode.setParent(parentNode);

        if (isNumber(data)) {
            return currentNode;
        }

        if (isOperator(data)) {
            currentNode.setLeft(recursiveInsert(tokens, currentNode));
            currentNode.setRight(recursiveInsert(tokens, currentNode));
            return currentNode;
        }

        throw new IllegalArgumentException("Token non valido nella notazione polacca: " + data);
    }

    private boolean isOperator(String token) {
        return "+".equals(token) || "-".equals(token) || "*".equals(token) || "/".equals(token);
    }

    private boolean isNumber(String token) {
        if (token == null || token.isEmpty()) {
            return false;
        }

        for (int i = 0; i < token.length(); i++) {
            if (!Character.isDigit(token.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    public Node<String> getRoot() {
        return root;
    }
}