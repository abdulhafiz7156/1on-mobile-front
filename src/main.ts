import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-blue/theme.css';
import 'primeicons/primeicons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app')

