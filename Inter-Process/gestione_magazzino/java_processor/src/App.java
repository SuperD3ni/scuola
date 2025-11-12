import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String prod, n, line;
        Scanner scanner;
        String[] parts;
        int newS;
        String[] allLines = new String[100];

        if (args.length == 2) {
            prod = args[0];
            n = args[1];
            scanner = new Scanner(new File("../../dati/prodotti.csv"));
            int i = 0;
            while (scanner.hasNextLine()) {
                line = scanner.nextLine();
                allLines[i]=line;
                if (line.startsWith(prod)){
                    parts = line.split(";");
                    if (Integer.parseInt(n) > Integer.parseInt(parts[2])) {
                        System.out.println("ERRORE: Stock insufficiente.");
                    } else {
                        newS = Integer.parseInt(parts[2]) - Integer.parseInt(n);
                                try (
                                    FileWriter fw = new FileWriter("../../dati/prodotti.csv", false);
                                    PrintWriter out = new PrintWriter(fw)
                                ) {
                                    for (int j = 0; j < 100; j++) {
                                        if (allLines[j] != null) {
                                            if (allLines[j].startsWith(prod)) { // non ho fatto in tempo ma ho capito che devo mettere questo try dopo il while 
                                                out.println(parts[0] + ";" + parts[1] + ";" + newS + ";" + parts[3]);
                                                System.out.println(parts[1] + ";" + parts[2] + ";" + newS);
                                            } else { 
                                                out.println(allLines[j]);
                                            }
                                        }
                                    } 
                                } catch (IOException e) {
                                    System.err.println("Error while writing: " + e.getMessage());
                                }
                }
            }
            i++;
            scanner.close();
        } 
        } else {
            System.out.println("No args provided");
        }

    }
}
