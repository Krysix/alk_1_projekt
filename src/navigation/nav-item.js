import $ from 'jquery';

// nav-item.js

// navItem otrzymuje komplente informacje o danej "ścieżce"
export const navItem = (route) => {
    const li = $(`<li></li>`);
    const a = $(`<a class="link" id="link-${route.name}">${route.name}</a>`);

    a.on('click', (event) => {
        event.preventDefault();
        // emituje zdarzenie "routechange" (bąbelkowanie)
        a.trigger('routechange', { path: route.path });
    });

    li.append(a);

    return li;
};
