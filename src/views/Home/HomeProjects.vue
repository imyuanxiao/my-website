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

            <el-row  class="arlo_tm_portfolio_list gallery_zoom"  :gutter="30">
              <el-col :span="24" :sm="12" :lg="8">
                <el-card class="design">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://s1.ax1x.com/2023/05/28/p9L5lmn.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4 style="font-size: 1.5em">Unified Login System</h4>
<!--                          <h5>(backend)</h5>-->
                      </div>
                      <div class="definition">
                        <p>A Spring Boot-based system leveraging Spring Security and Redis, designed to enable seamless integration of third-party login functionality.</p>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/unified_login_system" target="_blank"><span>Read More</span></a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="24" :sm="12" :lg="8">
                  <el-card class="design">
                      <div class="entry arlo_tm_portfolio_animation_wrap" >
                          <img
                                  src="https://s1.ax1x.com/2023/05/28/p9L5GkV.png"
                                  class="project_image"
                          />
                          <div style="padding: 14px 0px" >
                              <div class="title_holder">
                                  <h4>RBAC System</h4>
                                  <h5>(backend)</h5>
                              </div>
                              <div class="definition">
                                  <p>An RBAC(Role-Based Access Control) system using Spring Boot, MySQL, MyBatis Plus, Spring Security, and JWT.
                                  </p>
                              </div>
                              <div class="read_more">
                                  <a href="https://github.com/imyuanxiao/rbac" target="_blank"><span>Read More</span></a>
                              </div>
                          </div>
                      </div>
                  </el-card>
              </el-col>
              <el-col :span="24" :sm="12" :lg="8">
                  <el-card class="design">
                      <div class="entry arlo_tm_portfolio_animation_wrap" >
                          <img
                                  src="https://s1.ax1x.com/2023/05/28/p9L4Xo6.png"
                                  class="project_image"
                          />
                          <div style="padding: 14px 0px" >
                              <div class="title_holder">
                                  <h4>RBAC System</h4>
                                  <h5>(frontend)</h5>
                              </div>
                              <div class="definition">
                                  <p>Frontend pages for the RBAC project using React and Ant Design.</p>
                              </div>
                              <div class="read_more">
                                  <a href="https://github.com/imyuanxiao/rbac-frontend" target="_blank"><span>Read More</span></a>
                              </div>
                          </div>
                      </div>
                  </el-card>
              </el-col>
            </el-row>

            <el-row class="arlo_tm_portfolio_list gallery_zoom"  :gutter="30" style="margin-top: 30px">
                <el-col :span="24" :sm="12" :lg="8">
                    <el-card class="design">
                        <div class="entry arlo_tm_portfolio_animation_wrap" >
                            <img
                                    src="https://s1.ax1x.com/2023/05/28/p9L5pSe.png"
                                    class="project_image"
                            />
                            <div style="padding: 14px 0px" >

                                <div class="title_holder">
                                    <h4>Jupiter X</h4>
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
                <el-col :span="24" :sm="12" :lg="8">
                    <el-card class="design">
                        <div class="entry arlo_tm_portfolio_animation_wrap" >
                            <img
                                    src="https://s1.ax1x.com/2023/05/28/p9L5LcQ.png"
                                    class="project_image"
                            />
                            <div style="padding: 14px 0px" >

                                <div class="title_holder">
                                    <h4>My Website</h4>
                                </div>

                                <div class="definition">
                                    <p>A personal website based on Vue.</p>
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