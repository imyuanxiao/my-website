<script setup lang="ts">
import Menu from "./layout/Menu.vue";
import MainContent from "./layout/MainContent.vue";
import PreLoader from "./components/PreLoader.vue";
import MenuMobile from "./layout/MenuMobile.vue";

</script>

<template>
  <div class="app arlo_tm_content">
    <pre-loader/>
    <Menu/>
    <MenuMobile/>
    <MainContent/>
  </div>
</template>

<style scoped>

</style>
