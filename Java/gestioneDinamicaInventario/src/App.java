/*Dovrai definire una gerarchia di classi per modellare i veicoli. Ogni veicolo dovrà avere attributi come marca, modello e prezzo.

    Classe Base Veicolo:

    Definisci la classe base Veicolo.

    Includi attributi comuni come marca, modello e prezzo.

    Definisci un costruttore che inizializzi questi attributi.

    Sovrascrivi il metodo toString() per restituire una stringa formattata con tutte le informazioni del veicolo.

    Sottoclasse Auto:

    Definisci la sottoclasse Auto che estende Veicolo.

    Aggiungi un attributo specifico come numeroPorte.

    Sottoclasse Moto:

    Definisci la sottoclasse Moto che estende Veicolo.

    Aggiungi un attributo specifico come cilindrata (in cc).

    Sottoclasse AutoSportiva:

    Definisci la sottoclasse AutoSportiva che estende Auto.

    Aggiungi un attributo specifico come potenzaCV.

    Assicurati di sovrascrivere il metodo toString() in ogni sottoclasse (Auto, Moto, AutoSportiva) per includere i dettagli specifici del loro tipo, richiamando anche la versione del genitore per i dettagli comuni.

Crea la classe InventarioArrayVeicoli che gestirà l'array a capacità fissa.

    Definizione e Costruttore:

    La classe deve avere un array privato di tipo Veicolo[] chiamato arrayInventario e una variabile intera dimensioneCorrente.

    Il costruttore deve accettare un valore intero per definire la capacità massima dell'inventario e inizializzare l'array con tale dimensione.

    Metodo aggiungiElemento:

    Accetta un oggetto di tipo Veicolo (o una delle sue sottoclassi).

    Priorità: Prima di aggiungere, verifica se dimensioneCorrente è inferiore alla capacità massima.

    Se l'inventario è pieno, stampa un messaggio di errore chiaro e restituisci false.

    Se c'è spazio, aggiungi l'elemento e incrementa dimensioneCorrente, quindi restituisci true.

    Metodo stampaInventario:

    Stampa a video un elenco formattato di tutti gli elementi attualmente presenti nell'inventario. Nota: La semplice stampa dell'oggetto (System.out.println(elemento)) sfrutterà il polimorfismo del metodo toString() che avete sovrascritto.

4.Metodo stampaInventario:

    Stampa a video un elenco formattato di tutti gli elementi attualmente presenti nell'inventario. Nota: La semplice stampa dell'oggetto (System.out.println(elemento)) sfrutterà il polimorfismo del metodo toString() che avete sovrascritto.

   5.Metodo getElemento:

    Accetta un indice intero.

    Restituisce l'elemento Veicolo presente a quell'indice.

    Lancia un'eccezione se l'indice è fuori dai limiti validi dell'inventario.

6.Metodo stampaInventarioPerTipo :

    Implementa il metodo public void stampaInventarioPerTipo(Class<?> tipoClasse).

    Questo metodo deve scorrere l'inventario e stampare solo gli elementi che corrispondono al tipo di classe passato (o che sono sue sottoclassi), utilizzando il metodo isInstance() sull'oggetto tipoClasse.

Crea la classe App con il metodo main per replicare la seguente logica:

    Inizializzazione: Crea un'istanza di InventarioArrayVeicoli con una capacità massima di 4.

    Popolamento: Aggiungi almeno quattro oggetti distinti, inclusi almeno un'istanza di Auto, una di Moto e una di AutoSportiva.

    Capacità Piena: Tenta di aggiungere un quinto elemento per verificare il corretto messaggio di errore.

    Visualizzazione Totale: Stampa l'inventario completo.

    Filtro Dinamico: Esegui le seguenti chiamate al metodo stampaInventarioPerTipo:

    Filtro 1: Chiama il metodo per stampare solo gli elementi di tipo Auto.

    Filtro 2: Chiama il metodo per stampare solo gli elementi di tipo Moto.

    Filtro 3: Chiama il metodo per stampare solo gli elementi di tipo AutoSportiva.*/

public class App {
    public static void main(String[] args) throws Exception {
        // Inizializzazione: Crea un'istanza di InventarioArrayVeicoli con capacità massima di 4
        InventarioArrayVeicoli inventario = new InventarioArrayVeicoli(4);

        // Popolamento: Aggiungi almeno quattro oggetti distinti
        System.out.println("AGGIUNTA VEICOLI ALL'INVENTARIO");
        inventario.aggiungiElemento(new Auto("Toyota", "Corolla", 20000, 4));
        inventario.aggiungiElemento(new Moto("Yamaha", "YZF-R1", 15000, 998));
        inventario.aggiungiElemento(new AutoSportiva("Ferrari", "F8 Tributo", 280000, 2, 710));
        inventario.aggiungiElemento(new Auto("Volkswagen", "Golf", 25000, 5));
        System.out.println();

        // Capacità Piena: Tenta di aggiungere un quinto elemento
        System.out.println("TENTATIVO DI AGGIUNGERE VEICOLO A CAPACITA PIENA");
        inventario.aggiungiElemento(new Moto("Ducati", "Panigale V4", 20000, 1103));
        System.out.println();

        // Visualizzazione Totale: Stampa l'inventario completo
        inventario.stampaInventario();

        // Filtro Dinamico: Esegui le seguenti chiamate
        // Filtro 1: Chiama il metodo per stampare solo gli elementi di tipo Auto
        inventario.stampaInventarioPerTipo(Auto.class);

        // Filtro 2: Chiama il metodo per stampare solo gli elementi di tipo Moto
        inventario.stampaInventarioPerTipo(Moto.class);

        inventario.stampaInventarioPerTipo(AutoSportiva.class);
    }
}
