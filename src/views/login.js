// login.js

import $ from 'jquery';
import {hideHomePage, hideRegister} from './../common/index';
import {displayLogin} from './../common/index';
import {handleLogin} from './../common/index';




export const login = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    displayLogin();

    $('#signin').on('click', function(e) {
        handleLogin(e);
    });
    

    return fragment;
};
