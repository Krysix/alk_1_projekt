// register.js

import $ from 'jquery';

export const register = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Register</h1>');
    const p = $('<p>Lorem ipsum...</p>');

    fragment.append(h1).append(p);

    return fragment;
};
