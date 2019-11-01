<template>
  <div>
    <section id="home">
      <div class="h-60 s-home">
        <div class="header-box">
          <div>
            <h1 class="text-center">Freight Business at Your Fingertips.</h1>
            <p class="mt-3 text-center">Powering international freight over 150 companies</p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your business email"
                aria-label="Enter your business email"
                aria-describedby="basic-addon2"
              >
              <div class="input-group-append">
                <button
                  type="submit"
                  class="btn-lg input-group-text"
                  id="basic-addon2"
                >KEEP ME UPDATED</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ourServices" class="s-services">
      <h1 class="text-center display-4 mb-5">Our Services</h1>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 p-2">
            <div class="service-container">
              <router-link to="/ocean-freight" tag="a">
                <img
                  src="https://www.universalcargo.com/wp-content/uploads/container-ship-import-export-business-logistic.png"
                  alt="Ocean Freight"
                  class="img-fluid thumb"
                >
                <div class="service-overlay">
                  <h2 class="text-center">Ocean freight</h2>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 p-2">
            <div class="service-container">
              <router-link to="/ocean-freight" tag="a">
                <img
                  src="https://www.universalcargo.com/wp-content/uploads/container-ship-import-export-business-logistic.png"
                  alt="Ocean Freight"
                  class="img-fluid thumb"
                >
                <div class="service-overlay">
                  <h2 class="text-center">Ocean freight</h2>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 p-2">
            <div class="service-container">
              <router-link to="/ocean-freight" tag="a">
                <img
                  src="https://www.universalcargo.com/wp-content/uploads/container-ship-import-export-business-logistic.png"
                  alt="Ocean Freight"
                  class="img-fluid thumb"
                >
                <div class="service-overlay">
                  <h2 class="text-center">Ocean freight</h2>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 p-2">
            <div class="service-full--container">
              <img
                src="https://images.unsplash.com/photo-1514982127339-266dcf5c399e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1879&q=80"
                alt="Our Services"
                class="thumb service-img--row img-fluid"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="howItWorks" class="s-how">
      <h1 class="text-center display-4 mb-5">How It Works</h1>
    </section>
    <carousel/>
  </div>
</template>

<script>
import Carousel from "./CarouselHome.vue";

export default {
  name: "Home",
  components: {
    Carousel
  }
};
</script>

