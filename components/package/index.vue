<script setup lang="ts">
import packageBoxImages from "~/assets/template/images/packages_box_left_shape.png";
import packageBoxLeftShadeImages from "~/assets/images/package_1.png";
import packageBoxRightShadeImages from "~/assets/images/package_2.png";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="packages_content">
          <h6>Our Packages</h6>
          <h2>Our Plans & Pricing</h2>
        </div>
      </div>
    </div>
    <div class="row position-relative" data-aos="fade-up">
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="packages_box">
          <h4>Friendly Package</h4>
          <div class="price_wrapper">
            <sup>$</sup>
            <span>100/</span>
            <span class="visit">Visit</span>
          </div>
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Bath (Hypo-Allergenic)</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Conditioning Treatment</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Ears Flushed & Cleaned</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Watering Plants</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Handscissor Finish</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Setting Length of Coat</p>
            </li>
          </ul>
          <div class="btn_wrapper">
            <a class="text-decoration-none default-btn" href="packages.html"
              >Purchase Now</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="packages_box">
          <h4>Family Package</h4>
          <div class="price_wrapper">
            <sup>$</sup>
            <span>140/</span>
            <span class="visit">Visit</span>
          </div>
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Bath (Hypo-Allergenic)</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Conditioning Treatment</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Ears Flushed & Cleaned</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Watering Plants</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Handscissor Finish</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Setting Length of Coat</p>
            </li>
          </ul>
          <div class="btn_wrapper">
            <a class="text-decoration-none default-btn" href="packages.html"
              >Purchase Now</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="packages_box">
          <h4>Exclusive Package</h4>
          <div class="price_wrapper">
            <sup>$</sup>
            <span>220/</span>
            <span class="visit">Visit</span>
          </div>
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Bath (Hypo-Allergenic)</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Conditioning Treatment</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Ears Flushed & Cleaned</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Watering Plants</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Handscissor Finish</p>
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>
              <p class="text-size-18">Setting Length of Coat</p>
            </li>
          </ul>
          <div class="btn_wrapper">
            <a class="text-decoration-none default-btn" href="packages.html"
              >Purchase Now</a
            >
          </div>
        </div>
      </div>
      <figure
        class="mb-0 packages_box_shape position-absolute left_right_shape"
      >
        <img :src="packageBoxImages" alt="" class="img-fluid" />
      </figure>
    </div>
    <figure class="mb-0 packages_left_shape position-absolute top_bottom_shape">
      <img :src="packageBoxLeftShadeImages" alt="" class="img-fluid" />
    </figure>
    <figure class="mb-0 packages_right_shape position-absolute">
      <img :src="packageBoxRightShadeImages" alt="" class="img-fluid" />
    </figure>
  </div>
</template>
