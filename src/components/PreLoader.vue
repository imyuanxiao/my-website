<template>
  <!-- PRELOADER -->
  <div class="arlo_tm_preloader" :class="{ loaded: isLoaded }">
    <div class="spinner_wrap">
      <div class="spinner"></div>
    </div>
  </div>

  <!-- /PRELOADER -->
</template>

<script>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  name: "PreLoader",
  setup() {
    const store = useStore();
    let isLoaded = computed(() => store.state.isLoaded);
    const isUsed = computed(() => store.state.usedPreLoader);

    if(isUsed.value){
      store.commit("setLoaded", false);
      isLoaded = true;
    }else{
      setTimeout(() => {
        store.commit("setLoaded", true);
        store.commit("setUsedPreLoader", true);
      }, 1500);
    }

    return {
      isLoaded
    };
  },
}
</script>

<style scoped>
.arlo_tm_preloader{
  position: fixed;
  background-color: #fff;
  z-index: 9999999;
  height: 100%;
  width: 100%;

  -webkit-transition: .2s all ease;
  -o-transition: .2s all ease;
  transition: .2s all ease;
  -webkit-transition-delay: .5s;
  -o-transition-delay: .5s;
  transition-delay: .5s; }
.arlo_tm_preloader .spinner_wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 33333;
}
.arlo_tm_preloader.loaded {
  opacity: 0;
  visibility: hidden;
}
.arlo_tm_preloader:before,
.arlo_tm_preloader:after{
  content: "";
  position: absolute;
  height: 50%;
  width: 100%;
  background-color: #041230;

  -webkit-transition: .7s all ease;
  -o-transition: .7s all ease;
  transition: .7s all ease;
}
.arlo_tm_preloader:before{
  top: 0;
  left: 0;
}
.arlo_tm_preloader:after{
  bottom: 0;
  left: 0;
}
.arlo_tm_preloader.loaded:before,
.arlo_tm_preloader.loaded:after{height: 0%;}
</style>