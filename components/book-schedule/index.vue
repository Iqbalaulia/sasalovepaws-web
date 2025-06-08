<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="row position-relative" data-aos="fade-up">
      <div class="col-lg-7 col-md-12 col-sm-12 col-12">
        <div class="consultation_content">
          <h6>Book a consultation</h6>
          <h2>Schedule a Visit Today!</h2>
          <form>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0">
                  <label class="text-white">Your Name:</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    class="form-control"
                    placeholder="Ex. John Andrew"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0 form_style">
                  <label class="text-white">Phone number:</label>
                  <input
                    type="text"
                    name="phone"
                    id="phonenum"
                    class="form-control"
                    placeholder="+ 5689 2589 6325"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0">
                  <label class="text-white">Select Date :</label>
                  <input
                    type="date"
                    name="date"
                    id="birthdate"
                    class="calender form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0 form_style">
                  <label class="text-white">Select Time:</label>
                  <input
                    type="time"
                    name="time"
                    id="clock"
                    class="clock form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-0">
                  <label class="text-white">Select Service :</label>
                  <select name="pets" id="pets" class="form-control">
                    <option value="pet">Pet Training</option>
                    <option value="dog">Dog Training</option>
                    <option value="cat">Cat Training</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <button
                type="submit"
                name="submitnow"
                id="submit_now"
                class="default-btn"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-12"></div>
      <figure
        class="consultation_left_top_shape mb-0 position-absolute left_right_shape"
      >
        <img
          src="assets/template/images/consultation_top_left_shape.png"
          alt=""
          class="img-fluid"
        />
      </figure>
    </div>
    <figure
      class="consultation_left_shape mb-0 position-absolute top_bottom_shape"
    >
      <img
        src="assets/template/images/consultation_left_shape.png"
        alt=""
        class="img-fluid"
      />
    </figure>
  </div>
</template>
<style scoped lang="scss">
.btn_wrapper {
  margin-top: 3.5rem;
}
</style>
