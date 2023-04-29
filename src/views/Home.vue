<template>
  <div class="home_page" :style="homePageStyle">
    <home-home id="home"/>
    <home-about id="about"/>
    <home-skills id="skills"/>
    <home-projects id="projects"/>
    <home-transition/>
    <home-blogs id="blogs"/>
    <home-contact id="contact"/>
    <to-top id="to_top"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

import HomeAbout from "@/components/HomeAbout.vue";
import HomeSkills from "@/components/HomeSkills.vue";
import HomeProjects from "@/components/HomeProjects.vue";
import HomeContact from "@/components/HomeContact.vue";
import HomeBlogs from "@/components/HomeBlogs.vue";
import HomeHome from "@/components/HomeHeader.vue";
import HomeTransition from "@/components/HomeTransition.vue";
import ToTop from "@/components/ToTop.vue";

export default {
  name: "Home",
  components: {ToTop, HomeTransition, HomeHome, HomeBlogs, HomeContact, HomeProjects, HomeSkills, HomeAbout},
  computed: {
    ...mapState(['padding']),
    homePageStyle() {
      return {
        'padding-left': this.padding,
      };
    },
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      const hash = to.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      }
    });
    // 获取 home-home 元素
    const homeHome = document.getElementById('home');
    // 获取 to-top 元素
    const toTop = document.getElementById('to_top');

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