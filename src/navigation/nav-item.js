// nav-item.js

import $ from 'jquery';

// Navitem gets all necesarry information about the route
export const navItem = (route) => {
    const li = $(`<li></li>`);
    const a = $(`<a class="link" id="link-${route.name}">${route.name}</a>`);

    a.on('click', (e) => {
        e.preventDefault();
        // Triggers event "routechange" (bubbling)
        a.trigger('routechange', { path: route.path });
    });

    li.append(a);

    return li;
};
