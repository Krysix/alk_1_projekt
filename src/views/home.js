// home.js

import $ from 'jquery';
import { displayHomePage, hideRegister, hideLogin } from './../common/index';
import { sliderControl } from './../common/index';
import { keepLogin } from './../common/index';
import { handleLogout } from './../common/index';

export const home = () => {
    const fragment = $(new DocumentFragment());

    displayHomePage();
    hideRegister();
    hideLogin();
    keepLogin();
    sliderControl();

    const checkUsBtn = $('#check-us');
    checkUsBtn.on('click', () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".slider-buttons").offset().top -30
        }, 1000);
    });

    $('.logoutBtn').on('click', function(e) {
        handleLogout(e)
    });

    return fragment;
};

