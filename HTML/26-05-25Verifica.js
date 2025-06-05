const studente1 = { id: 1, nome: "Alice Verdi" };

const studente2 = { id: 2, nome: "Bob Rossi" }; 

const studente3 = { id: 3, nome: "Charlie Bianchi" }; 

const studente4 = { id: 4, nome: "Diana Neri" };

const voti1 = [10, 3, 6, 8, 5, 6];

const voti2 = [3, 7, 3, 6, 5, 4];

const voti3 = [9, 10, 8, 7, 6, 6];

const voti4 = [6, 7, 8, 9, 10, 8];

// parte 1

const studenti = [studente1, studente2, studente3, studente4];

const voti = [voti1, voti2, voti3, voti4];

const registroVoti = new Map();
studenti.forEach((studente, index) => {
    registroVoti.set(studente, voti[index]);
});

console.log("Studenti e voti:", registroVoti);

// parte 2

medie = new Map();

registroVoti.forEach((voti, studente) => {
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    const media = Math.floor(somma / voti.length * 100) / 100;
    medie.set(studente, media);
});
console.log("Medie degli studenti:", medie);

// parte 3

studentiEccellenti = false;
registroVoti.forEach((voti, studente) => {
    if (voti.every(voto => voto < 9)) {
        console.log(`${studente.nome}: ${voti}\n`);
    } else {
        console.log(`${studente.nome}: ${voti} (voti eccellenti)\n`);
        studentiEccellenti = true;
    }
});
if (!studentiEccellenti) {
    console.log("Nessuno studente ha voti eccellenti.");
}

// parte 4

studentiPassati = false;
registroVoti.forEach((voti, studente) => {
    if (voti.every(voto => voto > 5)) {
        console.log(`${studente.nome} è passato con voti: ${voti}\n`);
        studentiPassati = true;
    }
});
if (!studentiPassati) {
    console.log("Nessuno studente è passato.");
}
