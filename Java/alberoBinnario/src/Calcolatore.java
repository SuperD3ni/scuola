public class Calcolatore {
    public int calcola(Node<Character> root) {
        Stack<Integer> stack = new Stack<Integer>();
        calcoloRicorsivo(root, stack);
        return stack.pop();
    }

    private void calcoloRicorsivo(Node<Character> currentNode, Stack<Integer> stack) {
        if (currentNode == null) {
            return;
        }

        calcoloRicorsivo(currentNode.getLeft(), stack);
        calcoloRicorsivo(currentNode.getRight(), stack);

        if (Character.isDigit(currentNode.getData())) {
            stack.push(Character.getNumericValue(currentNode.getData()));
        } else if (currentNode.getLeft() != null && currentNode.getRight() != null) {
            int right = stack.pop();
            int left = stack.pop();
            char operator = currentNode.getData();
            int result = 0;

            switch (operator) {
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    result = left / right;
                    break;
                default:
                    throw new IllegalArgumentException("Operatore non supportato: " + operator);
            }
            stack.push(result);
        }
    }
}