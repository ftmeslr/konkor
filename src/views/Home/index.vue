<template>
  <NavbarDashboard />
  <div class="section__01">
    <div class="flex container align-center justify-between">
      <div class="section__01--right">
        <h2 class="title">
          بنیاد علمی و آموزشی شفیعی اولین و قوی ترین آموزشگاه کنکور
        </h2>
        <p class="subTitle">
          بنیاد علمی و آموزشی شفیعی اولین و قوی ترین آموزشگاه کنکوربنیاد علمی و
          اولین و قوی ترین آموزشگاه کنکور
        </p>
      </div>
      <div class="section__01--left">
        <div class="section__01--img">
          <img src="@/assets/images/3-14.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="section__02 container">
    <div class="slider">
      <carousel :controls="true" :items-to-show="2">
        <slide v-for="slide in 2" :key="slide">
          <img style="width: 350px" src="@/assets/images/3-11.png" alt="" />
        </slide>
      </carousel>
    </div>
    <div class="video-banner">
      <img src="@/assets/images/3-010.png" alt="" />
    </div>
  </div>
  <div class="section__03">
    <div class="container">
      <div class="slider">
        <h2>خدمات ما</h2>
        <carousel :controls="true" :items-to-show="6">
          <slide v-for="slide in 6" :key="slide">
            <span>
              <img style="width: 100px" src="@/assets/images/3-01.png" alt="" />
              <p>اردوی نوروزی</p>
            </span>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
  <div class="section__04">
    <div class="container">
      <div class="slider">
        <h2>فروشگاه</h2>
        <carousel :controls="true" :items-to-show="1">
          <slide v-for="slide in 6" :key="slide">
            <span>
              <img style="width: 100%" src="@/assets/images/3-17.png" alt="" />
            </span>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
  <Footer topFooter="true"></Footer>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "home",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
