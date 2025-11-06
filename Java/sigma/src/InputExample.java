import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

//crea file

public class InputExample {
    public static void main(String[] args) {

    try (FileWriter fr = new FileWriter("src/parole.csv", true);

        PrintWriter pr = new PrintWriter(fr)) {

        pr.println("casa;tavolo;sedia");

    } catch (IOException e) {

        System.out.println("Errore durante la scrittura sul file: " + e.getMessage());

    }

    }
}