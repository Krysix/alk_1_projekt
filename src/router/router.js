// Class adding router functionality

import $ from 'jquery';
import { oops } from '../views/oops';

export class Router {

    constructor(routes) {
        this.routes = routes;
        this.outlet;
        this.body = $(document.body);
    }

    mount(outlet) {
        this.outlet = outlet;
        this.body.on('routechange', (event, detail) => {
            const { path } = detail;
            this.navigate(path);
        });
    }

    init() {
        const path = location.pathname;
        this.navigate(path);
    }

    get(path) {
        // Finds route for required path or returns undefined
        return this.routes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    navigate(path, data = {}) {
        if (this.has(path)) {
            // obsluguje istniejaca sciezke
            const { component } = this.get(path);
            const html = component();
            // Renders new view inside "outlet" element
            this.outlet.empty().append(html);
        } else {
            // Handles non existing route (oops...)
            const html = oops();
            this.outlet.empty().append(html);
        }

        // Remembers new "state" in the browser
        // Sets chosen path
        history.pushState(data, '', path);
    }

}
