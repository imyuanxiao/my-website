<template>
  <div class="arlo_tm_section" id="testimonials">
    <div class="arlo_tm_testimonials_wrapper_all">
      <div class="arlo_tm_universal_box_wrap">
        <div class="bg_wrap">
          <div class="overlay_image testimonial jarallax" data-speed="0"></div>
          <div class="overlay_color testimonial"></div>
        </div>
        <div class="content testimonial">
          <div class="arlo_tm_testimonial_wrap">
            <div class="container">
              <van-swipe class="carousel_wrap" :autoplay="3000" indicator-color="white" :show-indicators="false">
                <van-swipe-item class="item">
                  <div class="inner">
                    <div class="quotebox_wrap">
                      <i class="xcon-quote-left"></i>														</div>
                    <div class="definitions_wrap">
                      <p>“Arlo team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for works.”</p>
                    </div>
                    <div class="name_holder">
                      <p>Antonio Baraley, CEO Founder</p>
                    </div>
                  </div>
                </van-swipe-item>
                <van-swipe-item class="item">
                  <div class="inner">
                    <div class="quotebox_wrap">
                      <i class="xcon-quote-left"></i>														</div>
                    <div class="definitions_wrap">
                      <p>“We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design.”</p>
                    </div>
                    <div class="name_holder">
                      <p>Calena Gomez, AOC Designer</p>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {arlo_tm_jarallax} from "@/utils/utils.ts";

export default {
  name: "HomeTransition",
  mounted() {
    arlo_tm_jarallax();
  }
}
</script>

<style scoped>

</style>