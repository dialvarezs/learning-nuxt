import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
})
