module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  build: {
    vendor: ['axios','element-ui']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api', {
      target: 'http://127.0.0.1:8080'
    }]
  ],
  css: [
    {
      src: '~assets/index.less',
      lang: 'less'
    },{
      src: 'element-ui/lib/theme-chalk/index.css'
    }
  ],
  plugins: ['~plugins/index.js','~global/index.js']
}
