import './style.css'
import {createApp} from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'primevue/resources/themes/aura-dark-blue/theme.css';
import uz from './languages/uz.json'
import ru from './languages/ru.json'
import en from './languages/en.json'

const i18n = createI18n({
    locale: localStorage.getItem('language'),
    messages: {
        uz: uz,
        ru: ru,
        en: en,
    },
})

createApp(App)
    .use(router)
    .use(ToastService)
    .use(PrimeVue)
    .use(i18n)
  .mount('#app')

