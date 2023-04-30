<template>
  <div class="arlo_tm_section">
    <div class="container">
      <div class="arlo_tm_counter_wrap" data-col="4" data-delay="300">
        <ul class="arlo_tm_counter_list arlo_tm_miniboxes">
          <li>
            <div class="inner arlo_tm_minibox">
              <h3><span><span class="arlo_tm_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
              <span>Projects Completed</span>									</div>
          </li>
          <li>
            <div class="inner arlo_tm_minibox">
              <h3><span><span class="arlo_tm_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
              <span>Lines of Code</span>									</div>
          </li>
          <li>
            <div class="inner arlo_tm_minibox">
              <h3><span><span class="arlo_tm_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
              <span>Happy Clients</span>									</div>
          </li>
          <li>
            <div class="inner arlo_tm_minibox">
              <h3><span><span class="arlo_tm_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
              <span>My Awwwards</span>									</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {arlo_tm_miniboxes, initCounter} from "@/utils/utils.ts";

export default {
  name: "HomeCounter",
  mounted() {
    arlo_tm_miniboxes();
    initCounter()
  }
}
</script>

<style scoped>

</style>