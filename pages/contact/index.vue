<script setup lang="ts">
import {
  Contact,
  Footer,
  Statistic,
  BannerSubBanner,
  Navbar,
  Map,
} from "#components";
</script>

<template>
  <section class="sub-banner-section-outer">
    <Navbar />
    <BannerSubBanner
      title="Contact Us"
      description="Renectus sit aliquam mattis orci dignissim sed saritas arcu semper felis morbi vulrautate nerue mattis assa lectus."
      breadcrumbHome="Home"
      breadcrumbCurrent="Contact Us"
    />
  </section>
  <section class="contact_info_section position-relative">
    <Contact />
  </section>
  <section class="contact_map_section">
    <Map />
  </section>
  <section class="stats_news_combo_section">
    <Statistic />
  </section>
  <section class="footer-section">
    <Footer />
  </section>
</template>
