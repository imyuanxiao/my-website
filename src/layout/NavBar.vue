<template>

  <div class="arlo_tm_leftpart_wrap" :class="{ opened: isFold }">
    <div class="leftpart_inner">
      <div class="logo_wrap">
        <a href="#"><img src="@/assets/img/logo/desktop-logo.png" alt="" /></a>
      </div>
      <div class="menu_list_wrap">
        <ul class="anchor_nav">
          <li>
            <router-link to="/index#home">Home</router-link>
          </li>
          <li>
            <router-link to="/index#about">About</router-link>
          </li>
          <li>
            <router-link to="/index#services">Services</router-link>
          </li>
          <li>
            <router-link to="/index#projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/index#blogs">Blogs</router-link>
          </li>
          <li>
            <router-link to="/index#contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="leftpart_bottom">
        <div class="social_wrap">
          <ul>
            <li><a href="#"><i class="xcon-facebook"></i></a></li>
            <li><a href="#"><i class="xcon-twitter"></i></a></li>
            <li><a href="#"><i class="xcon-linkedin"></i></a></li>
            <li><a href="#"><i class="xcon-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <a class="arlo_tm_resize"
         @click="toggleFold"
         :class="{ opened: isFold }"
      ><i :class="isFold ? 'xcon-angle-right' : 'xcon-angle-left'"></i></a>
    </div>

  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState(['isFold']),
  },
  methods: {
    ...mapMutations(['toggleFold']),
  },
};
</script>
<style scoped>

</style>