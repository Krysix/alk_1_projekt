// Function for displaying main page of the website.

import $ from 'jquery';
import { hideHomePage, hideRegister, hideDate } from './../common/index';
import { displayLogin } from './../common/index';
import { handleLogin } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';


export const login = () => {
    const fragment = $(new DocumentFragment());

    // Hiding and displaying related elements on the page
    hideHomePage();
    hideRegister();
    hideDate();
    addCart();
    displayCart();
    displayLogin();
    
    // Adding signin functionality to log In button
    $('#signin').on('click', function(e) {
        handleLogin(e);
    });


    return fragment;
};
