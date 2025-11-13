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
        String[] allLines = new String[100]; // massime righe 100
        boolean found = false;

        if (args.length == 2) {
            prod = args[0];
            n = args[1];
            if (Integer.parseInt(n)>0){ 
                scanner = new Scanner(new File("../../dati/prodotti.csv"));
                int i = 0;
                // cambiato logica operando su una'array di stringhe contenente le linee invece che sulle linee stesse
                while (scanner.hasNextLine()) {
                    allLines[i]=scanner.nextLine();
                    i++;
                }
                scanner.close();
                try (
                    FileWriter fw = new FileWriter("../../dati/prodotti.csv", false);
                    PrintWriter out = new PrintWriter(fw)
                ) {
                    for (int j=0; j<i; j++){
                        line = allLines[j];
                        if (line.startsWith(prod)&&Integer.parseInt(prod)>100){
                            found = true;
                            parts = line.split(";");
                            if (Integer.parseInt(n) > Integer.parseInt(parts[3])) {
                                System.out.println("ERRORE: Stock insufficiente. Disponibili: " + parts[3]); 
                                out.println(line);
                            } else {
                                newS = Integer.parseInt(parts[3]) - Integer.parseInt(n);
                                out.println(parts[0] + ";" + parts[1] + ";" + parts[2] + ";" + newS);
                                System.out.println(parts[1] + ";" + parts[2] + ";" + newS);
                            } 
                        } else {
                            out.println(line);
                        }
                    }
                    if (!found) {
                        System.out.println("ERRORE: Prodotto con codice " + prod + " non trovato.");
                    }
                }                                 
                catch (IOException e) {
                    System.err.println("Error while writing: " + e.getMessage());
                }
            } else {
                System.out.println("ERRORE: La quantità deve essere un numero positivo..");
            }
        } else {
            System.err.println("No arguments provided");
        }

    }
}
