<template>
  <div class="home_page" :style="homePageStyle">
    <home-home ref="homeHome"/>
    <home-about/>
    <home-skills/>
    <home-services/>
    <home-projects/>
<!--    <home-transition/>-->
    <home-blogs/>
    <home-contact/>
    <to-top ref="toTop"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

import HomeAbout from "@/views/Home/HomeAbout.vue";
import HomeSkills from "@/views/Home/HomeSkills.vue";
import HomeProjects from "@/views/Home/HomeProjects.vue";
import HomeContact from "@/views/Home/HomeContact.vue";
import HomeBlogs from "@/views/Home/HomeBlogs.vue";
import HomeHome from "@/views/Home/HomeHeader.vue";
import HomeTransition from "@/views/Home/HomeTransition.vue";
import ToTop from "@/components/ToTop.vue";
import HomeServices from "views/Home/HomeServices.vue";

export default {
  name: "Home",
  components: {
    HomeServices,
    ToTop, HomeTransition, HomeHome, HomeBlogs, HomeContact, HomeProjects, HomeSkills, HomeAbout},
  computed: {
    ...mapState(['padding']),
    homePageStyle() {
      return {
        'padding-left': this.padding,
      };
    },
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