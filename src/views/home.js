// Function for displaying main page of the website.

import $ from 'jquery';
import { displayHomePage, hideRegister, hideLogin, hideDate } from './../common/index';
import { sliderControl } from './../common/index';
import { keepLogin } from './../common/index';
import { handleLogout } from './../common/index';
import { jumpToRooms } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';



export const home = () => {
    const fragment = $(new DocumentFragment());

    // Hiding and displaying related elements on the page
    displayHomePage();
    hideDate();
    addCart();
    hideRegister();
    hideLogin();
    keepLogin();
    sliderControl();
    displayCart();

    // Adding slide down animation when clicking "check us" button
    const checkUsBtn = $('#check-us');
    checkUsBtn.on('click', () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".slider-buttons").offset().top -30
        }, 1000);
    });

    // Adding logout functionality to the page
    $('.logoutBtn').on('click', function(e) {
        handleLogout(e);
        e.preventDefault();
    });
    // Jumping to another path after clicking "Make a reservation" button
    $('#reserve').on('click', function() {
        jumpToRooms()
    });

    return fragment;
};

