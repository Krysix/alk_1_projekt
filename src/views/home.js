// home.js

import $ from 'jquery';
import { displayHomePage, hideRegister, hideLogin } from './../common/index';
import { sliderControl } from './../common/index';
import { keepLogin } from './../common/index';
import { handleLogout } from './../common/index';
import { addCart } from './../common/index';
import { displayCart } from './../cart/index';



export const home = () => {
    const fragment = $(new DocumentFragment());

    displayHomePage();
    addCart();
    hideRegister();
    hideLogin();
    keepLogin();
    sliderControl();
    displayCart();


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

