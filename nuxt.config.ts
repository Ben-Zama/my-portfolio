// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'slide-left',
      mode: 'out-in',
    },
  },
  modules: [
    '@vueuse/nuxt'
  ],
  css: [
    '@/assets/styles/main.scss'
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})
