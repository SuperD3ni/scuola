public class Calcolatore {
    public int calcola(Node<String> root) {
        Stack<Integer> stack = new Stack<>();
        calcoloRicorsivo(root, stack);
        return stack.pop();
    }

    private void calcoloRicorsivo(Node<String> currentNode, Stack<Integer> stack) {
        if (currentNode == null) {
            return;
        }

        calcoloRicorsivo(currentNode.getLeft(), stack);
        calcoloRicorsivo(currentNode.getRight(), stack);

        String data = currentNode.getData();
        if (isNumber(data)) {
            stack.push(Integer.parseInt(data));
        } else if (currentNode.getLeft() != null && currentNode.getRight() != null) {
            int right = stack.pop();
            int left = stack.pop();
            String operator = data;
            int result = 0;

            switch (operator) {
                case "+":
                    result = left + right;
                    break;
                case "-":
                    result = left - right;
                    break;
                case "*":
                    result = left * right;
                    break;
                case "/":
                    result = left / right;
                    break;
                default:
                    throw new IllegalArgumentException("Operatore non supportato: " + operator);
            }
            stack.push(result);
        }
    }

    public String[] toPolishNotation(String string) {
        String[] tokens = tokenize(string);
        String[] inverted = new String[tokens.length];
        int invertedIndex = 0;
        for (int i = tokens.length - 1; i >= 0; i--) {
            String token = tokens[i];
            if ("(".equals(token)) {
                inverted[invertedIndex++] = ")";
            } else if (")".equals(token)) {
                inverted[invertedIndex++] = "(";
            } else {
                inverted[invertedIndex++] = token;
            }
        }

        Stack<String> stack = new Stack<>();
        String[] intermediateResult = new String[inverted.length];
        int intermediateCount = 0;

        for (int i = 0; i < inverted.length; i++) {
            String token = inverted[i];
            if (isNumber(token)) {
                intermediateResult[intermediateCount++] = token;
            } else if ("(".equals(token)) {
                stack.push(token);
            } else if (")".equals(token)) {
                while (!stack.isEmpty() && !"(".equals(stack.peek())) {
                    intermediateResult[intermediateCount++] = stack.pop();
                }
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                while (!stack.isEmpty() && !"(".equals(stack.peek()) && getPrecedence(token) <= getPrecedence(stack.peek())) {
                    intermediateResult[intermediateCount++] = stack.pop();
                }
                stack.push(token);
            }
        }

        while (!stack.isEmpty()) {
            intermediateResult[intermediateCount++] = stack.pop();
        }

        String[] finalTokens = new String[intermediateCount];
        int finalIndex = 0;
        for (int i = intermediateCount - 1; i >= 0; i--) {
            finalTokens[finalIndex++] = intermediateResult[i];
        }

        return finalTokens;
    }

    private int getPrecedence(String token) {
        if (token == null || token.length() != 1) {
            return -1;
        }

        char ch = token.charAt(0);
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

    private String[] tokenize(String expression) {
        String[] rawTokens = new String[expression.length()];
        int tokenCount = 0;
        char[] numberBuild = new char[expression.length()];
        int numberLength = 0;

        for (int i = 0; i < expression.length(); i++) {
            char current = expression.charAt(i);

            if (Character.isWhitespace(current)) {
                if (numberLength > 0) {
                    rawTokens[tokenCount++] = new String(numberBuild, 0, numberLength);
                    numberLength = 0;
                }
                continue;
            }

            if (Character.isDigit(current)) {
                numberBuild[numberLength++] = current;
                continue;
            }

            if (numberLength > 0) {
                rawTokens[tokenCount++] = new String(numberBuild, 0, numberLength);
                numberLength = 0;
            }

            if (current == '+' || current == '-' || current == '*' || current == '/' || current == '(' || current == ')') {
                rawTokens[tokenCount++] = String.valueOf(current);
            } else {
                throw new IllegalArgumentException("Carattere non supportato: " + current);
            }
        }

        if (numberLength > 0) {
            rawTokens[tokenCount++] = new String(numberBuild, 0, numberLength);
        }

        String[] tokens = new String[tokenCount];
        for (int i = 0; i < tokenCount; i++) {
            tokens[i] = rawTokens[i];
        }

        return tokens;
    }

}