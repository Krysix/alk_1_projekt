// bookings.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';


export const bookings = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();

    return fragment;
};
