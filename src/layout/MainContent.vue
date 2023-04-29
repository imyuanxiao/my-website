<template>
  <div>
    <router-view />
  </div>
</template>

<script>

import $ from 'jquery';
import { animateText } from '@/utils/animation.ts';
import {onMounted,} from "vue";


export default {
  name: "MainContent",
  setup(){
    onMounted(() => {
      setTimeout(()=>{
        const element1 = document.querySelector('.animation_text_word1');
        const element2 = document.querySelector('.animation_text_word2');
        if (element1 && element2) {
          animateText(element1);
          animateText(element2);
        }
      },500)
    });
  }
}

</script>

<style scoped>

</style>