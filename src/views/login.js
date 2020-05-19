// login.js

import $ from 'jquery';

export const login = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Login</h1>');
    const p = $('<p>Lorem ipsum...</p>');

    fragment.append(h1).append(p);

    return fragment;
};
