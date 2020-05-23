// login.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';


export const login = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();

    return fragment;
};
