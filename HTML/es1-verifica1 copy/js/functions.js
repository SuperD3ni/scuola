
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
const numeriPariIniziali = [];
const numeriDispariIniziali = [];
const numeriInteri = [];

for (let i = 0; i < 5; i++) {
  numeriPariIniziali.push(Math.floor(Math.random() * 25) * 2);
  numeriDispariIniziali.push(Math.floor(Math.random() * 25) * 2 + 1);
}

for (let i = 0; i < 10; i++) {
  numeriInteri.push(Math.floor(Math.random() * 31) + 20); 
}
  const nuoviNumeriPari = [];
  const nuoviNumeriDispari = [];
  
  numeriInteri.forEach(numero => {
    if (numero % 2 === 0) {
      nuoviNumeriPari.push(numero);
    } else {
      nuoviNumeriDispari.push(numero);
    }
  });
  
  const numeriPariFinali = [numeriPariIniziali, nuoviNumeriPari];
  const numeriDispariFinali = [numeriDispariIniziali, nuoviNumeriDispari];
  
  const tuttiMaggioriDi25 = numeriDispariFinali.every(numero => numero > 25);
  
  console.log("Numeri pari iniziali:", numeriPariIniziali);
  console.log("Numeri dispari iniziali:", numeriDispariIniziali);
  console.log("Numeri interi:", numeriInteri);
  console.log("Nuovi numeri pari:", nuoviNumeriPari);
  console.log("Nuovi numeri dispari:", nuoviNumeriDispari);
  console.log("Numeri pari finali:", numeriPariFinali);
  console.log("Numeri dispari finali:", numeriDispariFinali);
  
  console.log("Tutti i numeri dispari sono maggiori di 25?", tuttiMaggioriDi25);