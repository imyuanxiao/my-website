<template>

  <div class="arlo_tm_leftpart_wrap" :class="{ opened: isFold }">
    <div class="leftpart_inner">
      <div class="logo_wrap">
        <a href="#"><img src="@/assets/img/logo/desktop-logo.png" alt="" /></a>
      </div>
      <div class="menu_list_wrap">
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

      </div>
      <div class="leftpart_bottom">
        <div class="social_wrap" >
          <ul >
            <li>
              <button class="language-button" @click="changeLanguage('zh')">中</button>
            </li>
            <li>
              <button class="language-button" @click="changeLanguage('en')">En</button>
            </li>
            <li><a href="https://github.com/imyuanxiao" target="_blank">Git</a></li>
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
  name: 'Menu',
  computed: {
    ...mapState(['isFold']),
  },
  methods: {
    ...mapMutations(['toggleFold']),
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
};
</script>
<style scoped>

</style>