import {usersView, gameView, scoresView} from "./views.js";
document.addEventListener('DOMContentLoaded', initialize)

function initialize(){

    let views = new Map([
        ['users', usersView],
        ['game', gameView],
        ['scores', scoresView]
    ])

    window.addEventListener('popstate', handleLocationChange);

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
            history.pushState(null, null, `#${viewName}`);
        }
    });

    function handleLocationChange() {
        const viewName = location.hash.substring(1) || 'home';
        navigate(viewName);
    }
}