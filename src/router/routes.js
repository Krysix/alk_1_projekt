// Function adding all paths with their respective components, imported from views folder.

import { home, rooms, treatments, bookings, login, register } from '../views';

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: home,
        data: {}
    },
    {
        name: 'Rooms',
        path: '/rooms',
        component: rooms,
        data: {}
    },
    {
        name: 'Treatments',
        path: '/treatments',
        component: treatments,
        data: {}
    },
    {
        name: 'Bookings',
        path: '/bookings',
        component: bookings,
        data: {}
    },
    {
        name: 'Login',
        path: '/login',
        component: login,
        data: {}
    },
    {
        name: 'Register',
        path: '/register',
        component: register,
        data: {}
    }
];