let arrayParole = ["ciao", "apparecchio", "patate", "riso"];

parolaScelta = parolaCasuale(arrayParole);
parolaModificata = convertiParola(parolaScelta);

console.log(parolaScelta);
console.log(parolaModificata);

function parolaCasuale(arrayParole) {
    let parolaScelta = arrayParole[Math.floor(Math.random()*arrayParole.length)]
    return parolaScelta
}

function convertiParola(parolaScelta) {
    const vocali = ["a", "e", "i", "o", "u"];
    const consonanti = ["b", "c", "d", "f", "h", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  
    let parolaModificata = [];
  
    for (let i = 0; i < parolaScelta.length; i++) {
      const carattere = parolaScelta[i].toLowerCase();
      if (vocali.includes(carattere)) {
        parolaModificata.push('@');
      } else if (consonanti.includes(carattere)) {
        parolaModificata.push('*');
      } else {
        parolaModificata.push(carattere);
      }
    }
  
    return parolaModificata;
  }