<template>
  <!-- ABOUT -->
  <div class="home_page_section relative" id="about">
    <div class="arlo_tm_about_wrapper_all">
      <div class="container">
        <div class="arlo_tm_title_holder">
          <h3>About Me</h3>
          <span>Main informations about me</span>							</div>
        <div class="arlo_tm_about_wrap">
          <div class="author_wrap">

            <div class="leftbox">

              <div class="about_image_wrap parallax" data-relative-input="true">

                <div class="image layer" data-depth="0.1">
                  <img src="@/assets/img/about/1.jpg" alt="" />
                </div>

                <div class="border layer" data-depth="0.2">
                  <img src="@/assets/img/about/550x640.jpg" alt="" />
                  <div class="inner"></div>
                </div>

              </div>

            </div>

            <div class="rightbox">
              <div class="arlo_tm_mini_title_holder">
                <h4>I'm Xiao Yuan and <span class="arlo_tm_animation_text_word"></span></h4>
              </div>
              <div class="definition">
                <p>Hi! My name is <strong>Xiao Yuan</strong>. You can just call me <strong>Sean</strong>. I am a Java Developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design and development process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
              </div>
              <div class="about_short_contact_wrap">
                <ul>
                  <li>
                    <span><label>Birthday:</label> 26.12.1995</span>												</li>
                  <li>
                    <span><label>Age:</label> 28</span>												</li>
                  <li>
                    <span><label>City:</label> Shanghai, China</span>												</li>
                  <li>
                    <span><label>Interests:</label> Guitar</span>												</li>
                  <li>
                    <span><label>Study:</label> University of Bristol</span>												</li>
                  <li>
                    <span><label>Degree:</label> Master</span>												</li>
                  <li>
                    <span><label>Website:</label> <a href="#">imyuanxiao.com</a></span>												</li>
                  <li>
                    <span><label>Mail:</label> <a href="imyuanxiao@126.com">imyuanxiao&#64;126.com</a></span>												</li>
                  <li>
                    <span><label>Phone:</label> +44 74 2189 8341</span>												</li>
                  <li>
                    <span><label>Wechat:</label> 13524342068</span>												</li>
                </ul>
              </div>
              <div class="buttons_wrap">
                <ul>
                  <li>
                    <a href="/"><span>Download CV</span></a>												</li>
                  <li class="anchor">
                    <a href="#contact"><span>Send Message</span></a>												</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /ABOUT -->
</template>

<script>
import $ from 'jquery';
import Parallax from 'parallax-js'; // import Parallax library

export default {
  name: "HomeAbout",
  mounted() { // call arlo_tm_about_animation function after component mounted
    this.arlo_tm_about_animation();
  },methods: {
    arlo_tm_about_animation() {
      "use strict";
      if ($('.parallax').length > 0) {
        var scene = $('.parallax').get(0);
        var parallax = new Parallax(scene, {
          relativeInput: true,
          onReady: function() {
            console.log('ready!');
          }
        });
      }
    },
  }
};
</script>

<style scoped>

</style>