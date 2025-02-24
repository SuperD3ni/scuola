/*Esercizio 1: Creare un array contenente le somme delle lunghezze dei testi
 di un  "DIV" con il successivo nella sezione con id s1. L'ultimo elemento dell'array dovrà contnere la lunghezza
 del testo contenuto nell'ultimo div
 */

let lunghezze = [];
let parole = [];
let parola = [];

vecchio();
lunghezze = [];
parole = [];
parola = [];
nuovo();

function nuovo(){
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
        n 
        lunghezze.push(n);
    })
    let somme = lunghezze.map((value, i)=>{
        if (lunghezze[i+1] != null){
            return value + lunghezze[i+1];
        } else{
            return value;
        }
    })
    console.log(somme);
}

function vecchio(){
    let node = document.querySelectorAll("div")
    let divs = Array.from(node)
    divs.forEach(div=>{
        parole.push(div.textContent);
    })
    console.log(parole);
    lunghezze = parola.length
    let somme = lunghezze.map((value, i)=>{
        if (lunghezze[i+1] != null){
            return value + lunghezze[i+1];
        } else{
            return value;
        }
    })
    console.log(somme);
}
