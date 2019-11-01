<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" id="carousel-1"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" id="carousel-2"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" id="carousel-3"></b-carousel-slide>
    </b-carousel>
    <div
      class="row"
      id="carousel-1___BV_indicators_"
      aria-owns="carousel-1___BV_inner_"
      aria-hidden="false"
      role="region"
      aria-busy="false"
    >
      <div class="col-lg-4 col-md-4 col-sm-4">
        <a
          role="button"
          id="carousel-1___BV_indicator_1_"
          tabindex="0"
          aria-current="true"
          aria-label="Goto Slide 1"
          aria-describedby="carousel-1"
          aria-controls="carousel-1___BV_inner_"
          class="active"
        >
          <div class="carousel--card p-3">
            <h3 class="text-center">Compare and Book</h3>
            <p
              class="text-center"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <a
          role="button"
          id="carousel-1___BV_indicator_2_"
          tabindex="0"
          aria-current="false"
          aria-label="Goto Slide 2"
          aria-describedby="carousel-2"
          aria-controls="carousel-1___BV_inner_"
          class
        >
          <div class="carousel--card p-3">
            <h3 class="text-center">Compare and Book</h3>
            <p
              class="text-center"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <a
          role="button"
          id="carousel-1___BV_indicator_3_"
          tabindex="0"
          aria-current="false"
          aria-label="Goto Slide 3"
          aria-describedby="carousel-3"
          aria-controls="carousel-1___BV_inner_"
          class
        >
          <div class="carousel--card p-3">
            <h3 class="text-center">Compare and Book</h3>
            <p
              class="text-center"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- <li role="button" id="carousel-1___BV_indicator_3_" tabindex="0" aria-current="true" aria-label="Goto Slide 3" aria-controls="carousel-1___BV_inner_" class="active" aria-describedby="carousel-3"></li> -->
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>