// Function displaying necesarry elements on bookings page.

import $ from 'jquery';
import { hideHomePage, hideLogin, displayDate, modalText } from './../common/index';
import { hideRegister } from './../common/index';
import { handleLogout } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';


export const bookings = () => {
    const fragment = $(new DocumentFragment());

    //Hiding and displaying related elements on the page
    hideHomePage();
    hideRegister();
    hideLogin();
    displayDate();
    addCart();
    displayCart();

    // Changing navabar style to display which page we are on
    $('.navbar-nav li:eq(0)').css('color', '#202020');
    $('.navbar-nav li:eq(1)').css('color', '#202020');
    $('.navbar-nav li:eq(2)').css('color', '#202020');
    $('.navbar-nav li:eq(3)').css('color', '#b37436');

    // Adding logout functionality to the page
    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });

    // Adding function for changing number of days spent in the hotel to the cart.
    $('#days-to-cart').on('click', function(e) {
        let days = $('#visitDays').text();
        let arrival = $('#arrival').val();
        let departure = $('#departure').val()
        localStorage.setItem('days', days);
        localStorage.setItem('arrival', arrival);
        localStorage.setItem('departure', departure);
        displayCart();

        // Displaying modal text with the result
        modalText('You date was added to the cart!');

    });

    return fragment;
};
