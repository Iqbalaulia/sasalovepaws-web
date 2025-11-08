<script setup lang="ts">
import CarouselService from "~/components/carousel/service.vue";

defineComponent({
  name: "ServiceIndex",
  components: {
    CarouselService,
  },
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="services_content">
          <h6>Our Services</h6>
          <h2>We Provide Best Services For Your Pet’s</h2>
        </div>
      </div>
    </div>
    <div class="row position-relative" data-aos="fade-up">
      <CarouselService />
      <figure
        class="mb-0 services_box_shape position-absolute left_right_shape"
      >
        <img
          src="assets/template/images/services_box_left_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
    </div>
    <figure class="mb-0 services_left_shape position-absolute top_bottom_shape">
      <NuxtImg
        src="/assets/images/banner/banner_5.png"
        alt=""
        width="380"
        class="img-fluid"
      />
    </figure>
    <figure
      class="mb-0 services_right_shape position-absolute top_bottom_shape"
    >
      <NuxtImg
        src="/assets/images/banner/banner_7.png"
        alt=""
        width="380"
        class="img-fluid"
      />
    </figure>
  </div>
</template>
