public class App {
    public static void main(String[] args) throws Exception {
        if (args.length > 0) {
            System.out.println(Integer.parseInt(args[0])+100);
        } else {
            System.out.println("No arguments provided.");
        }
    }
}
