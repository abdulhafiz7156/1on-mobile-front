import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import BarberProfile from '../views/Barber/BarberProfile.vue';
import ServiceCard from '../components/ServiceCard/ServiceCard.vue';
import ServiceCardWithoutImage from '../components/ServiceCardWithoutImage/ServiceCardWithoutImage.vue';
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
