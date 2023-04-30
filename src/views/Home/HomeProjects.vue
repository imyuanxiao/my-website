<template>
  <!-- PORTFOLIO -->
  <div class="arlo_tm_section" id="projects">
    <div class="arlo_tm_portfolio_wrapper_all">

      <!-- PORTFOLIO FILTER -->
      <div class="arlo_tm_second_portfolio">
        <div class="container">
          <div class="arlo_tm_portfolio_wrap">
            <div class="arlo_tm_title_holder portfolio">
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

</style>