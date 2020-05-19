// nav.js

import $ from 'jquery';
import { routes } from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());

    const navBar = $(`
        <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top justify-content-between">
            <span class="navbar-brand"><i class="fas fa-compact-disc"></i> IT SPA</span>
            <ul class="navbar-nav"></ul>
        </nav>
    `);

    // uzupelnij <ul> elementami <li>
    const navBarItems = routes.map(route => navItem(route));
    
    navBar.find('ul').append(navBarItems);

    fragment.append(navBar);

    return fragment;
};
