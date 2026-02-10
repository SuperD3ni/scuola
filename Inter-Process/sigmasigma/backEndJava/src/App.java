import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class App {
    private static ListaConcatenataBidirezionale lista = new ListaConcatenataBidirezionale();
    private static boolean stato_modificato = false;

    public static void main(String[] args) throws Exception {
        if (args.length > 0) {
            String comando = args[0];
            
            try {
                Scanner scanner = new Scanner(new File("./db.txt"));
                while (scanner.hasNextLine()) {
                    String line = scanner.nextLine().trim();
                    if (!line.isEmpty()) {
                        lista.inserimentoInCoda(line);
                    }
                }
                scanner.close();
            } catch (Exception e) {
            }
            
            // Comanedi
            if (comando.equals("aggiungi") && args.length == 2) {
                String nome = args[1];
                lista.inserimentoInCoda(nome);
                stato_modificato = true;
                // "continua" per l'animazione
                System.out.println(nome);
                System.out.println("continua");
            } 
            else if (comando.equals("sposta")) {
                // step di spostamento
                lista.sposta();
                // Stampa tutti i nomi
                lista.stampaNodi();
                // Se necessario ancora uno spostamento, continua, senno finito
                if (lista.isOrdinata()) {
                    System.out.println("finito");
                } else {
                    System.out.println("continua");
                }
            }
            else if (comando.equals("rimuovi") && args.length == 2) {
                String nome = args[1];
                lista.rimuoviNodo(nome);
                stato_modificato = true;
                // Stampa i nomi rimanenti e poi "finito"
                lista.stampaNodi();
                System.out.println("finito");
            }
            else if (comando.equals("lista")) {
                // Stampa la lista attuale
                lista.stampaNodi();
            }
            
            // Salva i dati su db.txt se modificato
            if (stato_modificato || comando.equals("sposta")) {
                salvaFile();
            }
        } 
    }
    
    private static void salvaFile() {
        try (
            FileWriter fw = new FileWriter("./db.txt", false);
            PrintWriter out = new PrintWriter(fw); 
        ) {
            NodeString current = lista.getHead();
            while (current != null) {
                out.println(current.getData());
                current = current.getNext();
            }   
        } 
        catch (Exception e) {
            System.out.println("Errore nel salvataggio del file");
        } 
    }
}
