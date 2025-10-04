<script setup lang="ts">
import Navbar from "~/components/navbar/index.vue";
import SubBanner from "~/components/banner/sub-banner.vue";
import Testimonials from "~/components/testimonials/index.vue";
import Statistics from "~/components/statistic/index.vue";
import Footer from "~/components/footer/index.vue";
</script>
<template>
  <div class="sub-banner-section-outer">
    <Navbar />
    <SubBanner />
  </div>

  <section class="aboutus_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 col-sm-12 col-12">
          <div class="about_images_wrapper position-relative">
            <figure class="mb-0 about_main_image">
              <img
                src="assets/template/images/about_aboutus_main_image.jpg"
                alt=""
                class="img-fluid"
              />
            </figure>
            <figure class="mb-0 about_left_image position-absolute">
              <img
                src="assets/template/images/about_aboutus_image2.jpg"
                alt=""
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
              class="mb-0 about_aboutus_shape position-absolute left_right_shape"
            >
              <img
                src="assets/template/images/about_aboutus_shape.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
          <div class="about_content" data-aos="fade-right">
            <h6>About Us</h6>
            <h2>World’s Best Team For Pet Services</h2>
            <p class="text-size-18 about_first_p">
              Em ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua nulla.
            </p>
            <p class="text-size-18">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliuie commodo.
            </p>
            <ul class="list-unstyled">
              <li class="first_list">
                <i class="fa fa-check" aria-hidden="true"></i>
                <p class="text-size-18">Quis nostrud exercita</p>
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>
                <p class="text-size-18">Commodi conseua</p>
              </li>
              <li class="third_list">
                <i class="fa fa-check" aria-hidden="true"></i>
                <p class="text-size-18">Laboris nisa aliuie coa</p>
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>
                <p class="text-size-18">Nulla pariatureum</p>
              </li>
            </ul>
            <div class="btn_wrapper">
              <a class="text-decoration-none default-btn" href="about.html"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="choose_us_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="choose_us_content" data-aos="fade-right">
            <h6>What we provide</h6>
            <h2>Why Do People Choose Us?</h2>
            <p class="text-size-18">
              Nam libero tempore, cum soluta nobis est eligendi optio cuma rue
              nihil impedit quo minus maiores alias consequatur aut perfer endis
              doloribus asperiores repellat.
            </p>
            <p class="text-size-18 second_p">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas.
            </p>
            <div class="btn_wrapper">
              <a class="text-decoration-none default-btn" href="services.html"
                >Read more</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="row position-relative">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="choose_us_box box1">
                <figure>
                  <img
                    src="assets/template/images/choose_us_box1.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
                <h3>Pet Nutritions</h3>
                <p class="text-size-18">
                  Duis autem vel eum iure reprehenderit rui in eau voluptate
                  esse.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="choose_us_box box2">
                <figure>
                  <img
                    src="assets/template/images/choose_us_box2.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
                <h3>Natural Prebiotic</h3>
                <p class="text-size-18">
                  Guis autem vel eum iure reprehenderit rui in eau voluptate
                  esse.
                </p>
              </div>
            </div>
            <figure
              class="mb-0 choose_us_content_shape position-absolute left_right_shape"
            >
              <img
                src="assets/template/images/choose_us_content_shape.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="choose_us_box box3">
                <figure>
                  <img
                    src="assets/template/images/choose_us_box3.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
                <h3>Friendly Support</h3>
                <p class="text-size-18">
                  Ruis autem vel eum iure reprehenderit rui in eau voluptate
                  esse.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="choose_us_box box4">
                <figure>
                  <img
                    src="assets/template/images/choose_us_box4.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
                <h3>Happy Pets</h3>
                <p class="text-size-18">
                  Nuis autem vel eum iure reprehenderit rui in eau voluptate
                  esse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure
        class="mb-0 choose_us_left_shape position-absolute top_bottom_shape"
      >
        <img
          src="assets/template/images/choose_us_left_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
      <figure
        class="mb-0 choose_us_right_shape position-absolute top_bottom_shape"
      >
        <img
          src="assets/template/images/choose_us_right_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
    </div>
  </section>

  <section class="team_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="team_content">
            <h6>Our Team</h6>
            <h2>Meet The Expert Team</h2>
          </div>
        </div>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="team_box">
            <figure>
              <img
                src="assets/template/images/our_team_image1.jpg"
                alt=""
                class="img-fluid"
              />
            </figure>
            <h3>Benjamin Shah</h3>
            <p class="text-size-18">Pet Specialist</p>
            <div class="team_social_icons">
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-facebook-f hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-twitter hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-instagram hover-effect mr-0"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="team_box">
            <figure>
              <img
                src="assets/template/images/our_team_image2.jpg"
                alt=""
                class="img-fluid"
              />
            </figure>
            <h3>Helene Paquet</h3>
            <p class="text-size-18">Parasitology Specialist</p>
            <div class="team_social_icons">
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-facebook-f hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-twitter hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-instagram hover-effect mr-0"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="team_box">
            <figure>
              <img
                src="assets/template/images/our_team_image3.jpg"
                alt=""
                class="img-fluid"
              />
            </figure>
            <h3>Itsuki Takahashi</h3>
            <p class="text-size-18">Veterinary Surgeon</p>
            <div class="team_social_icons">
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-facebook-f hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-twitter hover-effect"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i
                  class="fa-brands fa-instagram hover-effect mr-0"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonials_section position-relative">
    <Testimonials />
  </section>
  <section class="stats_news_combo_section">
    <Statistics />
  </section>
  <section class="footer-section">
    <Footer />
  </section>
</template>
