<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="contact_info_content">
              <h6>Our info</h6>
              <h2>Get in Touch</h2>
              <p class="text-size-18">
                Quis autem vel eum iure reprehenderit rui in ea voa ruam nihil
                molestiae conseruatur.
              </p>
            </div>
          </div>
        </div>
        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="contact_info_box box1 hover-effect">
              <div class="contact_info_box_image">
                <figure class="mb-0">
                  <img
                    src="assets/template/images/location.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
              </div>
              <div class="contact_info_box_content_wrapper">
                <h3>Location:</h3>
                <p class="text-size-16 mb-0">
                  121 King Street Melbourne, 3000, Australia
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="contact_info_box box2 hover-effect">
              <div class="contact_info_box_image">
                <figure class="mb-0">
                  <img
                    src="assets/template/images/phone.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
              </div>
              <div class="contact_info_box_content_wrapper">
                <h3>Phone:</h3>
                <p class="mb-0">
                  <a href="tel:+012(345)67899" class="text-decoration-none"
                    >+012 (345) 678 99
                  </a>
                </p>
                <p class="mb-0">
                  <a href="tel:+1234567847858" class="text-decoration-none"
                    >+12345678 478 58</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="contact_info_box box3 hover-effect">
              <div class="contact_info_box_image">
                <figure class="mb-0">
                  <img
                    src="assets/template/images/email.png"
                    alt=""
                    class="img-fluid hover-effect"
                  />
                </figure>
              </div>
              <div class="contact_info_box_content_wrapper">
                <h3>Email Us:</h3>
                <p class="mb-0">
                  <a
                    href="mailto:Info@pawshpetcare.com"
                    class="text-decoration-none"
                    >Info@pawshpetcare.com</a
                  >
                </p>
                <p class="mb-0">
                  <a
                    href="mailto:pawshpetcare@gmail.com"
                    class="text-decoration-none"
                    >pawshpetcare@gmail.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-12 col-sm-12 col-12" data-aos="fade-right">
        <div class="contact_info_form_content">
          <h6>Contact Us</h6>
          <h2>Send us a Message</h2>
          <p class="text-size-18">
            Officiis debitis aut rerum necessitatibus saepe eveniet voluta
            ratione voluptatem serui nesciunt.
          </p>
          <form
            id="contactpage"
            method="POST"
            action="https://html.designingmedia.com/pawsh/contact-form.php"
          >
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group mb-0">
                  <input
                    type="text"
                    name="fullname"
                    id="name"
                    class="form-control"
                    placeholder="Name:"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group mb-0">
                  <input
                    type="tel"
                    name="phone"
                    id="phonenum"
                    class="form-control"
                    placeholder="Phone:"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group mb-0">
                  <input
                    type="email"
                    name="emailaddress"
                    id="emailaddrs"
                    class="form-control"
                    placeholder="Email:"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-0">
                  <textarea
                    rows="3"
                    name="msg"
                    id="comment"
                    class="form-control"
                    placeholder="Message:"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <button
                type="submit"
                name="get_started"
                id="started"
                class="default-btn"
              >
                Send Now
              </button>
            </div>
          </form>
          <figure
            class="contact_info_right_shape mb-0 position-absolute left_right_shape"
          >
            <img
              src="assets/template/images/contact_info_right_shape.png"
              alt=""
              class="img-fluid"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
