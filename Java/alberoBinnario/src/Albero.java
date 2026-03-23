import java.util.Scanner;

public class Albero {
    private Node root;
    private final Scanner scanner;
    public Albero() {
        this.root = null;
        this.scanner = new Scanner(System.in);
    }
    public void populateTree() {
        this.root = recursiveInsert(null);
    }

    public void preorderVisita() {
        preorderVisita(this.root);
    }

    private void preorderVisita(Node currentNode) {
        if (currentNode == null) {
            return;
        }

        if (currentNode.getData() == '.') {
            System.out.println('.');
            return;
        }

        System.out.println(currentNode.getData());
        preorderVisita(currentNode.getLeft());
        preorderVisita(currentNode.getRight());
    }

    private Node recursiveInsert(Node parentNode) {
        char data = scanner.next().charAt(0);
        if (data == '.') {
            Node nullNode = new Node('.');
            nullNode.setParent(parentNode);
            return nullNode;
        }

        Node currentNode = new Node(data);
        currentNode.setParent(parentNode);

        currentNode.setLeft(recursiveInsert(currentNode));
        currentNode.setRight(recursiveInsert(currentNode));

        return currentNode;
    }

    public void calcolo(){
        Stack stack = new Stack();
        calcoloRicorsivo(this.root, stack);
    }
    private void calcoloRicorsivo(Node currentNode, Stack stack){
        if (currentNode == null) {
            return;
        }
    }
}