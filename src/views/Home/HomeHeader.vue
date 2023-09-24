<template>
  <div class="arlo_tm_section" id="home">
    <div class="arlo_tm_hero_header_wrap">
      <div class="arlo_tm_universal_box_wrap">

        <div class="bg_wrap">
          <div class="overlay_image hero jarallax" data-speed="0.1"></div>
          <div class="overlay_color hero"></div>
        </div>

        <div class="content hero">
          <div class="inner_content">

            <div class="image_wrap">
              <img src="@/assets/img/hero/img.jpg" alt="" />
            </div>

            <div class="name_holder">
              <h3>{{$t('header.name1')}} <span>{{$t('header.name2')}}</span></h3>
            </div>
            <div class="text_typing">
              <p>I'm a <span class="arlo_tm_animation_text_word"></span></p>
            </div>
          </div>
        </div>

        <div class="arlo_tm_arrow_wrap bounce anchor">
          <a href="#" @click.prevent="smoothScroll('#about')"><i class="xcon-angle-double-down"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {animateText, smoothScroll} from '@/utils/utils';

export default {
  name: "HomeHome",
  mounted() {
    const el = this.$el.querySelector('.arlo_tm_animation_text_word');
    animateText(el);
  },
  setup() {
    return {
      smoothScroll
    };
  }
}

</script>

<style scoped>


</style>