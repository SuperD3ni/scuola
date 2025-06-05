export var utenti = [];

export function creaUtentiFragment() {
  var fragment = document.createDocumentFragment();

  var sezione = document.createElement("div");
  sezione.className = "section";

  var h = document.createElement("h2");
  h.textContent = "Registrazione Utenti";

  var inputN = document.createElement("input");
  inputN.id = "nome";
  inputN.placeholder = "Nome";

  var inputK = document.createElement("input");
  inputK.id = "nickname";
  inputK.placeholder = "Nickname";

  var btn = document.createElement("button");
  btn.id = "btnRegistra";
  btn.textContent = "Registra";

  var err = document.createElement("p");
  err.id = "error";

  var ul = document.createElement("ul");
  ul.id = "listaUtenti";

  btn.addEventListener("click", function () {
    var n = inputN.value.trim();
    var k = inputK.value.trim();
    if (!n || !k) {
      err.textContent = "Compila entrambi i campi.";
      return;
    }
    var duplicato = false;
    for (var i = 0; i < utenti.length; i++) {
      if (utenti[i].nickname === k) {
        duplicato = true;
        break;
      }
    }
    if (duplicato) {
      err.textContent = "Nickname già usato.";
      return;
    }
    utenti.push({ nome: n, nickname: k, partite: 0, vinte: 0, perse: 0, migliore: 0 });
    aggiorna();
    err.textContent = "";
    inputN.value = "";
    inputK.value = "";
  });

  function aggiorna() {
    ul.innerHTML = "";
    for (var i = 0; i < utenti.length; i++) {
      var li = document.createElement("li");
      li.textContent = utenti[i].nome + " (" + utenti[i].nickname + ")";
      ul.appendChild(li);
    }
  }

  sezione.appendChild(h);
  sezione.appendChild(inputN);
  sezione.appendChild(inputK);
  sezione.appendChild(btn);
  sezione.appendChild(err);
  sezione.appendChild(ul);

  fragment.appendChild(sezione);
  return fragment;
}