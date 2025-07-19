<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import testimonialImage1 from "~/assets/template/images/testimonials_image1.jpg";
import testimonialImage2 from "~/assets/template/images/testimonials_image2.jpg";
import testimonialImage3 from "~/assets/template/images/testimonials_image3.jpg";
import testimonialImage4 from "~/assets/template/images/testimonials_image4.jpg";
import testimonialImage5 from "~/assets/template/images/testimonials_image5.jpg";
import testimonialImage6 from "~/assets/template/images/testimonials_image6.jpg";
import testimonialCircles1 from "~/assets/template/images/testimonials_circle1.png";
import testimonialCircles2 from "~/assets/template/images/testimonials_circle2.png";
import testimonialCircles3 from "~/assets/template/images/testimonials_circle3.png";
import testimonialRightSide from "~/assets/template/images/testimonials_rightside_shape.png";
import testimonialQuote from "~/assets/template/images/testimonials_quote.png";

interface SlideState {
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
  slidingToIndex: number;
}

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
};

const testimonialImages = [
  {
    class: "testimonials_image1",
    src: testimonialImage1,
  },
  {
    class: "testimonials_image2",
    src: testimonialImage2,
  },
  {
    class: "testimonials_image3",
    src: testimonialImage3,
  },
  {
    class: "testimonials_image4",
    src: testimonialImage4,
  },
  {
    class: "testimonials_image5",
    src: testimonialImage5,
  },
  {
    class: "testimonials_image6",
    src: testimonialImage6,
  },
];

const testimonialCircles = [
  {
    class: "testimonials_circle1",
    src: testimonialCircles1,
  },
  {
    class: "testimonials_circle2",
    src: testimonialCircles2,
  },
  {
    class: "testimonials_circle3",
    src: testimonialCircles3,
  },
];

const testimonials = [
  {
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit na aut odit aut fugit, sed quia consearuntuo magni lores eos qui ratione volutatem sequi nesciuntpor auisuam est rui dolorem ipsum.",
    name: "Daniel James",
    role: "Happy Client",
    stars: 5,
  },
  {
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit na aut odit aut fugit, sed quia consearuntuo magni lores eos qui ratione volutatem sequi nesciuntpor auisuam est rui dolorem ipsum.",
    name: "Daniel James",
    role: "Happy Client",
    stars: 5,
  },
];

const currentSlide = ref<SlideState>({
  currentSlideIndex: 0,
  prevSlideIndex: 0,
  slidesCount: testimonials.length,
  slidingToIndex: 0,
});

const carouselRef = ref(null);

function onSlideChange(index: number) {
  currentSlide.value.currentSlideIndex = index;
}

function goToSlide(index: number) {
  console.log("index", index);
  console.log("=====", currentSlide.value.currentSlideIndex);
  if (carouselRef.value) {
    currentSlide.value.currentSlideIndex;
    carouselRef.value.slideTo(index);
  }
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
        <div class="testimonials_heading_content">
          <h6>Testimonials</h6>
          <h2>What Our Client’s Have to Say!</h2>
        </div>
        <Carousel
          ref="carouselRef"
          v-bind="carouselConfig"
          @slide-start="onSlideChange"
        >
          <Slide v-for="(testimonial, idx) in testimonials" :key="idx">
            <div class="testimonials_content position-relative">
              <p class="paragraph">{{ testimonial.content }}</p>
              <ul class="list-unstyled">
                <li v-for="star in testimonial.stars" :key="star">
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
              <h3>{{ testimonial.name }}</h3>
              <p class="text-size-18">{{ testimonial.role }}</p>
              <figure class="testimonials_quote mb-0 position-absolute">
                <img :src="testimonialQuote" alt="" class="img-fluid" />
              </figure>
            </div>
          </Slide>

          <template #addons>
            <div class="custom-pagination">
              <button
                v-for="(item, index) in testimonials"
                :key="index"
                @click="goToSlide(index)"
                :class="{ active: currentSlide.currentSlideIndex === index }"
              ></button>
            </div>
          </template>
        </Carousel>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-md-block d-none">
        <div class="testimonials_image">
          <figure
            v-for="(image, index) in testimonialImages"
            :key="index"
            :class="[image.class, 'mb-0 position-absolute']"
          >
            <img :src="image.src" alt="" class="img-fluid hover-effect" />
          </figure>
          <figure
            v-for="(circle, index) in testimonialCircles"
            :key="index"
            :class="[circle.class, 'mb-0']"
          >
            <img :src="circle.src" alt="" class="img-fluid" />
          </figure>
          <figure
            class="testimonials_rightside_shape mb-0 position-absolute left_right_shape"
          >
            <img :src="testimonialRightSide" alt="" class="img-fluid" />
          </figure>
        </div>
      </div>
    </div>
    <figure
      class="testimonials_left_shape mb-0 position-absolute top_bottom_shape"
    >
      <img
        src="assets/template/images/testimonials_left_shape.png"
        alt=""
        class="img-fluid"
      />
    </figure>
    <figure
      class="testimonials_right_shape mb-0 position-absolute top_bottom_shape"
    >
      <img
        src="assets/template/images/testimonials_right_shape.png"
        alt=""
        class="img-fluid"
      />
    </figure>
  </div>
</template>

<style scoped lang="scss">
.testimonials_image {
  position: relative !important;

  .testimonials_image1 {
    bottom: auto !important;
  }

  .testimonials_image3 {
    bottom: -450px !important;
  }
}
.custom-pagination {
  display: flex;
  gap: 12px;
  margin-top: 0.2rem;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #e5e7eb;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #f59e0b;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
