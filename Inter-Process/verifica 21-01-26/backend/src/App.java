import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {
        if (args.length > 0) {
            Scanner scanner;
            String comando;
            List<String> content = new ArrayList<>();
            Coda<String> coda = new Coda<String>();
            try {
                scanner = new Scanner(new File("../../db.txt"));
                comando = args[0];
                while (scanner.hasNextLine()) {
                    content.add(scanner.nextLine());
                }
                scanner.close();
            } catch (Exception e) {
                comando = args[0];
            }
            if (comando.equals("inserisci") && args.length == 2) {
                for (String s : content) {
                    coda.inserisci(s);
                }
                coda.inserisci(args[1]);
                System.out.println("OK: " + args[1]);
            } else if (comando.equals("estrai")) {
                for (String s : content) {
                    coda.inserisci(s);
                }
                String estratto = coda.estrai();
                if (estratto == null) {
                    System.out.println("VUOTO");
                } else {
                    System.out.println(estratto);
                }
            } else if (comando.equals("leggi") && args.length == 2){
                int index = Integer.parseInt(args[1]);
                for (String s : content) {
                    coda.inserisci(s);
                }
                String letto = coda.leggi(index);
                if (letto == null) {
                    System.out.println("FINE");
                } else {
                    System.out.println(letto);
                }
            } else if (comando.equals("ripristina")){
                for (String s : content) {
                    coda.inserisci(s);
                }
                Nodo<String> current = coda.getHead();
                while (current != null) {
                    System.out.println(current.getData());
                    current = current.getNext();
                }
            }         
            try (
                FileWriter fw = new FileWriter("../../db.txt", false);
                PrintWriter out = new PrintWriter(fw); 
            ){
                Nodo<String> current = coda.getHead();
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
}
