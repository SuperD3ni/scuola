import { utenti } from "./utenti.js";

export function creaGiocoFragment() {
  var fragment = document.createDocumentFragment();
  var sezione = document.createElement("div");
  sezione.className = "section";

  if (utenti.length < 2) {
    var p = document.createElement("p");
    p.textContent = "Servono almeno due giocatori registrati.";
    sezione.appendChild(p);
    fragment.appendChild(sezione);
    return fragment;
  }

  var header = document.createElement("h2");
  header.textContent = "Seleziona Giocatori";
  sezione.appendChild(header);

  var g1 = null,
    g2 = null;

  if (utenti.length > 2) {
    var sel1 = document.createElement("select");
    sel1.id = "sel1";
    var sel2 = document.createElement("select");
    sel2.id = "sel2";

    for (var i = 0; i < utenti.length; i++) {
      var u = utenti[i];
      var o1 = document.createElement("option");
      o1.value = u.nickname;
      o1.textContent = u.nickname;
      sel1.appendChild(o1);

      var o2 = document.createElement("option");
      o2.value = u.nickname;
      o2.textContent = u.nickname;
      sel2.appendChild(o2);
    }

    var btnStart = document.createElement("button");
    btnStart.textContent = "Avvia Partita";
    btnStart.addEventListener("click", function () {
      if (sel1.value === sel2.value) return;
      for (var j = 0; j < utenti.length; j++) {
        if (utenti[j].nickname === sel1.value) g1 = utenti[j];
        if (utenti[j].nickname === sel2.value) g2 = utenti[j];
      }
      avvia();
    });

    sezione.appendChild(sel1);
    sezione.appendChild(sel2);
    sezione.appendChild(btnStart);
  } else {
    g1 = utenti[0];
    g2 = utenti[1];
    avvia();
  }

  function avvia() {
    sezione.innerHTML = "";

    var tit = document.createElement("h2");
    tit.textContent = "Partita";

    var turnoTxt = document.createElement("p");
    turnoTxt.className = "turno";

    var infoBox = document.createElement("div");
    infoBox.style.display = "flex";
    infoBox.style.justifyContent = "space-between";

    var p1box = document.createElement("div");
    var p2box = document.createElement("div");

    var n1 = document.createElement("h3");
    n1.textContent = g1.nickname;
    var n2 = document.createElement("h3");
    n2.textContent = g2.nickname;

    var bar1 = document.createElement("div");
    bar1.id = "bar1";
    bar1.className = "progress-bar";

    var bar2 = document.createElement("div");
    bar2.id = "bar2";
    bar2.className = "progress-bar";

    for (var k = 0; k < 25; k++) {
      var b1 = document.createElement("div");
      b1.className = "bar-block";
      bar1.appendChild(b1.cloneNode());
    }
    for (var k = 0; k < 25; k++) {
      var b2 = document.createElement("div");
      b2.className = "bar-block";
      bar2.appendChild(b2.cloneNode());
    }

    p1box.appendChild(n1);
    p1box.appendChild(bar1);
    p2box.appendChild(n2);
    p2box.appendChild(bar2);
    infoBox.appendChild(p1box);
    infoBox.appendChild(p2box);

    var grid = document.createElement("div");
    grid.id = "griglia";

    var valori = [];
    var z = 0;
    for (var i = 0; i < 30; i++) {
      var v = 0;
      if (z < 5 && Math.random() < 0.2) {
        v = 0;
        z++;
      } else {
        v = Math.ceil(Math.random() * 3);
      }
      valori.push(v);
    }

    var punteggi = [0, 0];
    var turno = 0;
    var rivelate = 0;

    aggiornaTurno();

    for (var i = 0; i < 30; i++) {
      (function (idx) {
        var c = document.createElement("div");
        c.className = "cell";
        c.dataset.i = idx;
        c.addEventListener("click", function () {
          if (c.classList.contains("revealed")) return;
          var v0 = valori[idx];
          c.textContent = String(v0);
          c.classList.add("revealed");
          rivelate++;
          if (v0 === 0) {
            punteggi[turno] = 0;
            resetBar(turno);
          } else {
            var nuovo = punteggi[turno] + v0;
            if (nuovo > 25) nuovo = v0;
            punteggi[turno] = nuovo;
            fillBar(turno, nuovo);
          }
          if (rivelate === 30) {
            fine();
            return;
          }
          turno = 1 - turno;
          aggiornaTurno();
        });
        grid.appendChild(c);
      })(i);
    }

    function aggiornaTurno() {
      var nomeTurno = g1;
      if (turno === 1) nomeTurno = g2;
      turnoTxt.textContent = "Turno: " + nomeTurno.nickname;
    }

    function fillBar(idx, val) {
      var barE = idx === 0 ? bar1.children : bar2.children;
      var count = 0;
      function step() {
        if (count < val) {
          barE[count].classList.add("active");
          count++;
          setTimeout(step, 400);
        }
      }
      step();
    }

    function resetBar(idx) {
      var barE = idx === 0 ? bar1.children : bar2.children;
      for (var x = 0; x < barE.length; x++) {
        barE[x].classList.remove("active");
      }
    }

    function fine() {
      if (punteggi[0] > g1.migliore) g1.migliore = punteggi[0];
      if (punteggi[1] > g2.migliore) g2.migliore = punteggi[1];
      g1.partite++;
      g2.partite++;
      if (punteggi[0] > punteggi[1]) {
        g1.vinte++;
        g2.perse++;
      } else if (punteggi[1] > punteggi[0]) {
        g2.vinte++;
        g1.perse++;
      }
      var btnClass = document.querySelector('nav button[data-section="classifica"]');
      if (btnClass) btnClass.click();
    }

    sezione.appendChild(tit);
    sezione.appendChild(turnoTxt);
    sezione.appendChild(infoBox);
    sezione.appendChild(grid);
  }

  fragment.appendChild(sezione);
  return fragment;
}