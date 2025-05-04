const caselleBase = [
    { descrizione: "Casella di passaggio", colore: "salmon" },
    { descrizione: "Ponte magico", colore: "green" },
    { descrizione: "Trappola", colore: "red" },
    { descrizione: "Pozzo dei desideri", colore: "green" },
    { descrizione: "Drago furioso", colore: "red" },
    { descrizione: "Fata madrina", colore: "green" },
    { descrizione: "Strega malvagia", colore: "red" },
    { descrizione: "Tesoro nascosto", colore: "green" },
    { descrizione: "Palude melmosa", colore: "red" },
    { descrizione: "Albero della saggezza", colore: "green" },
    { descrizione: "Sabbie mobili", colore: "red" },
    { descrizione: "Cavaliere d'oro", colore: "green" },
    { descrizione: "Labirinto oscuro", colore: "red" },
    { descrizione: "Fontana magica", colore: "green" },
    { descrizione: "Ragnatela appiccicosa", colore: "red" },
    { descrizione: "Unicorno bianco", colore: "green" },
    { descrizione: "Torre crollante", colore: "red" },
    { descrizione: "Mercante generoso", colore: "green" },
    { descrizione: "Banditi di strada", colore: "red" },
    { descrizione: "Oasi rigenerante", colore: "green" },
    { descrizione: "Tempesta di sabbia", colore: "red" },
    { descrizione: "Baule del tesoro", colore: "green" },
    { descrizione: "Trono maledetto", colore: "red" },
    { descrizione: "Stella cadente", colore: "green" },
    { descrizione: "Caverna dei troll", colore: "red" },
];

const caselleSenzaPrima = caselleBase.slice(1);
const caselleCopia = caselleSenzaPrima.map(casella => ({ ...casella }));
const casellaPassaggio = caselleBase.find(casella => casella.descrizione === "Casella di passaggio");

while (caselleCopia.length < 29) {
    caselleCopia.push({ ...casellaPassaggio });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(caselleCopia);

const nuovaCasellaPassaggio = { descrizione: "Casella di passaggio", colore: "salmon" };

caselleCopia.unshift(nuovaCasellaPassaggio);

const mappa = new Map(caselleCopia.map(casella => [casella, null]));

const azioni = [
    { descrizioneAzione: "Avanza di 2 caselle", tipoAzione: "positiva", azione: () => console.log("Avanza di 2 caselle") },
    { descrizioneAzione: "Perdi un turno", tipoAzione: "negativa", azione: () => console.log("Perdi un turno") },
    { descrizioneAzione: "Torna alla casella 6", tipoAzione: "negativa", azione: () => console.log("Torna alla casella 6") },
    { descrizioneAzione: "Tira di nuovo il dado", tipoAzione: "positiva", azione: () => console.log("Tira di nuovo il dado") },
    { descrizioneAzione: "Ottieni un punto bonus", tipoAzione: "positiva", azione: () => console.log("Ottieni un punto bonus") },
    { descrizioneAzione: "Vai alla casella 25", tipoAzione: "positiva", azione: () => console.log("Vai alla casella 25") },
    { descrizioneAzione: "Torna indietro di 3 caselle", tipoAzione: "negativa", azione: () => console.log("Torna indietro di 3 caselle") },
    { descrizioneAzione: "Salta il prossimo turno", tipoAzione: "negativa", azione: () => console.log("Salta il prossimo turno") },
    { descrizioneAzione: "Hai vinto il gioco!", tipoAzione: "positiva", azione: () => console.log("Hai vinto il gioco!") }
];

const azioniPositive = azioni.filter(azione => azione.tipoAzione === "positiva");
const azioniNegative = azioni.filter(azione => azione.tipoAzione === "negativa");

function ottieniAzioneCasuale(azioni) {
    return azioni[Math.floor(Math.random() * azioni.length)];
}

caselleCopia.forEach(casella => {
    if (casella.colore === "green") {
        mappa.set(casella, ottieniAzioneCasuale(azioniPositive));
    } else if (casella.colore === "red") {
        mappa.set(casella, ottieniAzioneCasuale(azioniNegative));
    }
});

const posizione = 0;
const casellaCorrente = caselleCopia[posizione];
const azioneCorrente = mappa.get(casellaCorrente);

console.log(`Alla casella ${posizione + 1} (${casellaCorrente.descrizione}):`);
if (azioneCorrente) {
    console.log(`Azione: ${azioneCorrente.descrizioneAzione}`);
    azioneCorrente.azione();
} else {
    console.log("Nessuna azione speciale.");
}

function lancio(){
    let n = Math.floor(Math.random() * 12) + 2;
    console.log(n);
}

function visualizzaCaselle() {
    const board = document.getElementById("board");
    caselleCopia.forEach(casella => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = casella.colore;
        cell.textContent = casella.descrizione;
        board.appendChild(cell);
    });
}

visualizzaCaselle();
document.getElementById("button").addEventListener("click", lancio);