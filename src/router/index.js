import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import SteffCard from '../components/SteffCard/steffCrad.vue';
import BarberProfile from '../views/barber/BarberProfile.vue';
import ServiceCard from '../components/ServiceCard/ServiceCard.vue';
import ServiceCardWithoutImage from '../components/ServiceCardWithoutImage/ServiceCardWithoutImage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/servicecard',
            component: ServiceCard,
        },
        {
            path: '/servicecard/withoutimage',
            component: ServiceCardWithoutImage,
        },
        {
            path: '/barberprofile',
            component: BarberProfile,
        },
        {
            path: '/steffcard',
            component: SteffCard,
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
