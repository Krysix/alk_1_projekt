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
        let arrival = $('#arrival').val();
        let departure = $('#departure').val()
        localStorage.setItem('days', days);
        localStorage.setItem('arrival', arrival);
        localStorage.setItem('departure', departure);
        displayCart();
    });



    return fragment;
};
