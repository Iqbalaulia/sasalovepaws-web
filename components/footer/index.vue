<script setup lang="ts">
// Images
import footerRightShadeImages from "~/assets/template/images/footer_right_shape.png";
import footerHeadphoneImages from "~/assets/template/images/footer_headphone.png";
import footerLogoImages from "~/assets/images/logo/sasa_logo_preview_white.png";
</script>
<template>
  <div class="container">
    <div class="middle-portion">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-6 col-12">
          <div class="about_col">
            <a href="index.html">
              <figure>
                <img :src="footerLogoImages" alt="" class="img-fluid" />
              </figure>
            </a>
            <p>
              Tristirue nulla aliquet enim tortor at auctor urna nunc massa enim
              nec dui nunc mattis enim ut tellus perspicia aute irure repreaen
              ...
            </p>
            <div class="headphone_wrapper">
              <figure class="mb-0">
                <img :src="footerHeadphoneImages" alt="" class="img-fluid" />
              </figure>
              <div class="headphone_content">
                <a href="tel:+568925896325" class="text-decoration-none d-block"
                  >+5689 2589 6325</a
                >
                <span>Got Questions? Call us 24/7</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-12 d-lg-block d-none">
          <div class="hours_col">
            <h3>Working Hours</h3>
            <ul class="list-unstyled">
              <li>
                <p>Monday – Saturday</p>
              </li>
              <li>
                <span>12:00 pm – 14:45 pm</span>
              </li>
              <li>
                <p>Sunday – Thursday</p>
              </li>
              <li>
                <span>17.30 pm – 00.00 am</span>
              </li>
              <li>
                <p>Friday – Saturday</p>
              </li>
              <li>
                <span>17.30 pm – 00.00 am</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-12 d-md-block d-none">
          <div class="links_col">
            <h3>Navigation</h3>
            <ul class="list-unstyled">
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="about.html">About us</a>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="services.html">Services</a>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="shop.html">Our Shop</a>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="packages.html">Packages</a>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <a href="gallery.html">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-sm-block d-none">
          <div class="contact_col">
            <h3>Contact Us</h3>
            <ul class="list-unstyled">
              <li>
                <p>Address:</p>
              </li>
              <li>
                <span>121 King Street Melbourne, 3000, Australia</span>
              </li>
              <li>
                <p>Email:</p>
              </li>
              <li class="mail">
                <a
                  href="mailto:info@pawshpetcare.com"
                  class="text-decoration-none"
                  >info@pawshpetcare.com</a
                >
              </li>
            </ul>
            <ul class="list-unstyled">
              <li class="icons">
                <a href="#"
                  ><i
                    class="fa-brands fa-facebook-f hover-effect"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
              <li class="icons">
                <a href="#"
                  ><i
                    class="fa-brands fa-twitter hover-effect"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
              <li class="icons">
                <a href="#"
                  ><i
                    class="fa-brands fa-instagram mr-0 hover-effect"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-portion">
    <div class="col-12">
      <div class="copyright">
        <p>Copyright © 2023 pawshpetcare All rights reserved.</p>
      </div>
    </div>
  </div>
  <figure class="mb-0 footer_right_shape position-absolute top_bottom_shape">
    <img :src="footerRightShadeImages" alt="" class="img-fluid" />
  </figure>
</template>
