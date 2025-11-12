import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("app:mounted", () => {
      AOS.init({
        // Configuration
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        anchorPlacement: "top-bottom",
        offset: 100,
        delay: 0,

        // Settings that can be overridden on per-element basis
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });
    });

    // Refresh AOS when route changes
    nuxtApp.hook("page:finish", () => {
      AOS.refresh();
    });
  }
});
