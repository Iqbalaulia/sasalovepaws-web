<script lang="ts" setup>
import type { SubBannerProps } from "~/types/interfaces";

const props = withDefaults(defineProps<SubBannerProps>(), {
  title: "About Us",
  description:
    "Senectus sit aliquam mattis orci dignissim sed saritas arcu semper felis morbi vulrautate nerue mattis assa lectus.",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "About Us",
});
</script>
<template>
  <section class="banner-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-2 col-md-12 col-sm-12 col-12 d-lg-block d-none"
        ></div>
        <div class="col-lg-8 col-md-12 col-sm-12 col-12 text-center">
          <div class="banner-section-content">
            <h1 data-aos="fade-up">{{ props.title }}</h1>
            <p data-aos="fade-right">{{ props.description }}</p>
            <div class="btn_wrapper" data-aos="fade-up">
              <span>{{ props.breadcrumbHome }} </span
              ><span class="slash">/</span
              ><span class="sub_span">{{ props.breadcrumbCurrent }}</span>
            </div>
            <figure
              class="sub_banner_content_top_shape mb-0 position-absolute left_right_shape"
            >
              <img
                src="assets/template/images/sub_banner_content_top_shape.png"
                alt=""
                class="img-fluid"
              />
            </figure>
            <figure
              class="sub_banner_pink_foot_shape mb-0 position-absolute top_bottom_shape"
            >
              <img
                src="assets/template/images/sub_banner_pink_foot.png"
                alt=""
                class="img-fluid"
              />
            </figure>
            <figure
              class="sub_banner_green_foot_shape mb-0 position-absolute top_bottom_shape"
            >
              <img
                src="assets/template/images/sub_banner_green_foot.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>
        </div>
        <div
          class="col-lg-2 col-md-12 col-sm-12 col-12 d-lg-block d-none"
        ></div>
      </div>
      <figure
        class="sub_banner_left_shape mb-0 position-absolute top_bottom_shape"
      >
        <img
          src="assets/template/images/sub_banner_left_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
      <figure
        class="sub_banner_right_shape mb-0 position-absolute top_bottom_shape"
      >
        <img
          src="assets/template/images/sub_banner_right_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
    </div>
  </section>
</template>
