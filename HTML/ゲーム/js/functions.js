document.addEventListener('DOMContentLoaded', start)

function start(){

    let views = new Map([
        ['users', utentiView],
        ['game', gameView],
        ['scores', scoresView]
    ])

    window.addEventListener('popstate', handleLocation);

    function navigate(viewName) {
        const view = views.get(viewName);
        if (view) {
          const app = document.getElementById('app');
          app.innerHTML = '';
          app.appendChild(view());
        }
    }

    document.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.matches('[data-view]')) {
          event.preventDefault();
          const viewName = event.target.dataset.view;
          navigate(viewName);
          history.pushState(null, null, `#${viewName}`); // Aggiorna l'URL
        }
      });

    function handleLocation() {
        const viewName = location.hash.substring(1) || 'home';
        navigate(viewName);
    }

    function homeView(){ // home
        let fragment = document.createDocumentFragment();
        let h1 = document.createElement('h1');
        h1.textContent = "Gioco Sigma";
        fragment.appendChild(h1);
        return fragment;
    }
}

function utentiView(){ // utenti
    let fragment = document.createDocumentFragment();
    let h1 = document.createElement('h1');
    h1.textContent = "Utenti";
    fragment.appendChild(h1);

    // Form per la registrazione di nuovi giocatori
    let form = document.createElement('form');
    let nomeLabel = document.createElement('label');
    nomeLabel.textContent = 'Nome:';
    let nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.id = 'nome';
    nomeLabel.appendChild(nomeInput);
    form.appendChild(nomeLabel);

    let nicknameLabel = document.createElement('label');
    nicknameLabel.textContent = 'Nickname:';
    let nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.id = 'nickname';
    nicknameLabel.appendChild(nicknameInput);
    form.appendChild(nicknameLabel);

    let registratiButton = document.createElement('button');
    registratiButton.textContent = 'Registrati';
    form.appendChild(registratiButton);

    fragment.appendChild(form);

    // Lista dei giocatori registrati
    let listaGiocatori = document.createElement('ul');
    listaGiocatori.id = 'listaGiocatori';
    fragment.appendChild(listaGiocatori);

    // Struttura dati per memorizzare i giocatori (esempio: array)
    let giocatori = [];

    // Funzione per aggiornare la lista dei giocatori visualizzata
    function aggiornaListaGiocatori() {
        listaGiocatori.innerHTML = ''; // Pulisci la lista
        giocatori.forEach(giocatore => {
            let listItem = document.createElement('li');
            listItem.textContent = `${giocatore.nome} (${giocatore.nickname})`;
            listaGiocatori.appendChild(listItem);
        });
    }

    // Gestione del submit del form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita il refresh della pagina

        let nome = nomeInput.value;
        let nickname = nicknameInput.value;

        if (nome && nickname) {
            // Aggiungi il giocatore alla struttura dati
            giocatori.push({ nome: nome, nickname: nickname });

            // Aggiorna la lista visualizzata
            aggiornaListaGiocatori();

            // Pulisci i campi del form
            nomeInput.value = '';
            nicknameInput.value = '';
        }
    });

    registratiButton.addEventListener('click', function(event) {
        let nome = nomeInput.value;
        let nickname = nicknameInput.value;

        if (nome && nickname) {
            // Aggiungi il giocatore alla struttura dati
            giocatori.push({ nome: nome, nickname: nickname });

            // Aggiorna la lista visualizzata
            aggiornaListaGiocatori();

            // Pulisci i campi del form
            nomeInput.value = '';
            nicknameInput.value = '';
        }
    });

    return fragment;
}

function gameView(){


}

function scoresView(){

}