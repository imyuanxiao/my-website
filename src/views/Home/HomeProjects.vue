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

            <el-row  class="arlo_tm_portfolio_list gallery_zoom"  :gutter="30">
              <el-col
                  :span="24" :sm="12" :lg="8"
                  v-for="i in 3" :key="i"
              >
                <el-card class="design">

                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="project_image"
                    />
                    <div style="padding: 14px" >

                      <div class="title_holder">
                        <h3>Title</h3>
                      </div>

                      <div class="definition">
                        <p>About this project ...</p>
                      </div>

                      <div class="read_more">
                        <a href="#"><span>Read More</span></a>
                      </div>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

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
  name: "HomeProjects",
  data() {
    return {
      gutter: '2%' // 设置gutter为2%
    }
  }
}
</script>

<style scoped>

</style>