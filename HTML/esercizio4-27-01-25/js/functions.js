/*Esercizio 4: Genera una matrice quadrata di dimensione 4x4 con numeri casuali tra 10 e 50.
 Crea una nuova matrice in cui ogni elemento sarà:
"dispari" se l'elemento corrispondente nella matrice originale è un numero dispari.
"pari" se l'elemento corrispondente nella matrice originale è un numero pari.
Utilizza i metodi degli array per costruire entrambe le matrici.*/

/*let matrix = [];

for(let i = 0; i < 4; i++){
    matrix[i] = [];
    for(let j = 0; j < 4; j++) {
        matrix[i][j] = Math.floor(Math.random() * 50) + 10;
    }
}

let matrix2 = [];

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++) {
        matrix2[i] = [];
        let c = false;
        while (c==false){
            matrix2[i][j] = Math.floor(Math.random() * 50) + 10;
            let is1 = matrix[i][j] % 2
            let is2 = matrix2[i][j] % 2
            if (is1 == is2){
                c=true
            }
        }
    }
}

console.log(matrix, matrix2)*/

let matrice = new Array(4).fill(null);
matrice=matrice.map(element=>new Array(4).fill(0));
matrice=matrice.map(element=>element.map(element=>Math.floor(Math.random() * (10))+50));
console.log(matrice);
let matrice1=[...matrice];
matrice1=matrice1.map(row=>row.map((element, i)=>{
    
}));
console.log(matrice1);
 