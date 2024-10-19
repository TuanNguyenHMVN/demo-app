export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap'
        }
      ]
    }
  },
  plugins: [
    { src: '~/plugins/bootstrap-vue.js', mode: 'client' },
    '~/plugins/staking.js'
  ],
  css: [
    '@/assets/styles/style.scss',
    'bootstrap-icons/font/bootstrap-icons.css'
  ]
})
