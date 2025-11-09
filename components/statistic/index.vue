<script setup lang="ts">
// images
import statisticImages1 from "~/assets/template/images/statistics_image1.png";
import statisticImages2 from "~/assets/template/images/statistics_image2.png";
import statisticImages3 from "~/assets/template/images/statistics_image3.png";
import statisticImages4 from "~/assets/template/images/statistics_image4.png";
import newsletterImages from "/assets/images/banner/banner_10.png";
import newsletterYellowShape from "~/assets/template/images/newsletter_yellow_shape.png";
import newsletterPurpleFoot from "~/assets/template/images/newsletter_purple_foot.png";
import newsletterGreenFoot from "~/assets/template/images/newsletter_green_foot.png";
</script>

<template>
  <!-- STATISTICS SECTION -->
  <div class="statistics_section">
    <div class="container">
      <div class="row" data-aos="fade-up">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="statistics_box box1">
            <figure>
              <img
                :src="statisticImages1"
                alt=""
                class="img-fluid hover-effect"
              />
            </figure>
            <div class="statistics_span_wrapper">
              <span class="counter">85</span>
              <span class="plus">+</span>
            </div>
            <p class="text-size-18 mb-0">Awards Win</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="statistics_box box2">
            <figure>
              <img
                :src="statisticImages2"
                alt=""
                class="img-fluid hover-effect"
              />
            </figure>
            <div class="statistics_span_wrapper">
              <span class="counter">96</span>
              <span class="plus">k</span>
            </div>
            <p class="text-size-18 mb-0">Happy Clients</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="statistics_box box3">
            <figure>
              <img
                :src="statisticImages3"
                alt=""
                class="img-fluid hover-effect"
              />
            </figure>
            <div class="statistics_span_wrapper">
              <span class="counter">60</span>
              <span class="plus">+</span>
            </div>
            <p class="text-size-18 mb-0">Professional Vets</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="statistics_box box4">
            <figure>
              <img
                :src="statisticImages4"
                alt=""
                class="img-fluid hover-effect"
              />
            </figure>
            <div class="statistics_span_wrapper">
              <span class="counter">99</span>
              <span class="plus">.99%</span>
            </div>
            <p class="text-size-18 mb-0">Protection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- NEWSLETTER SECTION -->
  <div class="newsletter_section">
    <div class="container">
      <div class="newsletter_box position-relative">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-2">
            <figure class="newsletter_image mb-0 position-absolute">
              <NuxtImg
                width="500"
                :src="newsletterImages"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-12 order-md-2 order-1">
            <div class="scheduler_content">
              <h6>Schedule Professional Cat Care</h6>
              <h2>Reserve Professional Cat Sitting</h2>
              <div class="form-row">
                <div
                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center"
                >
                  <button
                    class="default-btn"
                    name="btnsubmit"
                    id="submitbtn"
                    type="submit"
                  >
                    Whatsapp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure
          class="newsletter_yellow_shape mb-0 position-absolute left_right_shape"
        >
          <img :src="newsletterYellowShape" alt="" class="img-fluid" />
        </figure>
      </div>
      <figure
        class="newsletter_purple_foot mb-0 position-absolute top_bottom_shape"
      >
        <img :src="newsletterPurpleFoot" alt="" class="img-fluid" />
      </figure>
      <figure
        class="newsletter_green_foot mb-0 position-absolute top_bottom_shape"
      >
        <img :src="newsletterGreenFoot" alt="" class="img-fluid" />
      </figure>
    </div>
  </div>
</template>

<style scoped lang="scss">
.newsletter_image {
  right: auto !important;
}
</style>
