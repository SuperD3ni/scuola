
import java.io.FileWriter;
import java.io.PrintWriter;

public class Prova {
    public static void main(String[] args) throws Exception {
        CartaCredito cc1 = new CartaCredito(5000, "IBAN xxx");
        CartaCredito cc2 = new CartaCredito(3000, "IBAN yyy");
        FileWriter fw = new FileWriter("ppjava.txt");
        PrintWriter pw = new PrintWriter(fw);

            cc1.accredita(50);
            cc2.accredita(60);
            
        try (pw) {
            pw.println(cc1.getSpeseMensiliEffettuate());
            pw.println(cc2.getSpeseMensiliEffettuate());
        }
    }
}
