// Function displaying necesarry elements on register page

import $ from 'jquery';
import { hideHomePage } from './../common/index';
import { hideLogin, hideDate } from './../common/index';
import { displayRegister } from './../common/index';
import { passStrength } from './../common/index';
import { handleRegister, handleLogout } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';


export const register = () => {
    const fragment = $(new DocumentFragment());

    // Hiding and displaying related elements on the page
    hideHomePage();
    hideLogin();
    hideDate();
    addCart()
    displayCart();
    displayRegister();

    // Initialy hiding graphical display of password strength
    $('.weak').hide();
    $('.medium').hide();
    $('.strong').hide();
    $('#strength-text').hide();

    // Adding password strenght meter on password input change
    $('#password').on('input propertychange', function() {
        passStrength();
    });

    // Appending function for registering to "sign up" button
    $('#signup').on('click', function(e) {
        handleRegister(e);
    });

    // Adding logout functionality to the page
    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });


    return fragment;
};
