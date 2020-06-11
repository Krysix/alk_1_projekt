// home.js

import $ from 'jquery';
import { displayHomePage, hideRegister, hideLogin, hideDate } from './../common/index';
import { sliderControl } from './../common/index';
import { keepLogin } from './../common/index';
import { handleLogout } from './../common/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';



export const home = () => {
    const fragment = $(new DocumentFragment());

    displayHomePage();
    hideDate();
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
        console.log('logout');
        handleLogout(e)
    });


    return fragment;
};

