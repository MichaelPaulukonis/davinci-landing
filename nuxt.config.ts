const baseURL = '/davinci-landing/'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'], // Optional: for global base styles if needed

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  content: {},
  runtimeConfig: {
    public: {
      baseURL
    }
  },
  app: {
    baseURL,
    buildAssetsDir: 'assets',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}apple-touch-icon.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseURL}favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseURL}favicon-16x16.png` },
        { rel: 'manifest', href: `${baseURL}site.webmanifest` }
      ],
      // You can also add other head elements like meta tags here
    }
  }
})
