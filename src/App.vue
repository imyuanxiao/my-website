<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import MainContent from "./layout/MainContent.vue";
import PreLoader from "./components/PreLoader.vue";
import NavBarMobile from "./layout/NavBarMobile.vue";

</script>

<template>
  <div class="app arlo_tm_content">
    <pre-loader/>
    <NavBar/>
    <NavBarMobile/>
    <MainContent/>
  </div>
</template>

<style scoped>

</style>
