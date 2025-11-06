import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(new File("C:\\Users\\denis\\source\\repos\\SuperD3ni\\scuola\\Inter-Process\\ipc_01\\utenti.csv"));
        while (scanner.hasNextLine()) {
            String riga = scanner.nextLine();
            System.out.println(riga);
        }
    }
}