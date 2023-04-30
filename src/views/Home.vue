<template>
  <div class="arlo_tm_rightpart" :class="{ opened: isFold }">
    <div class="rightpart_inner">
      <home-home ref="homeHome"/>
      <home-about ref="homeAbout"/>
      <home-skills/>
      <home-services/>
      <home-projects/>
      <home-transition/>
      <home-counter/>
      <home-blogs/>
      <home-contact/>
      <to-top ref="toTop"/>
    </div>
  </div>
</template>

<script>

import HomeAbout from "@/views/Home/HomeAbout.vue";
import HomeSkills from "@/views/Home/HomeSkills.vue";
import HomeProjects from "@/views/Home/HomeProjects.vue";
import HomeContact from "@/views/Home/HomeContact.vue";
import HomeBlogs from "@/views/Home/HomeBlogs.vue";
import HomeHome from "@/views/Home/HomeHeader.vue";
import HomeTransition from "@/views/Home/HomeTransition.vue";
import ToTop from "@/components/ToTop.vue";
import HomeServices from "views/Home/HomeServices.vue";
import HomeCounter from "views/Home/HomeCounter.vue";
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {
    HomeCounter,
    HomeServices,
    ToTop, HomeTransition, HomeHome, HomeBlogs, HomeContact, HomeProjects, HomeSkills, HomeAbout},
  computed: {
    ...mapState(['isFold']),
  },
  mounted() {

    /*向上TO TOP按钮*/
    this.$router.afterEach((to, from) => {
      const hash = to.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      }
    });
    // 通过ref 获取 home-home 元素 和 to-top 元素
    const homeHome = this.$refs.homeHome.$el;
    const toTop = this.$refs.toTop.$el;

    // 监听滚动事件
    window.addEventListener('scroll', function() {
      // 获取 home-home 元素的位置和高度
      const rect = homeHome.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // 判断 home-home 元素是否在可视区域
      const visible = rect.bottom > 0 && rect.top - windowHeight < 0;
      // 根据判断结果添加或删除 opened 类
      if (visible) {
        toTop.classList.remove('opened');
      } else {
        toTop.classList.add('opened');
      }
    });
  },
}

</script>

<style scoped>

</style>