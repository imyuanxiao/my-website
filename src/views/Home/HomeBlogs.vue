<template>
  <!-- NEWS -->
  <div class="arlo_tm_section" id="blogs">
    <div class="arlo_tm_news_wrap">
      <div class="container">

        <div class="arlo_tm_title_holder news">
          <h3>Latest News</h3>
          <span>Check out our latest News</span>
        </div>

        <div class="arlo_tm_list_wrap blog_list" >

          <el-row  class="inner_list"  :gutter="30">
                <el-col
                    :span="24" :sm="24" :lg="12"
                    v-for="i in 2" :key="i"
                >
                  <el-card class="design">
                    <div style="padding: 14px" >
                        <div class="date_wrap">
                          <p>February 07, 2018 <a href="../../../index.html">Illustrator</a></p>
                        </div>
                        <div class="title_holder">
                          <h3><a href="../../../index.html">How to Autumn Clean Your Design Career?</a></h3>
                        </div>
                        <div class="definition">
                          <p>Spring cleaning is not just about washing windows and clearing away cobwebs. Your design career also needs a thorough ...</p>
                        </div>
                        <div class="full_def">
                          <p>Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether yo are a freelancer or an in-house designer, or at a studio or agency, you'll probably have to rebrand at the andWhether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether yo are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and.Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether youa are a freelancer or an in-house designer, or at a studio or agency.</p>
                        </div>
                        <div class="read_more">
                          <a href="#"><span>Read More</span></a>
                        </div>

                      </div>
                  </el-card>
            </el-col>
          </el-row>

        </div>
      </div>
    </div>
  </div>
  <!-- /NEWS -->
</template>

<script>
export default {
  name: "HomeBlogs"
}
</script>

<style scoped>

</style>