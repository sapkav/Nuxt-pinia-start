// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: [
    // SCSS file in the project
    "@/assets/scss/main.scss", // you should add main.scss somewhere in your app
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
