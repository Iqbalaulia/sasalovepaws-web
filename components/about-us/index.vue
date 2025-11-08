<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 col-12">
        <div class="about_images_wrapper position-relative">
          <figure class="mb-0 about_main_image">
            <NuxtImg
              src="/assets/images/banner/banner_4.jpg"
              alt=""
              width="550"
              height="677"
              class="img-fluid"
            />
          </figure>
          <figure class="mb-0 about_left_image position-absolute">
            <NuxtImg
              src="/assets/images/banner/banner_3.jpg"
              alt=""
              width="370"
              height="480"
              class="img-fluid"
            />
          </figure>
          <div class="about_left_box_wrapper">
            <figure class="mb-0">
              <img
                src="assets/template/images/about_left_box_image.png"
                alt=""
                class="img-fluid hover-effect"
              />
            </figure>
            <div class="left_box_content">
              <div class="span_wrapper">
                <span class="counter">25</span>
                <span class="plus">+</span>
              </div>
              <p class="text-size-18 mb-0">Years of Experience</p>
            </div>
          </div>
          <figure
            class="mb-0 about_foot_shape position-absolute top_bottom_shape"
          >
            <img
              src="assets/template/images/about_foot_shape.png"
              alt=""
              class="img-fluid"
            />
          </figure>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-12">
        <div class="about_content" data-aos="fade-right">
          <h6>About Us</h6>
          <h2>We are The Best For Your Pet Care</h2>
          <p class="text-size-18 about_first_p">
            Em ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua nulla.
          </p>
          <p class="text-size-18">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliuie commodo.
          </p>
          <div class="btn_wrapper">
            <NuxtLink class="text-decoration-none default-btn" to="/about"
              >Read more</NuxtLink
            >
          </div>
          <figure
            class="mb-0 about_content_shape position-absolute left_right_shape"
          >
            <img
              src="assets/template/images/about_content_shape.png"
              alt=""
              class="img-fluid"
            />
          </figure>
        </div>
      </div>
    </div>
    <figure class="mb-0 about_left_shape position-absolute top_bottom_shape">
      <img
        src="assets/template/images/about_left_shape.png"
        alt=""
        class="img-fluid"
      />
    </figure>
    <figure class="mb-0 about_right_shape position-absolute top_bottom_shape">
      <img
        src="assets/template/images/about_right_shape.png"
        alt=""
        class="img-fluid"
      />
    </figure>
  </div>
</template>
