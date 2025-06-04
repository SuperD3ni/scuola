import { usersView } from "./users.js";
import { gameView } from "./game.js";
import { scoresView } from "./scores.js";
export {navigate}
export let players = [];
export let scores = [];

const views = new Map([
    ['users', usersView],
    ['game', gameView],
    ['scores', scoresView],
]);

// manages routing
function navigate(viewName) {
const view = views.get(viewName);
if (view) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // cleans div
    app.appendChild(view());
}
}

// manages links' events
document.addEventListener('click', (event) => {
if (event.target.matches('[data-view]')) {
    event.preventDefault();
    const viewName = event.target.dataset.view;
    navigate(viewName);
    history.pushState(null, null, `#${viewName}`); // updates URL
}
})

// manages initial loading
function handleLocation() {
    const viewName = location.hash.substring(1) || 'home'; // gets the view from the hash URL
    navigate(viewName);
}

window.addEventListener('popstate', handleLocation); // manages url changes
handleLocation(); // loads initial view