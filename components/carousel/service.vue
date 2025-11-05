<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import petGrommingImages from "~/assets/template/images/services_image1.png";
import petCareImages from "~/assets/template/images/services_image2.png";
import veterinaryImages from "~/assets/template/images/services_image3.png";
import petTrainingImages from "~/assets/template/images/services_image4.png";

interface SlideState {
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
  slidingToIndex: number;
}

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: true,
  autoplay: 3000,
};
const services = [
  {
    img: petGrommingImages,
    title: "Pet Grooming",
    desc: "Quam nihil molestiae vel illum rui dolorem em fugiat voluptas nulla...",
    boxClass: "box1",
  },
  {
    img: petCareImages,
    title: "Pet Care",
    desc: "Ruam nihil molestiae vel illum rui dolorem em fugiat voluptas nulla...",
    boxClass: "box2",
  },
  {
    img: veterinaryImages,
    title: "Vaterinary",
    desc: "Guam nihil molestiae vel illum rui dolorem em fugiat voluptas nulla...",
    boxClass: "box3",
  },
  {
    img: petTrainingImages,
    title: "Pet Training",
    desc: "Euam nihil molestiae vel illum rui dolorem em fugiat voluptas nulla...",
    boxClass: "box4",
  },
];
const currentSlide = ref<SlideState>({
  currentSlideIndex: 0,
  prevSlideIndex: 0,
  slidesCount: 4,
  slidingToIndex: 0,
});

const carouselRef = ref(null);

function onSlideChange(index: number) {
  currentSlide.value.currentSlideIndex = index;
}
function goToSlide(index: number) {
  if (carouselRef.value) {
    currentSlide.value.currentSlideIndex = index;
    carouselRef.value.slideTo(index);
  }
}

defineComponent({
  name: "ServiceCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<template>
  <Carousel
    ref="carouselRef"
    :items-to-show="carouselConfig.itemsToShow"
    :wrap-around="carouselConfig.wrapAround"
    :autoplay="carouselConfig.autoplay"
    snap-align="center"
    @slide-start="onSlideChange"
  >
    <Slide v-for="(service, idx) in services" :key="idx">
      <div class="item">
        <div :class="['services_box', service.boxClass]">
          <figure>
            <img :src="service.img" alt="" class="img-fluid hover-effect" />
          </figure>
          <h3>{{ service.title }}</h3>
          <p class="text-size-18">
            {{ service.desc }}
          </p>
          <div class="btn_wrapper">
            <NuxtLink class="text-decoration-none" to="/services">
              Read more<i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <div class="custom-pagination">
        <button
          v-for="(item, index) in services"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentSlide?.currentSlideIndex === index }"
        ></button>
      </div>
    </template>
  </Carousel>
</template>

<style scoped>
.carousel {
  position: relative;
}

:deep(.carousel__slide) {
  padding: 5px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

:deep(.carousel__pagination) {
  bottom: -10px !important;
}
</style>
<style scoped lang="scss">
.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 0.2rem;

  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e5e7eb;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #f59e0b;
      width: 24px;
      height: 12px;
      border-radius: 6px;
    }
  }
}
</style>
