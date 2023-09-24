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

            <el-row  class="arlo_tm_portfolio_list gallery_zoom"  :gutter="30" style="display: flex;">
              <el-col :span="24" :sm="12" :lg="8" style="display: flex; margin-bottom: 30px">
                <el-card class="design"  style="flex-grow: 1;">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://s1.ax1x.com/2023/05/28/p9L5lmn.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4>Api Master</h4>
                      </div>
                      <div class="tags">
                        <el-tag style="margin-right:10px" type="info">React</el-tag>
                        <el-tag type="info">Spring Boot2</el-tag>
                      </div>
                      <div class="definition">
                        <p>An access control system based on the RBAC model.</p>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/rbac" target="_blank"><span>Read More</span></a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="24" :sm="12" :lg="8" style="display: flex; margin-bottom: 30px">
                <el-card class="design"  style="flex-grow: 1;">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://s1.ax1x.com/2023/05/28/p9L5lmn.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4>Role Master</h4>
                      </div>
                      <div class="tags">
                        <el-tag style="margin-right:10px" type="info">React</el-tag>
                        <el-tag type="info">Spring Boot2</el-tag>
                      </div>
                      <div class="definition">
                        <p>An access control system based on the RBAC model.</p>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/rbac" target="_blank"><span>Read More</span></a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="24" :sm="12" :lg="8" style="display: flex;">
                <el-card class="design"  style="flex-grow: 1;">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://s1.ax1x.com/2023/05/28/p9L5lmn.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4>Role Master</h4>
                      </div>
                      <div class="tags">
                          <el-tag style="margin-right:10px" type="info">React</el-tag>
                          <el-tag type="info">Spring Boot2</el-tag>
                      </div>
                      <div class="definition">
                        <p>An access control system based on the RBAC model.</p>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/rbac" target="_blank"><span>Read More</span></a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
                <el-col :span="24" :sm="12" :lg="8"  style="display: flex;">
                    <el-card class="design"  style="flex-grow: 1;">
                        <div class="entry arlo_tm_portfolio_animation_wrap" >
                            <img
                                    src="https://s1.ax1x.com/2023/05/28/p9L5pSe.png"
                                    class="project_image"
                            />
                            <div style="padding: 14px 0px" >

                                <div class="title_holder">
                                    <h4>Jupiter X</h4>
                                </div>
                                <div class="tags">
                                    <el-tag style="margin-right:10px" type="info">Processing</el-tag>
                                    <el-tag type="info">Java</el-tag>
                                </div>
                                <div class="definition">
                                    <p>RogueLike game based on processing in java.</p>
                                </div>

                                <div class="read_more">
                                    <a href="https://github.com/imyuanxiao/game-jupiterX" target="_blank"><span>Read More</span></a>
                                </div>

                            </div>
                        </div>

                    </el-card>
                </el-col>
                <el-col :span="24" :sm="12" :lg="8"  style="display: flex;">
                    <el-card class="design" style="flex-grow: 1;">
                        <div class="entry arlo_tm_portfolio_animation_wrap" >
                            <img
                                    src="https://s1.ax1x.com/2023/05/28/p9L5LcQ.png"
                                    class="project_image"
                            />
                            <div style="padding: 14px 0px" >

                                <div class="title_holder">
                                    <h4>My Website</h4>
                                </div>
                                <div class="tags">
                                    <el-tag style="margin-right:10px" type="info">Vue</el-tag>
                                </div>
                                <div class="definition">
                                    <p>A personal website based on Vue. </p>
                                </div>

                                <div class="read_more">
                                    <a href="https://github.com/imyuanxiao/my-website" target="_blank"><span>Read More</span></a>
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