export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/template/css/style.css",
    "@/assets/template/css/mediaqueries.css",
    "@/assets/template/css/owl.carousel.min.css",
    "@/assets/template/css/owl.theme.default.min.css",
    "@/assets/scss/style.scss",
  ],

  vite: {
    css: {
      postcss: {
        plugins: [],
      },
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("style.css")) {
              return "vendor-css";
            }
            if (id.includes(".scss")) {
              return "app-scss";
            }
          },
          preserveModules: false,
        },
      },
    },
  },
  //
  plugins: ["~/plugins/body-scripts.client.ts", "~/plugins/aos.client.ts"],
  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
});
