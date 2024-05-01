import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
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
