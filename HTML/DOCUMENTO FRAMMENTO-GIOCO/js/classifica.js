import { utenti } from "./utenti.js";

export function creaClassificaFragment() {
  var fragment = document.createDocumentFragment();

  var sezione = document.createElement("div");
  sezione.className = "section";

  var h = document.createElement("h2");
  h.textContent = "Classifica";

  var ul = document.createElement("ul");
  ul.id = "classifica";

  // Ordino gli utenti per miglior punteggio (decrescente)
  var copia = utenti.slice();
  copia.sort(function (a, b) {
    return b.migliore - a.migliore;
  });

  for (var i = 0; i < copia.length; i++) {
    var u = copia[i];
    var li = document.createElement("li");
    var testo =
      u.nickname +
      " - Migliore: " +
      u.migliore +
      " | Vinte: " +
      u.vinte +
      " | Perse: " +
      u.perse +
      " | Partite: " +
      u.partite;
    li.textContent = testo;
    ul.appendChild(li);
  }

  sezione.appendChild(h);
  sezione.appendChild(ul);
  fragment.appendChild(sezione);
  return fragment;
}