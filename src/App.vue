<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import MainContent from "./layout/MainContent.vue";
import PreLoader from "./layout/PreLoader.vue";
</script>

<template>
  <div class="app">
    <pre-loader/>
    <NavBar/>
    <MainContent/>
  </div>
</template>

<style scoped>

</style>
