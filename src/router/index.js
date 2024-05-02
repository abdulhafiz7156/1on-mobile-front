import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import BarbershopPage from "../views/BarbershopPage/BarbershopPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/barbershop/',
            component: BarbershopPage,
        },
        // {
        //     path: '/auth/registration/',
        //     component: Home,
        // },
        // {
        //     path: '/auth/login',
        //     component: Home,
        // },
    ],
});

export default router;
