// bookings.js

import $ from 'jquery';
import { hideHomePage, hideLogin, displayDate } from './../common/index';
import { hideRegister } from './../common/index';
import { handleLogout } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';


export const bookings = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    hideLogin();
    displayDate();
    addCart();
    displayCart();

    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });

    $('#days-to-cart').on('click', function(e) {
        let days = $('#visitDays').text();
        localStorage.setItem('days', days);
        displayCart();
    });



    return fragment;
};
