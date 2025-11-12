<script lang="ts" setup>
import { ref } from "vue";

const activeTab = ref("all");

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
</script>
<template>
  <section class="position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="gallery_content">
            <h6>Gallery</h6>
            <h2>Our Photos Gallery</h2>
          </div>
        </div>
      </div>
      <div class="tabs-box tabs-options">
        <ul class="nav nav-tabs">
          <li>
            <a
              href="javascript:void(0)"
              :class="{ active: activeTab === 'all' }"
              data-toggle="tab"
              @click="setActiveTab('all')"
              >All</a
            >
          </li>
          <li>
            <a
              data-toggle="tab"
              href="javascript:void(0)"
              class="walking"
              :class="{ active: activeTab === 'walking' }"
              @click="setActiveTab('walking')"
              >Walking & Sitting</a
            >
          </li>
          <li>
            <a
              data-toggle="tab"
              href="javascript:void(0)"
              class="grooming"
              :class="{ active: activeTab === 'grooming' }"
              @click="setActiveTab('grooming')"
              >Grooming</a
            >
          </li>
          <li>
            <a
              data-toggle="tab"
              href="javascript:void(0)"
              class="training"
              :class="{ active: activeTab === 'training' }"
              @click="setActiveTab('training')"
              >Training</a
            >
          </li>
          <li>
            <a
              data-toggle="tab"
              href="javascript:void(0)"
              class="health"
              :class="{ active: activeTab === 'health' }"
              @click="setActiveTab('health')"
              >Health & Wellness</a
            >
          </li>
        </ul>
        <div class="tab-content" data-aos="fade-up">
          <div
            id="all"
            v-if="activeTab === 'all'"
            class="in active show"
            data-aos="fade-right"
          >
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                class="gallery_image_right_shape mb-0 position-absolute left_right_shape"
              >
                <img
                  src="assets/images/gallery/gallery_image_right_shape.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="walking_sitting"
            v-if="activeTab === 'walking'"
            data-aos="fade-right"
          >
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                class="gallery_image_right_shape mb-0 position-absolute left_right_shape"
              >
                <img
                  src="assets/images/gallery/gallery_image_right_shape.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div
            id="grooming"
            v-if="activeTab === 'grooming'"
            data-aos="fade-right"
          >
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                class="gallery_image_right_shape mb-0 position-absolute left_right_shape"
              >
                <img
                  src="assets/images/gallery/gallery_image_right_shape.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div
            id="training"
            v-if="activeTab === 'training'"
            data-aos="fade-right"
          >
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                class="gallery_image_right_shape mb-0 position-absolute left_right_shape"
              >
                <img
                  src="assets/images/gallery/gallery_image_right_shape.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div
            id="health_wellness"
            v-if="activeTab === 'health'"
            data-aos="fade-right"
          >
            <div class="row position-relative">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="gallery_image">
                  <figure class="mb-0">
                    <img
                      src="assets/images/gallery/gallery_image3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <div class="overlay bottom-overlay">
                    <div class="box_hover_effect">
                      <a href="gallery.html" target="_blank">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                class="gallery_image_right_shape mb-0 position-absolute left_right_shape"
              >
                <img
                  src="assets/images/gallery/gallery_image_right_shape.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <figure
        class="gallery_big_foot_shape mb-0 position-absolute top_bottom_shape"
      >
        <img
          src="assets/images/gallery/gallery_big_foot_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
      <figure
        class="gallery_small_foot_shape mb-0 position-absolute top_bottom_shape"
      >
        <img
          src="assets/images/gallery/gallery_small_foot_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
    </div>
  </section>
</template>
