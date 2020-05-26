// register.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';
import {hideLogin} from './../common/index';
import {displayRegister} from './../common/index';
import {passStrength} from './../common/index';
import {handleRegister} from './../common/index';


export const register = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideLogin();
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


    return fragment;
};
