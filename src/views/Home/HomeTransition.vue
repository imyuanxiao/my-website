<template>
  <!-- TESTIMONIALS -->
  <div class="home_page_section" id="testimonials">
    <div class="arlo_tm_testimonials_wrapper_all">
      <div class="arlo_tm_universal_box_wrap">
        <div class="bg_wrap">
          <div class="overlay_image testimonial jarallax" data-speed="0"></div>
          <div class="overlay_color testimonial"></div>
        </div>
        <div class="content testimonial">
          <div class="arlo_tm_testimonial_wrap">
            <div class="container">
              <div class="carousel_wrap">
                <ul class="owl-carousel">
                  <li class="item">
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
                  </li>
                  <li class="item">
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
                  </li>
                  <li class="item">
                    <div class="inner">
                      <div class="quotebox_wrap">
                        <i class="xcon-quote-left"></i>														</div>
                      <div class="definitions_wrap">
                        <p>“Awesome to work with Arlo. Good organized, easy to communicate with, responsive with next iterations.”</p>
                      </div>
                      <div class="name_holder">
                        <p>Torren Winston, Photographer.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /TESTIMONIALS -->
</template>

<script>
export default {
  name: "HomeTransition"
}
</script>

<style scoped>
/*---------------------------------------------------*/
/*	07) ARLO TESTIMONIALS
/*---------------------------------------------------*/

.arlo_tm_testimonials_wrapper_all{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_testimonial_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_testimonial_wrap .carousel_wrap{
  width: 100%;
  max-width: 730px;
  margin: 0px auto;
  height: auto;
  clear: both;
  text-align: center;
  cursor: e-resize;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_testimonial_wrap .carousel_wrap ul{
  margin: 0px;
  list-style-type: none;
}
.arlo_tm_testimonial_wrap .carousel_wrap ul li{margin: 0px;}
.arlo_tm_testimonial_wrap .carousel_wrap ul li .inner{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_testimonial_wrap .quotebox_wrap{
  clear: both;
  margin-bottom: 22px;
}
.arlo_tm_testimonial_wrap .quotebox_wrap i{
  color: #E3872D;
  font-size: 35px;
}
.arlo_tm_testimonial_wrap .definitions_wrap{
  clear: both;
  margin-bottom: 32px;
}
.arlo_tm_testimonial_wrap .definitions_wrap p{
  color: #fff;
  font-size: 27px;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 1.4;
}
.arlo_tm_testimonial_wrap .name_holder p{
  color: #fff;
  font-size: 18px;
  font-family: "Montserrat";
}

.universal_box_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.universal_box_wrap .bg_wrap{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
.universal_box_wrap .overlay_image{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 15;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.universal_box_wrap .overlay_video{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 15;
  overflow: hidden;
}
.universal_box_wrap .overlay_video video{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
}
.universal_box_wrap .overlay_color{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 20;
}
.universal_box_wrap .content{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
  z-index: 25;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.universal_box_wrap .overlay_image.testimonial{background-image: url("../src/assets/img/hero/3.jpg");}
.universal_box_wrap .overlay_color.testimonial{background-color: rgba(7,23,55,.8);}
.universal_box_wrap .content.testimonial{padding: 82px 0px 90px 0px;}
</style>