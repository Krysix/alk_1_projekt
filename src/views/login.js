// login.js

import $ from 'jquery';
import { hideHomePage, hideRegister, hideDate } from './../common/index';
import { displayLogin } from './../common/index';
import { handleLogin } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';


export const login = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    hideDate();
    addCart();
    displayCart();
    displayLogin();
    

    $('#signin').on('click', function(e) {
        handleLogin(e);
    });


    return fragment;
};
