/*Esercizio 1: Creare un array contenente le somme delle lunghezze dei testi
 di un  "DIV" con il successivo nella sezione con id s1. L'ultimo elemento dell'array dovrà contnere la lunghezza
 del testo contenuto nell'ultimo div
 */
let lunghezze = [];
let parole = [];
let parola = [];

let section = document.getElementById("s1");
let div = section.firstElementChild;
while (div != null) {
    parole.push(div.textContent);
    div = div.nextElementSibling;
}
console.log(parole);
parole.forEach((value, i)=>{
    let n = 0;
    parola = value.split('');
    parola.forEach(value=>{
        n++;
    })
    lunghezze.push(n);
})
console.log(lunghezze);