import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import static java.lang.Integer.parseInt;
import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {
        if (args.length > 0) {
            Lista lista = new Lista();
            String comando = args[0];
            
            try { //legge da db.txt
                Scanner scanner = new Scanner(new File("./db.txt"));
                while (scanner.hasNextLine()) {
                    String line = scanner.nextLine();
                    lista.inserimentoInCoda(line);
                }
                scanner.close();
            } catch (Exception e) {
            }
            
            // Comanedi
            if (comando.equals("aggiungi") && args.length == 3) { //aggiungi dato
                String nome = args[1];
                int index = parseInt(args[2]);
                lista.inserimentoPerIndice(index, nome);
            } 
            else if (comando.equals("rimuovi") && args.length == 2) { //rimuovi un dato per nome
                String nome = args[1];
                lista.rimuoviNodo(nome);
            }
            else if (comando.equals("lista")) { //stampa la lista
                lista.stampaNodi();
            }
            
            //salva su db.txt
            salvaFile(lista);
        } 
    }
    
    private static void salvaFile(Lista lista) {
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
