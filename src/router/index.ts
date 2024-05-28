import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import archivedOrder from "../views/archivedOrder/archivedOrder.vue";
import rateOrder from "../views/rateOrder/rateOrder.vue";
import BarberProfile from '../views/barber/BarberProfile.vue';
import ServiceCard from '../views/Services/ServiceCard.vue';
import BarbershopPage from "../views/BarbershopPage/BarbershopPage.vue";
import Employee from "../views/Employee/Employee.vue";
import Order from "../views/Order/Order.vue";
import Auth from "../views/Auth/Auth.vue";
import canceledOrder from "../views/canceledOrder/canceledOrder.vue";


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
      path: '/barber/:id',
      component: BarberProfile,
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
    {
      path: '/order/archived',
      component: archivedOrder,
    },
    {
      path: '/order/rate',
      component: rateOrder,
    },
    {
      path: '/order/canceled',
      component: canceledOrder,
    },

  ],
});

export default router;
