// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: `@visualizevalue/auctions-app-base`,
 
  alias: {
    '@base': '@visualizevalue/auctions-app-base',
  },

  css: [
    '~/assets/theme.css',
  ],
})
