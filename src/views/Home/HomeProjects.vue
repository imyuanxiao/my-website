<template>
  <!-- PORTFOLIO -->
  <div class="arlo_tm_section" id="projects">
    <div class="arlo_tm_portfolio_wrapper_all">

      <!-- PORTFOLIO FILTER -->
      <div class="arlo_tm_second_portfolio">
        <div class="container">
          <div class="arlo_tm_portfolio_wrap">
            <div class="arlo_tm_title_holder portfolio">
              <h3>{{ $t('projects.title') }}</h3>
              <span>{{ $t('projects.sub-title') }}</span>								</div>
            <div class="arlo_tm_portfolio_titles"></div>

            <el-row  class="arlo_tm_portfolio_list gallery_zoom"  :gutter="30" style="display: flex;">
              <el-col :span="24" :sm="12" :lg="8" style="display: flex; margin-bottom: 30px">
                <el-card class="design"  style="flex-grow: 1;">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://img1.imgtp.com/2023/09/27/lQWkfOKw.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4>{{ $t('projects.api-master.title') }}</h4>
                      </div>
                      <div class="tags">
                        <el-tag style="margin-right:10px"  type="info">React</el-tag>
                        <el-tag style="margin-right:10px" type="info">Spring Boot</el-tag>
                        <el-tag style="margin-right:10px" type="info">Dubbo</el-tag>
                        <el-tag type="info">Gateway</el-tag>
                      </div>
                      <div class="definition">
                        <p>{{ $t('projects.api-master.description') }}</p>
                      </div>
                      <div class="read_more">
                        <a href="http://api-master.yuanxiao.icu/" target="_blank"><span>{{ $t('projects.view-online') }}</span></a>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/yuan-api-frontend" target="_blank"><span>{{ $t('projects.git') }}</span></a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="24" :sm="12" :lg="8" style="display: flex; margin-bottom: 30px">
                <el-card class="design"  style="flex-grow: 1;">
                  <div class="entry arlo_tm_portfolio_animation_wrap" >
                    <img
                        src="https://img1.imgtp.com/2023/09/27/pEuFcJIw.png"
                        class="project_image"
                    />
                    <div style="padding: 14px 0px" >
                      <div class="title_holder">
                        <h4>{{ $t('projects.etlg.title') }}</h4>
                      </div>
                      <div class="tags">
                        <el-tag style="margin-right:10px" type="info">Unity C#</el-tag>
                        <el-tag style="margin-right:10px" type="info">Spring Boot</el-tag>
                        <el-tag type="info">Redis</el-tag>
                      </div>
                      <div class="definition">
                        <p>{{ $t('projects.etlg.description') }}</p>
                      </div>
                      <div class="read_more">
                        <a href="https://drive.google.com/file/d/1hlWrH5WulHioKo0fZ35drJo9H1XNzJns/view" target="_blank"><span>{{ $t('projects.demo-video') }}</span></a>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/ETLG-GameFramework-Demo" target="_blank"><span>{{ $t('projects.git') }}</span></a>
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
                        <h4>{{ $t('projects.role-master.title') }}</h4>
                      </div>
                      <div class="tags">
                          <el-tag style="margin-right:10px" type="info">React</el-tag>
                          <el-tag type="info">Spring Boot</el-tag>
                          <el-tag type="info">Redis</el-tag>
                      </div>
                      <div class="definition">
                        <p>{{ $t('projects.role-master.description') }}</p>
                      </div>
                      <div class="read_more">
                        <a href="http://role-master.yuanxiao.icu/" target="_blank"><span>{{ $t('projects.view-online') }}</span></a>
                      </div>
                      <div class="read_more">
                        <a href="https://github.com/imyuanxiao/rbac" target="_blank"><span>{{ $t('projects.git') }}</span></a>
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
                                    <h4>{{ $t('projects.jupiter-X.title') }}</h4>
                                </div>
                                <div class="tags">
                                    <el-tag style="margin-right:10px" type="info">Processing</el-tag>
                                    <el-tag type="info">Java</el-tag>
                                </div>
                                <div class="definition">
                                    <p>{{ $t('projects.jupiter-X.description') }}</p>
                                </div>
                                <div class="read_more">
                                    <a href="https://github.com/imyuanxiao/game-jupiterX" target="_blank"><span>{{ $t('projects.git') }}</span></a>
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
                                    <h4>{{ $t('projects.my-website.title') }}</h4>
                                </div>
                                <div class="tags">
                                    <el-tag style="margin-right:10px" type="info">Vue</el-tag>
                                </div>
                                <div class="definition">
                                    <p>{{ $t('projects.my-website.description') }}</p>
                                </div>

                                <div class="read_more">
                                    <a href="https://github.com/imyuanxiao/my-website" target="_blank"><span>{{ $t('projects.git') }}</span></a>
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

  <div class="arlo_tm_footer_wrap">
    <div class="container">
      <p>Copyright &copy; 2023.IMYUANXIAO All rights reserved.<a target="_blank" href=""></a></p>
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