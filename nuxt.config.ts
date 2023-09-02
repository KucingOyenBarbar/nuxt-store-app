// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/web-vitals',
    '@nuxtjs/robots',
    '@nuxtjs/color-mode',
    'nuxt-bootstrap-icons',
  ],

  app: {
    head: {},
  },

  css: ['~/assets/css/global.css'],

  webVitals: {
    provider: 'auto',
    debug: false, // debug enable metrics reporting on dev environments
    disabled: false,
  },

  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },

    preconnect: true,
    prefetch: true,
    preload: true,
  },
});
