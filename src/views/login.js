// login.js

import $ from 'jquery';
import { hideHomePage, hideRegister } from './../common/index';
import { displayLogin } from './../common/index';
import { handleLogin } from './../common/index';
import { addCart } from './../common/index';
import { displayCart } from './../cart/index';




export const login = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    addCart();
    displayCart();
    displayLogin();
    

    $('#signin').on('click', function(e) {
        handleLogin(e);
    });
    

    return fragment;
};
