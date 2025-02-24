/* Esercizio 3: Scrivi una funzione transposeMatrix(matrix)
 che prenda una matrice bidimensionale dalla sezione con id s1
 (i valori dei DIV saranno i numeri della matrice) e restituisca la matrice trasposta
 (scambiare le righe con le colonne).
La funzione deve utilizzare i metodi degli array per trasformare le righe in colonne e viceversa.*/

let matrix = new Array(2).fill(null).map(() => new Array(2).fill(0));

let transposed = transposeMatrix(matrix)
console.log(matrix, transposed)

function transposeMatrix(matrix){
    let section = document.getElementById("s1");
    let div = section.firstElementChild;
    while (div != null) {
        matrix.forEach(element => {
            element.forEach((_, i) => {
                element[i] = div.innerHTML;
                div = div.nextElementSibling;
            })    
        });
    }
    let matrix2 = matrix[0].map((_, colI) => matrix.map(row => row[colI]));
    return matrix2;
}