// bookings.js

import $ from 'jquery';
import {hideHomePage, hideLogin} from './../common/index';
import {hideRegister} from './../common/index';
import {handleLogout} from './../common/index';


export const bookings = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    hideLogin();

    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });

    return fragment;
};
