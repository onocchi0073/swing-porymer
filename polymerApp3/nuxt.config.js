export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  buildModules: ['nuxt-microcms-module'],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{ src: "~/plugins/chartjs-datalabels", ssr: false }
  // ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules:[
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    ],

  axios: {
    proxy: false // Can be also an object with default options
  },

  // proxy: {
  //   '/backend': {
  //     target: 'http://localhost:3000',
  //     pathRewrite: {
  //       '^/backend': '/'
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // server: {
  //   host: 'https://dev.d357dw4ckj56w9.amplifyapp.com',
  // },

  // serverMiddleware: [
  //   { path: 'backend/a', handler: '~/backend/a/index.js' },
  //   { path: 'backend/b', handler: '~/backend/b/py-run.js' },
  // ]
}