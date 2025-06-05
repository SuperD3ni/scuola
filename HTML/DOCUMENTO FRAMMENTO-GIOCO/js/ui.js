// ui.js
import { creaUtentiFragment } from "./utenti.js";
import { creaGiocoFragment }  from "./gioco.js";
import { creaClassificaFragment } from "./classifica.js";

const sezioni = {
  utenti: creaUtentiFragment,
  gioco:  creaGiocoFragment,
  classifica: creaClassificaFragment
};

export function initNav() {
  const mainContainer = document.getElementById("main");
  if (!mainContainer) {
    console.error("Impossibile trovare <main id=\"main\"> nel DOM");
    return;
  }

  // Aggiungo event listener a TUTTI i button nel nav
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      // Rimuovo classe “active” da tutti i pulsanti
      document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
      // Aggiorno il pulsante cliccato
      btn.classList.add("active");

      const nomeSezione = btn.dataset.section; // es. "gioco"
      mainContainer.innerHTML = "";
      // Chiamo la funzione corrispondente al modulo
      mainContainer.appendChild(sezioni[nomeSezione]());
    });
  });

  // All’avvio mostro di default “utenti”
  mainContainer.appendChild(sezioni.utenti());
}