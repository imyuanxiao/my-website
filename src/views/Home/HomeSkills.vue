<template>
  <div class="arlo_tm_section">
    <div class="arlo_tm_skills_wrap">
      <div class="container">
        <div class="inner_wrap">
          <div class="leftbox">
            <div class="arlo_tm_mini_title_holder">
              <h4>Some About my Abilities</h4>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
          </div>
          <div class="rightbox">
            <div class="progress_bar_wrap_total">
              <div class="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                <div class="arlo_tm_progress" data-value="85" data-color="#000">
                  <span><span class="label">JAVA - <span class="experience">2 years of experience</span></span><span class="number">85%</span></span>
                  <div class="arlo_tm_bar_bg"><div class="arlo_tm_bar_wrap"><div class="arlo_tm_bar"></div></div></div>
                </div>
                <div class="arlo_tm_progress" data-value="75" data-color="#000">
                  <span><span class="label">C - <span class="experience">1 years of experience</span></span><span class="number">75%</span></span>
                  <div class="arlo_tm_bar_bg"><div class="arlo_tm_bar_wrap"><div class="arlo_tm_bar"></div></div></div>
                </div>
                <div class="arlo_tm_progress" data-value="85" data-color="#000">
                  <span><span class="label">PS - <span class="experience">2 years of experience</span></span><span class="number">85%</span></span>
                  <div class="arlo_tm_bar_bg"><div class="arlo_tm_bar_wrap"><div class="arlo_tm_bar"></div></div></div>
                </div>
                <div class="arlo_tm_progress" data-value="80" data-color="#000">
                  <span><span class="label">PR/AE - <span class="experience">2 years of experience</span></span><span class="number">80%</span></span>
                  <div class="arlo_tm_bar_bg"><div class="arlo_tm_bar_wrap"><div class="arlo_tm_bar"></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {tdProgress} from "@/utils/utils.ts";

export default {
  name: "HomeSkills",
  mounted() {
    tdProgress();
  },
}
</script>

<style scoped>

</style>