let j=Math.floor(Math.random() * (150)+50);
output = parolaCasuale(j);
console.log(output)

function parolaCasuale(arr){
    arr.forEach(elemento=>{
        if (elemento<100){
            elemento=false
        }
        else {
            elemento=true
        }
    })
    return risultato;
}