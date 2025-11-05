// plugins/body-scripts.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    // Function untuk membuat script element
    const loadScript = (src: any, defer = false) => {
      const script = document.createElement("script");
      script.src = src;
      if (defer) script.defer = true;
      document.body.appendChild(script);
    };

    // Load vendor.js dan app.js di body
    loadScript("/assets/admin/js/vendor.js", true);
    loadScript("/assets/admin/js/app.js", true);
  }
});
