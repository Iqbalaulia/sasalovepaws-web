<script setup lang="ts">
// components
import Navbar from "~/components/navbar/index.vue";
import Banner from "~/components/banner/index.vue";
import Services from "~/components/service/index.vue";
import AboutUs from "~/components/about-us/index.vue";
import BookSchedule from "~/components/book-schedule/index.vue";
import Package from "~/components/package/index.vue";
import Testimonials from "~/components/testimonials/index.vue";
</script>

<template>
  <div class="banner-section-outer">
    <Navbar />
    <Banner />
  </div>
  <section class="services_section position-relative">
    <Services />
  </section>
  <section class="about_section position-relative">
    <AboutUs />
  </section>
  <!-- <section class="consultation_section">
    <BookSchedule />
  </section> -->
  <section class="packages_section position-relative">
    <Package />
  </section>
  <section class="testimonials_section position-relative">
    <Testimonials />
  </section>
</template>
