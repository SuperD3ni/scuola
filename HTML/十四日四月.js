/*Titolo Esercizio: Simulazione Magazzino e Spedizioni Sequenziale con JavaScript

Obiettivo: Utilizzare le strutture dati adatte per  implementare funzioni per simulare un flusso di lavoro logistico sequenziale (prima il confezionamento completo, poi la spedizione).

Scenario: Dobbiamo creare una piccola applicazione per simulare le operazioni base di un magazzino. Abbiamo un team di 8 lavoratori composto da 4 magazzinieri e 4 postini, e una lista iniziale di prodotti. Il processo prevede due fasi distinte: prima tutti i magazzinieri preparano i pacchi prelevando i prodotti, e solo successivamente i postini ritirano questi pacchi per la consegna.

Requisiti Dettagliati:

    Setup Dati Iniziali:

        // Array di Lavoratori (8 totali: 4 Magazzinieri, 4 Postini)

        const lavoratori = [

            { nome: 'Mario', cognome: 'Rossi', ruolo: 'magazziniere' },

            { nome: 'Luigi', cognome: 'Verdi', ruolo: 'magazziniere' },

            { nome: 'Giovanni', cognome: 'Bianchi', ruolo: 'magazziniere' },

            { nome: 'Carlo', cognome: 'Neri', ruolo: 'magazziniere' },

            { nome: 'Paolo', cognome: 'Bianchi', ruolo: 'postino' },

            { nome: 'Franco', cognome: 'Verdi', ruolo: 'postino' },

            { nome: 'Antonio', cognome: 'Rossi', ruolo: 'postino' },

            { nome: 'Marco', cognome: 'Gialli', ruolo: 'postino' }

        ];

        // Array iniziale di Prodotti (20 codici articolo)

        const prodottiDisponibili = [

            'ART001', 'ART002', 'ART003', 'ART004', 'ART005',

            'ART006', 'ART007', 'ART008', 'ART009', 'ART010',

            'ART011', 'ART012', 'ART013', 'ART014', 'ART015',

            'ART016', 'ART017', 'ART018', 'ART019', 'ART020'

        ];

    Definizione delle Funzioni Operative:
        confeziona (per Magazzinieri):
            Definisci una funzione chiamata confeziona.
            Questa funzione deve simulare un magazziniere che prepara un pacco.
            Dovrà:
                Prelevare gli ultimi 5 codici prodotto dall'array prodottiDisponibili (l'array prodottiDisponibili deve essere modificato, riducendosi).
                Creare un nuovo array (che rappresenta il "pacco") contenente questi 5 codici prodotto prelevati.
                Restituire questo "pacco" (l'array di 5 codici). 
        spedisci (per Postini):
            Definisci una funzione chiamata spedisci.
            Questa funzione deve simulare un postino che preleva  il primo pacco disponibile da ogni array prodotti dei magazzinieri  (l'array del magazziniere deve essere modificato.

    Costruzione della Struttura Dati Principale:
        Crea una struttura chiamata statoLavoratori. Questa struttura servirà a tenere traccia dello stato e delle azioni di ogni lavoratore.
        Itera sull'array lavoratori che hai creato al punto 1.
        Per ogni lavoratore (sia magazziniere che postino):
            associa nella struttura statoLavoratori. ad ogni lavoratore  un nuovo oggetto literal con due proprietà:
                prodotti: un array, inizialmente vuoto ([]). Questo array conterrà i pacchi gestiti dal lavoratore.
                azione: un riferimento alla funzione che quel lavoratore deve eseguire (confeziona per i magazzinieri, spedisci per i postini).

    Simulazione del Flusso di Lavoro (Ordine Sequenziale Obbligatorio):
        Dopo aver costruito la struttura principale simula il ciclo di attività rispettando rigorosamente il seguente ordine:
            Fase 1: Confezionamento Completo:
                Itera sulla struttura statoLavoratori. Per ogni magazziniere, invoca la sua funzione azione (confeziona).
                Questa fase deve concludersi per tutti i magazzinieri prima di passare alla fase successiva.
            Fase 2: Spedizione:
                Successivamente, e solo dopo la conclusione completa della Fase 1, inizia la fase di spedizione.
                Itera sulla struttura statoLavoratori. Per ogni postino, invoca la sua funzione azione (spedisci) . 

    Generazione Lista di Consegna per un Postino:
        Scegli  il nome e cognome di uno dei postini presenti nel tuo array lavoratori.
        Trova le informazioni corrispondenti a quel postino nella struttura  statoLavoratori.
        Accedi all'array prodotti associato a quel postino .
        Usa i metodi degli array per creare un nuovo array , chiamalo ad esempio listaConsegnePostino.
        Itera attraverso i pacchi (array) presenti nell'array prodotti del postino. Per ogni pacco, itera attraverso i singoli codici prodotto al suo interno.
        Per ciascun codice prodotto, crea un oggetto literal con due proprietà:
            prodotto: il codice prodotto (es. 'ART015')
            indirizzo: una stringa formata concatenando la parola 'indirizzo_' con il codice prodotto (es. 'indirizzo_ART015').
        Aggiungi questo oggetto { prodotto: ..., indirizzo: ... } all'array listaConsegnePostino.( usa i metodi degli array)

    Visualizzazione dell'Output:
        Stampa (usando console.log) il contenuto finale dell'array listaConsegnePostino creato al punto 5. L'output dovrebbe mostrare chiaramente la lista degli articoli che il postino selezionato deve consegnare , ciascuno associato al suo indirizzo fittizio.*/

// Array di Lavoratori (8 totali: 4 Magazzinieri, 4 Postini)

const lavoratori = [

    { nome: 'Mario', cognome: 'Rossi', ruolo: 'magazziniere' },

    { nome: 'Luigi', cognome: 'Verdi', ruolo: 'magazziniere' },

    { nome: 'Giovanni', cognome: 'Bianchi', ruolo: 'magazziniere' },

    { nome: 'Carlo', cognome: 'Neri', ruolo: 'magazziniere' },

    { nome: 'Paolo', cognome: 'Bianchi', ruolo: 'postino' },

    { nome: 'Franco', cognome: 'Verdi', ruolo: 'postino' },

    { nome: 'Antonio', cognome: 'Rossi', ruolo: 'postino' },

    { nome: 'Marco', cognome: 'Gialli', ruolo: 'postino' }

];

// Array iniziale di Prodotti (20 codici articolo)

const prodottiDisponibili = [

    'ART001', 'ART002', 'ART003', 'ART004', 'ART005',

    'ART006', 'ART007', 'ART008', 'ART009', 'ART010',

    'ART011', 'ART012', 'ART013', 'ART014', 'ART015',

    'ART016', 'ART017', 'ART018', 'ART019', 'ART020'

];

let statoLavoratori = new Map();
lavoratori.forEach((value, i)=>{
    if (value.ruolo === "magazziniere"){
        statoLavoratori.set(value, {prodotti: [], azione: () => confeziona(value)});
    } else {
        statoLavoratori.set(value, {prodotti: [], azione: () => spedisci(value)});
    }
})

console.log(statoLavoratori);


statoLavoratori.forEach((key, value)=>{
    if (key.ruolo === "magazziniere"){
        value.azione();
    }
})
statoLavoratori.forEach((key, value)=>{
    if (key.ruolo === "postino"){
        value.azione();
    }
})

function confeziona(magazziniere){
    for (let i = 0; i<5; i++){
        let prodottoPrelevato = prodottiDisponibili.pop();
        statoLavoratori.get(magazziniere).prodotti.push(prodottoPrelevato)
    }
}

function spedisci(postino){
    statoLavoratori.forEach((key, value)=>{
        if (key.ruolo === "magazziniere"){
            let prodottoPrelevato = value.prodotti.shift();
            postino.prodotti.push(prodottoPrelevato)
        }
    })
}