// home.js

import $ from 'jquery';
import { displayHomePage } from './../common/index';
import { sliderControl } from './../common/index';

export const home = () => {
    const fragment = $(new DocumentFragment());

    displayHomePage();

    sliderControl();

    const checkUsBtn = $('#check-us');
    checkUsBtn.on('click', () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".slider-buttons").offset().top -30
        }, 1000);
    });

    return fragment;
};

