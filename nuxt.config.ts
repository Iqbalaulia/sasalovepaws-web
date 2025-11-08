export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    // css files
    "@/assets/template/css/style.css",
    "@/assets/template/css/mediaqueries.css",
    "@/assets/template/css/owl.carousel.min.css",
    "@/assets/template/css/owl.theme.default.min.css",

    // scss files
    "@/assets/scss/style.scss",
  ],

  app: {
    head: {
      script: [
        // {
        //   src: "/assets/admin/js/config.js",
        // },
      ],
    },
  },

  plugins: ["~/plugins/body-scripts.client.ts"],
  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
});