import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home/Home.vue';
import BarbershopPage from "../views/BarbershopPage/BarbershopPage.vue";
import OrderDate from "../views/OrderDate/OrderDate.vue";
import Employee from "../views/Employee/Employee.vue";
import Order from "../views/Order/Order.vue";
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
    {
      path: '/order/date',
      component: OrderDate,
    },
    {
      path: '/employee',
      component: Employee,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/auth',
      component: Auth,
    },

  ],
});

export default router;
