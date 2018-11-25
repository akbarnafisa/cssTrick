module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'csstrick',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700|Playfair+Display:700|Montserrat:300,700' }
    ]
  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    { src: '~/assets/main.css', lang: 'css' },
    { src: '~/assets/main.scss', lang: 'scss' },
  ],
  plugins: [
    { src: '~/plugins/global.js' },
    // { src: '~plugins/ga.js', ssr: false }
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      '~/assets/main.scss',
    ]],
    '@nuxtjs/google-analytics'
  ],

  'google-analytics': {
    // 128160452 - craft
    // 128240051 - test
    id: 'UA-128240051-1',
    ecommerce: {
      enabled: true,
      enhanced: true
    }
  },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
