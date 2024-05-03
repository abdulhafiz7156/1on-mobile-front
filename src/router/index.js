import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home/Home.vue';
import BarberProfile from '../views/barber/BarberProfile.vue';
import ServiceCard from '../components/ServiceCard/card.vue';
import ServiceCardWithoutImage from '../components/ServiceCardWithoutImage/CardWithoutImage.vue';
import Auth from '../views/Auth/Auth.vue';

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
    {
      path: '/auth',
      component: Auth,
    },
  ],
});

export default router;
