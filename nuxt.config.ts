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
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Selamat datang di Nuxt Store',
      titleTemplate: '%s - Nuxt Store',
      // titleTemplate: (titleChunk) => {
      //   return titleChunk ? `${titleChunk} - smartnation ID` : 'Site Title';
      // },
    },
  },

  css: ['~/assets/css/global.css'],

  // Configuration modules
  image: {
    // options
    inject: true,
    quality: 80,
    format: ['webp'],
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Poppins: [300, 400, 500, 600],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    // options...
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
});
