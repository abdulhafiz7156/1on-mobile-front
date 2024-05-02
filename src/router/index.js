import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
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
            path: '/barber/profile',
            component: BarberProfile,
        },
        {
            path: '/sevice/cards',
            component: ServiceCard,
        },
        {
            path: '/servicecardwithoutimage/cards',
            component: ServiceCardWithoutImage,
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
