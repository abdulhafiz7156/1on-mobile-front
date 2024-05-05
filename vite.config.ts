import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';
// import { fileURLToPath, URL } from 'node:url'

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
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
