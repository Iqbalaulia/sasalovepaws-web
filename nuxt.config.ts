export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["@/assets/scss/style.scss"],

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
          preserveModules: false,
        },
      },
    },
  },
  //
  plugins: ["~/plugins/body-scripts.client.ts", "~/plugins/aos.client.ts"],
  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
});
