/* Esercizio 2: Scrivi una funzione columnSums(matrix) che calcoli
 la somma di ogni colonna di una matrice bidimensionale
  e restituisca un array contenente le somme di tutte le colonne.
  La funzione prenderà come input una matrice bidimensionale (array di array)
  e utilizzerà i metodi degli array per calcolare le somme.*/

let matrix = [

    [1, 2, 3],
  
    [4, 5, 6],
  
    [7, 8, 9]
  
];

let somme = columnSums(matrix);
console.log(somme);

function columnSums(matrix) {
    let somme = [];
    let somma;
    matrix.forEach((element, i )=> {
        somma = 0;
        element.forEach((value, j)=> {
            somma += matrix[j][i];
        });
        somme.push(somma);
        });
    return somme;
}
