import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import { Router, routes } from './router';
import { nav } from './navigation/nav';


const main = $('main');
const router = new Router(routes);

main.before(nav);

// Element main will be an outletem to the views
router.mount(main);

// After navigating to the website we will go to the specified path
router.init();
