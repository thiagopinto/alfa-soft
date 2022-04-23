export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  env: {
    apiBaseUrl: process.env.API_BASE_URL,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'contact-vuejs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/v-mask' }, { src: '~plugins/filter' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/moment-module
    [
      '@nuxtjs/moment',
      {
        defaultLocale: 'pt-br',
        locales: ['pt-br'],
        defaultTimezone: 'America/Fortaleza',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/lewyuburi/nuxt-validate
    [
      'nuxt-validate',
      {
        fieldsBagName: 'veeFields',
        lang: 'pt_BR',
        nuxti18n: {
          locale: {
            'pt-BR': 'pt_BR',
          },
          rules: [
            'required',
            'min',
            'max',
            'size',
            'length',
            'confirmed',
            'regex',
          ],
        },
      },
    ],
    // https://github.com/Maronato/vue-toastification/tree/main
    [
      'vue-toastification/nuxt',
      {
        timeout: 3000,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${process.env.API_BASE_URL}/api/`,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
