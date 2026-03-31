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
    public String toPolishNotation(String string) {
        char[] inverted = new char[string.length()];
        for (int i = 0; i < string.length(); i++) {
            char c = string.charAt(string.length() - 1 - i);
            if (c == '(') {
                inverted[i] = ')';
            } else if (c == ')') {
                inverted[i] = '(';
            } else {
                inverted[i] = c;
            }
        }
        
        Stack<Character> stack = new Stack<Character>();
        String intermediateResult = "";

        for (int i = 0; i < inverted.length; i++) {
            char c = inverted[i];

            if (Character.isDigit(c)) {
                intermediateResult += c;
            } 
            else if (c == '(') {
                stack.push(c);
            } 
            else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    intermediateResult += stack.pop();
                }
                if (!stack.isEmpty()) stack.pop();
            } 
            else {
                while (!stack.isEmpty() && stack.peek() != '(' && getPrecedence(c) <= getPrecedence(stack.peek())) {
                    intermediateResult += stack.pop();
                }
                stack.push(c);
            }
        }

        while (!stack.isEmpty()) {
            intermediateResult += stack.pop();
        }
        
        char[] finalResult = new char[intermediateResult.length()];
        for (int i = 0; i < intermediateResult.length(); i++) {
            finalResult[i] = intermediateResult.charAt(intermediateResult.length() - 1 - i);
        }
        
        return new String(finalResult);
    }

    private int getPrecedence(char ch) {
        switch (ch) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
        }
        return -1;
    }
}