// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],

  googleFonts: {
    families: {
      Inter: '200..700',
      'Inria+Serif': [300, 400, 700]
    }
  },

  css: [
    '@/assets/css/reset.css',
    '@/assets/css/variables.css',
    '@/assets/css/main.css',
  ],

})
