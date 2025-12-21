/*  Immagina di avere un array misto di scatole (Scatola<?>[] scaffale) che contiene oggetti di vario tipo (Smartphone, Console, ecc.). Vogliamo creare un metodo generico contaOggettiNelMagazzino che, dato un tipo di classe passato come parametro, conti quanti oggetti di quel tipo sono presenti nelle scatole.
metodo main ,  scrivere il metodo stampaInventarioPerTipo.*/


public class App {
    public static void main(String[] args) {

            Inventario inv = new Inventario();

            Scatola<?>[] inventario = new Scatola[4]; 

            inventario[0] = new Scatola<>(new Console("PlayStation 5", true));

            inventario[1] = new Scatola<>(new Smartphone("iPhone 15", 128));

            inventario[2] = new Scatola<>(new Console("Nintendo Switch", false));

            inventario[3] = new Scatola<>(new Smartphone("Samsung Galaxy", 256));

            System.out.println("--- INIZIO INVENTARIO ---\n");

            // Vogliamo contare solo le Console

            inv.contaOggettiNelMagazzino(inventario, Console.class);

            // Vogliamo contare solo gli Smartphone

            inv.contaOggettiNelMagazzino(inventario, Smartphone.class);
            
    }
}