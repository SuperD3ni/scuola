public class App {
    public static void main(String[] args) throws Exception {
        Tree tree = new Tree();
        tree.postOrder();
        System.out.println();
        tree.preOrder();
        System.out.println();
        tree.inOrder();
    }
}
