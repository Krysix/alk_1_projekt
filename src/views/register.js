// register.js

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

    hideHomePage();
    hideLogin();
    hideDate();
    addCart()
    displayCart();
    displayRegister();

    $('.weak').hide();
    $('.medium').hide();
    $('.strong').hide();
    $('#strength-text').hide();

    $('#password').on('input propertychange', function() {
        passStrength();
    });


    $('#signup').on('click', function(e) {
        handleRegister(e);
    });

    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });


    return fragment;
};
