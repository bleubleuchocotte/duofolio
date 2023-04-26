// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/main.scss";',
        },
      },
    },
  },
  css: ["@/assets/reset.css", "@/assets/lenis.css"],
  modules: ["@vueuse/nuxt", "@nuxtjs/prismic"],
  prismic: { endpoint: "https://test-duofolio.cdn.prismic.io/api/v2" },
});
