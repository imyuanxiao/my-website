<template>
  <!-- PORTFOLIO -->
  <div class="home_page_section" id="projects">
    <div class="arlo_tm_portfolio_wrapper_all">

      <!-- PORTFOLIO FILTER -->
      <div class="arlo_tm_second_portfolio">
        <div class="container">
          <div class="arlo_tm_portfolio_wrap">
            <div class="title_holder portfolio">
              <h3>My Projects</h3>
              <span>Check out my latest projects</span>								</div>
            <div class="arlo_tm_portfolio_titles"></div>

            <ul class="arlo_tm_portfolio_filter">

              <li><a href="#projects" class="current" data-filter="*">All</a></li>
              <li><a href="#projects" data-filter=".design">Design</a></li>
              <li><a href="#projects" data-filter=".photography">Photography</a></li>
              <li><a href="#projects" data-filter=".development">Development</a></li>

            </ul>

            <ul class="arlo_tm_portfolio_list gallery_zoom">

              <li class="design">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="Aoc Productions" data-category="Design">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/1.jpg"></div>
                  </a>										</div>
              </li>
              <li class="photography">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="Ind Hed" data-category="Photography">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/2.jpg"></div>
                  </a>										</div>
              </li>
              <li class="development">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="Paper Mockup" data-category="Development">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/3.jpg"></div>
                  </a>										</div>
              </li>
              <li class="photography">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="The Nordic" data-category="Photography">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/4.jpg"></div>
                  </a>										</div>
              </li>
              <li class="design">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="Creatives Castle" data-category="Design">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/5.jpg"></div>
                  </a>										</div>
              </li>
              <li class="photography">
                <div class="entry arlo_tm_portfolio_animation_wrap" data-title="White Bag" data-category="Photography">
                  <a href="">
                    <img src="@/assets/img/portfolio/600x600.jpg" alt="" />
                    <div class="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/6.jpg"></div>
                  </a>										</div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <!-- /PORTFOLIO FILTER -->

    </div>
  </div>
  <!-- /PORTFOLIO -->
</template>

<script>
export default {
  name: "HomeProjects"
}
</script>

<style scoped>

/*---------------------------------------------------*/
/*	06) ARLO PORTFOLIO
/*---------------------------------------------------*/

.title_holder.portfolio{padding-bottom: 90px;}
.arlo_tm_portfolio_wrapper_all{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding-bottom: 70px;
  background-color: #fff;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_portfolio_wrapper_all .send_button{text-align: center;}
.arlo_tm_portfolio_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_portfolio_filter{
  width:100%;
  height: auto;
  text-align:left;
  list-style-type:none;
  margin: 0px 0px 13px 0px;
  display: inline-block;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_portfolio_filter li{
  display:inline-block;
  margin:0px 40px 0px 0px;
}
.arlo_tm_portfolio_filter li:last-child{margin-right: 0px;}
.arlo_tm_portfolio_filter li a{
  text-decoration:none;
  font-size:14px;
  font-weight:700;
  color:#000;
  display: inline-block;
  margin-bottom: 10px;
  position: relative;

  -webkit-transition: all .1s ease;
  -moz-transition: all .1s ease;
  -ms-transition: all .1s ease;
  -o-transition: all .1s ease;
  transition: all .1s ease;
}
.arlo_tm_portfolio_filter li a.current{color: #BD0A0D;}

/* PORTFOLIO LIST */

.arlo_tm_portfolio_list{
  list-style-type:none;
  margin: 0px 0px 0px -30px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_portfolio_list > li{
  width:33.3333%;
  float:left;
  position:relative;
  margin: 0px 0px 30px 0px;
  padding-left: 30px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_portfolio_list li img{min-width: 100%;}
.arlo_tm_portfolio_titles {
  white-space: nowrap;
  background: #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 15px;
  color: #000000;
  position: fixed;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
}
.arlo_tm_portfolio_titles.visible {
  opacity: 1;
  visibility: visible;
}
.arlo_tm_portfolio_titles .work__cat {
  position: absolute;
  background: #ffffff;
  top: 100%;
  left: 0;
  margin-top: -5px;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  padding: 5px 15px;
}
.entry{position: relative;}
.arlo_tm_portfolio_image_main{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>