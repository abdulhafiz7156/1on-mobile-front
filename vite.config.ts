import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';
import 'primevue/resources/themes/aura-light-green/theme.css'


export default defineConfig({
  plugins: [
      vue(),
      Components({
          dts: true,
          resolvers: [
              PrimeVueResolver()
          ]
      })
  ],

})
