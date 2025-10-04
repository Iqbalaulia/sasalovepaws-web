<script lang="ts" setup>
import Navbar from "~/components/navbar/index.vue";
import SubBanner from "~/components/banner/sub-banner.vue";
import Services from "~/components/service/index.vue";
import Statistics from "~/components/statistic/index.vue";
import Footer from "~/components/footer/index.vue";
import Testimonials from "~/components/testimonials/index.vue";
import OurMission from "~/components/service/OurMission.vue";
</script>
<template>
  <section class="sub-banner-section-outer">
    <Navbar />
    <SubBanner
      title="Services"
      description="Renectus sit aliquam mattis orci dignissim sed saritas arcu semper felis morbi vulrautate nerue mattis assa lectus."
      breadcrumbHome="Home"
      breadcrumbCurrent="Services"
    />
  </section>
  <section class="services_section position-relative">
    <Services />
  </section>
  <section class="mission_section">
    <OurMission />
  </section>
  <section class="testimonials_section position-relative">
    <Testimonials />
  </section>
  <section class="stats_news_combo_section">
    <Statistics />
  </section>
  <section class="footer-section">
    <Footer />
  </section>
</template>
