function homeView() {
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.textContent = 'Home Page';
    fragment.appendChild(h1);
    return fragment;
  }

  function aboutView() {
    const fragment = document.createDocumentFragment();
    const p = document.createElement('p');
    p.textContent = 'About page content...';
    fragment.appendChild(p);
    return fragment;
  }

  function contactsView() {
    const fragment = document.createDocumentFragment();
    const text = document.createElement('input');
    text.placeholder="Name";
    const button = document.createElement('button');
    button.textContent="invio"
    fragment.appendChild(text);
    fragment.appendChild(button);
    return fragment;
  }

  // Map per organizzare i componenti
  const views = new Map([
    ['home', homeView],
    ['about', aboutView],
    ['contacts', contactsView],
  ]);

  // Gestione del routing
  function navigate(viewName) {
    const view = views.get(viewName);
    if (view) {
      const app = document.getElementById('app');
      app.innerHTML = ''; // Pulisce il contenitore
      app.appendChild(view());
    }
  }

  // Gestione degli eventi dei link
  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-view]')) {
      //event.preventDefault();
      const viewName = event.target.dataset.view;
      navigate(viewName);
      history.pushState(null, null, `#${viewName}`); // Aggiorna l'URL
    }
  });
  /*
L'attributo dataset è un oggetto che contiene tutti gli attributi personalizzati
del tipo data-* presenti su un elemento.
Ad esempio, se hai <button data-view="home">, allora event.target.dataset sarà un oggetto con
 una proprietà view che contiene il valore "home"
 Per utilizzare dataset, gli attributi devono seguire la forma data-*, dove * è un nome scelto dall'utente.
 Questo è uno standard HTML5 per definire attributi personalizzati che contengono dati
  destinati a essere utilizzati da JavaScript.

*/

  // Gestione del caricamento iniziale e del popstate
  function handleLocation() {
    const viewName = location.hash.substring(1) || 'home'; // Ottiene la vista dall'hash dell'URL
    navigate(viewName);
  }

  window.addEventListener('popstate', handleLocation); // Gestisce i cambi di URL (avanti/indietro)
  handleLocation(); // Carica la vista iniziale