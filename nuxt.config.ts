// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Inter: '200..700',
      'Inria+Serif': true
    }
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/reset.css'
  ],

})
