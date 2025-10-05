<script lang="ts" setup>
import Navbar from "~/components/navbar/index.vue";
import SubBanner from "~/components/banner/sub-banner.vue";
import Statistics from "~/components/statistic/index.vue";
import Footer from "~/components/footer/index.vue";
import Testimonials from "~/components/testimonials/index.vue";
import PhotoGallery from "~/components/gallery/PhotoGallery.vue";
</script>
<template>
  <section class="sub-banner-section-outer">
    <Navbar />
    <SubBanner
      title="Gallery"
      description="Renectus sit aliquam mattis orci dignissim sed saritas arcu semper felis morbi vulrautate nerue mattis assa lectus."
      breadcrumbHome="Home"
      breadcrumbCurrent="Gallery"
    />
  </section>
  <section class="gallery_section">
    <PhotoGallery />
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
