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
          <li>
            <router-link to="/index#home"> {{ $t('menu.home') }}</router-link>
          </li>
          <li>
            <router-link to="/index#about">{{ $t('menu.about') }}</router-link>
          </li>
          <li>
            <router-link to="/index#projects">{{ $t('menu.projects') }}</router-link>
          </li>
<!--          <li>-->
<!--            <router-link to="/index#contact">{{ $t('menu.contact') }}</router-link>-->
<!--          </li>-->

        </ul>
        <div>
          <button class="language-button" @click="changeLanguage('zh')">中</button>
          <button class="language-button" @click="changeLanguage('en')">En</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {arlo_tm_hamburger} from "@/utils/utils.ts";

export default {
  name: "MenuMobile",
  mounted() {
    arlo_tm_hamburger();
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
}
</script>

<style scoped>
</style>