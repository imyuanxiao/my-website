<template>
  <!-- ABOUT -->
  <div class="home_page_section relative" id="about">
    <div class="about_wrapper_all">
      <div class="container">

        <div class="title_holder">
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

              <div class="mini_title_holder">
                <h4>I'm Xiao Yuan and <span class="animation_text_word2"></span></h4>
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
                    <a href="/"><span>Download CV</span></a>
                  </li>
                  <li class="anchor">
<!--                    <router-link to="/index#contact">Send Message</router-link>-->
                    <a href="#" @click.prevent="smoothScroll('#contact')"><span>Send Message</span></a>
                  </li>
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
import Parallax from 'parallax-js';

export default {
  name: "HomeAbout",
  mounted() {
    function about_animation(){
      if ($('.parallax').length > 0) {
        var scene = $('.parallax').get(0);
        var parallax = new Parallax(scene, {
          relativeInput: true,
          // onReady: function() { console.log('ready!');
          // }
        });
      }
    }
    about_animation();
  },
  setup() {
    function smoothScroll(target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    }
    return {
      smoothScroll
    };
  },
};
</script>

<style>
/*---------------------------------------------------*/
/*	03) ARLO ABOUT
/*---------------------------------------------------*/

.title_holder{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: left;
  padding-bottom: 100px;
  position: relative;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.title_holder.contact{padding-bottom: 93px;}
.title_holder:before{
  position: absolute;
  content: "";
  width: 6px;
  height: 72px;
  background-color: #E3872D;
  top: 2px;
}
.title_holder h3{
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: -.5px;
  padding-left: 25px;
  line-height: 1;
  /*	font-style: italic;*/
}
.title_holder span{
  font-size: 16px;
  font-family: "OPPOSans M";
  padding-left: 25px;
}
.about_wrapper_all{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background-color: #fff;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}

.arlo_tm_main_title_holder{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: left;
  margin-bottom: 120px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_main_title_holder.about{
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
}
.arlo_tm_main_title_holder h3{
  font-weight: 900;
  font-family: "OPPOSans M";
  color: #041230;
  font-size: 30px;
  line-height: 1;
}
.arlo_tm_main_title_holder h3 span{position: relative;}
.arlo_tm_main_title_holder h3 span:before{
  position: absolute;
  content: "";
  width: 50px;
  height: 4px;
  background-color: #041230;
  letter-spacing: 0px;
  bottom: -10px;
}
.about_wrapper_all{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background-color: #fff;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_main_title_holder{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: left;
  margin-bottom: 120px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_main_title_holder.about{
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
}
.arlo_tm_main_title_holder h3{
  font-weight: 900;
  font-family: "OPPOSans M";
  color: #041230;
  font-size: 30px;
  line-height: 1;
}
.arlo_tm_main_title_holder h3 span{position: relative;}
.arlo_tm_main_title_holder h3 span:before{
  position: absolute;
  content: "";
  width: 50px;
  height: 4px;
  background-color: #041230;
  letter-spacing: 0px;
  bottom: -10px;
}
.arlo_tm_about_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding-bottom: 122px;
  position: relative;
  margin-top: -6px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_about_wrap .author_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
  display: flex;
  align-items: center;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_about_wrap .leftbox{
  width: 35%;
  float: left;
  height: auto;
  padding-right: 40px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

}
.arlo_tm_about_wrap .leftbox .about_image_wrap{
  position: relative;
}
.arlo_tm_about_wrap .leftbox .about_image_wrap .image{
  position: absolute;
  z-index: 2;
}
.arlo_tm_about_wrap .leftbox .about_image_wrap .image .inner{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.arlo_tm_about_wrap .leftbox .about_image_wrap .border .inner{
  position: absolute;
  top: 25px !important;
  bottom: -25px !important;
  left: 25px !important;
  right: -25px !important;
  border: 10px solid #041230;
}
.arlo_tm_about_wrap .leftbox .about_image_wrap img{opacity: 1;}
.arlo_tm_about_wrap .rightbox{
  width: 65%;
  float: right;
  padding: 0px 0px 0px 65px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_about_wrap .subtitle{
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.arlo_tm_about_wrap .subtitle p{
  font-family: "OPPOSans M";
  color: #333;
  font-size: 15px;
  font-weight: 600;
}
.arlo_tm_about_wrap .definition{margin-bottom: 15px;}
.arlo_tm_about_wrap .definition p{color: #333;}
.arlo_tm_about_wrap .definition p strong{color: #E3872D;}

.arlo_tm_about_wrap .about_short_contact_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 13px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_about_wrap .arlo_tm_main_title_holder{margin-bottom: 40px;}
.arlo_tm_about_wrap .about_short_contact_wrap ul{
  margin: 0px;
  list-style-type: none;
}
.arlo_tm_about_wrap .about_short_contact_wrap ul li{
  margin: 0px 0px 10px 0px;
  width: 50%;
  float: left;
}
.arlo_tm_about_wrap .about_short_contact_wrap ul li:nth-of-type(2n){clear: right;}
.about_short_contact_wrap ul li label{
  font-family: "OPPOSans M";
  font-weight: 700;
  font-size: 13px;
  color: #000;
  min-width: 85px;
  display: inline-block;
}
.arlo_tm_about_wrap .about_short_contact_wrap ul li a{
  text-decoration: none;
  color: #000;
  position: relative;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.arlo_tm_about_wrap .about_short_contact_wrap ul li a:hover{color: #BD0A0D;}
.arlo_tm_about_wrap .buttons_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_about_wrap .buttons_wrap ul{
  margin: 0px;
  list-style-type: none;
}
.arlo_tm_about_wrap .buttons_wrap ul li{
  margin: 0px 30px 10px 0px;
  float: left;
}
.arlo_tm_about_wrap .buttons_wrap ul li:last-child{margin-right: 0px;}
.arlo_tm_about_wrap .buttons_wrap ul li a span{
  position: relative;
  z-index: 2;
}
.arlo_tm_about_wrap .buttons_wrap ul li a{
  text-decoration: none;
  color: #fff;
  background-color: #E3872D;
  font-weight: 600;
  font-family: "OPPOSans M";
  padding: 12px 35px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  overflow: hidden;;
}
.arlo_tm_about_wrap .buttons_wrap ul li a:before{
  position: absolute;
  content: "";
  top: 0px;
  height: 100%;
  left: -25%;
  width: 0%;
  background-color: #041230;
  transform: skew(50deg);
  transition-duration: .6s;
  z-index: 1;
}
.arlo_tm_about_wrap .buttons_wrap ul li a:hover:before{width: 180%;}




.mini_title_holder{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.mini_title_holder h4{
  line-height: 1;
  margin-bottom: 18px;
}
.mini_title_holder.contact h4{margin-bottom:30px;}
</style>