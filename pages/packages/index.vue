<script lang="ts" setup>
import Navbar from "~/components/navbar/index.vue";
import SubBanner from "~/components/banner/sub-banner.vue";
import Statistics from "~/components/statistic/index.vue";
import Footer from "~/components/footer/index.vue";
import Faq from "~/components/faq/index.vue";
import PackageDetails from "~/components/package/PackageDetails.vue";
</script>
<template>
  <section class="sub-banner-section-outer">
    <Navbar />
    <SubBanner
      title="Packages"
      description="Renectus sit aliquam mattis orci dignissim sed saritas arcu semper felis morbi vulrautate nerue mattis assa lectus."
      breadcrumbHome="Home"
      breadcrumbCurrent="Packages"
    />
  </section>
  <section class="packages_section">
    <PackageDetails />
  </section>
  <section class="faq_section">
    <Faq />
  </section>
  <section class="stats_news_combo_section">
    <Statistics />
  </section>
  <section class="footer-section">
    <Footer />
  </section>
</template>
