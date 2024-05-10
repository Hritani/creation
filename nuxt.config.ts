// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* other module options */
      // styles: { configFile: '/settings.scss' }
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  /* For Nuxt 3.9.0+ */
  features: {
    inlineStyles: false
  },
})