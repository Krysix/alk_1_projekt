// register.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';


export const register = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();

    return fragment;
};
