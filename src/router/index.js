import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import BarberProfile from '../views/Barber/BarberProfile.vue';
import ServiceCard from '../views/Services/ServiceCard.vue';
import ServiceCardWithoutImage from '../views/ServiceCardWithoutImage/ServiceCardWithoutImage.vue';
import BarbershopPage from "../views/BarbershopPage/BarbershopPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/barbershop',
            component: BarbershopPage,
        },
        {
            path: '/services/',
            component: ServiceCard,
        },
        {
            path: '/services2/',
            component: ServiceCardWithoutImage,
        },
        {
            path: '/barber/',
            component: BarberProfile,
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
