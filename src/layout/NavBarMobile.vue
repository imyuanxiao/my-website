<template>
  <div class="arlo_tm_mobile_header_wrap">
    <div class="main_wrap">
      <div class="logo">
        <img src="@/assets/img/logo/mobile_logo.png" alt="" />
      </div>
      <div class="arlo_tm_trigger">
        <div class="hamburger hamburger--collapse-r">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="arlo_tm_mobile_menu_wrap">
      <div class="mob_menu">
        <ul class="anchor_nav">
          <li><router-link to="/index#home">Home</router-link></li>
          <li><router-link to="/index#about">About</router-link></li>
          <li><router-link to="/index#services">Services</router-link></li>
          <li><router-link to="/index#projects">Projects</router-link></li>
          <li><router-link to="/index#blogs">Blogs</router-link></li>
          <li><router-link to="/index#contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {arlo_tm_hamburger} from "@/utils/utils.ts";

export default {
  name: "NavBarMobile",
  mounted() {
    arlo_tm_hamburger();
  }
}
</script>

<style scoped>
</style>