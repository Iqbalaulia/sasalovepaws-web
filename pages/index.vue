<template>
  <div class="banner-section-outer">
    <Navbar />
    <Banner />
  </div>
  <section class="services_section position-relative">
    <Services />
  </section>
</template>

<script setup lang="ts">
// components
import Navbar from "~/components/navbar/index.vue";
import Banner from "~/components/banner/index.vue";
import Services from "~/components/service/index.vue";
</script>
