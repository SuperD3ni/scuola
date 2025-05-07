import {boccaView, ghiandoleView, golaView, fegatoView, stomacoView, pancreasView, cistifelleaView, intestinotView, intestinocView, appendiceView, anoView, fontiView} from "./views.js";

document.addEventListener('DOMContentLoaded', start)

function start(){

    let views = new Map([
        ['home', homeView],
        ['bocca', boccaView],
        ['ghiandole', ghiandoleView],
        ['gola', golaView],
        ['fegato', fegatoView],
        ['stomaco', stomacoView],
        ['pancreas', pancreasView],
        ['cistifellea', cistifelleaView],
        ['intestinot', intestinotView],
        ['intestinoc', intestinocView],
        ['appendice', appendiceView],
        ['ano', anoView],
        ['fonti', fontiView]
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
        // Crea un DocumentFragment per ottimizzare le aggiunte al DOM
        const fragment = document.createDocumentFragment();

        // Crea il div principale con classe "home"
        const homeDiv = document.createElement('div');
        homeDiv.className = 'home';

        // Crea il primo paragrafo
        const primoParagrafo = document.createElement('p');
        primoParagrafo.className = 'home';
        primoParagrafo.textContent = 'L’apparato digerente è il sistema del nostro corpo responsabile della trasformazione del cibo in sostanze nutritive e della eliminazione dei rifiuti.';
        homeDiv.appendChild(primoParagrafo);

        // Crea il secondo paragrafo
        const secondoParagrafo = document.createElement('p');
        secondoParagrafo.className = 'home';
        secondoParagrafo.textContent = 'Ogni organo ha un ruolo preciso e fondamentale: dalla bocca all’intestino, passando per stomaco, fegato, pancreas e altri.';
        homeDiv.appendChild(secondoParagrafo);

        // Crea il div per l'immagine
        const imgDiv = document.createElement('div');
        imgDiv.className = 'home';
        const immagine = document.createElement('img');
        immagine.src = './img/Digestive_system_diagram_it_correct.svg'; // Assicurati che il percorso sia corretto
        imgDiv.appendChild(immagine);
        homeDiv.appendChild(imgDiv);

        // Crea il terzo paragrafo
        const terzoParagrafo = document.createElement('p');
        terzoParagrafo.className = 'home';
        terzoParagrafo.textContent = 'In questo sito troverai spiegazioni semplici, chiare e complete su:';
        homeDiv.appendChild(terzoParagrafo);

        // Crea la lista non ordinata
        const lista = document.createElement('ul');
        lista.className = 'home';

        const vociLista = [
            'Come funziona la digestione',
            'Quali sono gli organi principali coinvolti',
            'Le funzioni specifiche di ogni parte del sistema'
        ];

        vociLista.forEach(voce => {
            const li = document.createElement('li');
            li.textContent = voce;
            li.class = 'home'
            lista.appendChild(li);
        });
        homeDiv.appendChild(lista);

        // Crea il quarto paragrafo
        const quartoParagrafo = document.createElement('p');
        quartoParagrafo.className = 'home';
        quartoParagrafo.textContent = 'Inizia il viaggio per scoprire come il tuo corpo trasforma ciò che mangi in energia e salute!';
        homeDiv.appendChild(quartoParagrafo);

        // Aggiunge il div principale al fragment
        fragment.appendChild(homeDiv);

        // Aggiunge il fragment al body del documento (o a un altro elemento contenitore)
        return fragment;
    }

}