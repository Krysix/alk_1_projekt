// Function adding html elents to navbar.

import $ from 'jquery';
import { routes } from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());

    // Navbar html
    const navBar = $(`
        <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top justify-content-between">
            <span class="navbar-brand"><i class="fas fa-compact-disc"></i> IT SPA</span>
            <ul class="navbar-nav"></ul>
        </nav>
    `);

    // Filling <ul> with <li> elements
    const navBarItems = routes.map(route => navItem(route));
    navBar.find('ul').append(navBarItems);
    
    // Adding hamburger menu for smaller screen widths
    const hamburger = $(`
    <li class="hamburger">
        <div class="dropdown dropleft">
            <button class="hamburgerButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-bars"></i> 
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Home</a>
                <a class="dropdown-item" href="rooms">Rooms</a>
                <a class="dropdown-item" href="treatments">Treatments</a>
                <a class="dropdown-item" href="bookings">Bookings</a>
            </div>
        </div>
    </li>
    `);

    // Appending hamburgert to the navbar
    navBar.find('ul').last().append(hamburger);

    fragment.append(navBar)

    return fragment;
};
