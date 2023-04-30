<template>
  <!-- SERVICES -->
  <div class="arlo_tm_section" id="services">
    <div class="arlo_tm_services_wrap">
      <div class="container">
        <div class="arlo_tm_title_holder">
          <h3>Amazing Services</h3>
          <span>Services that i supply</span>							</div>
        <div class="list_wrap">
          <ul>
            <li>
              <div class="inner">
                <div class="icon">
                  <img class="svg" src="@/assets/img/svg/camera-diaphragm.svg" alt="" />											</div>
                <div class="title_service">
                  <h3>Back-end</h3>
                </div>
                <div class="text">
                  <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                </div>
              </div>
            </li>

            <li>
              <div class="inner">
                <div class="icon">
                  <img class="svg" src="@/assets/img/svg/new-tab.svg" alt="" />											</div>
                <div class="title_service">
                  <h3>Front-end</h3>
                </div>
                <div class="text">
                  <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                </div>
              </div>
            </li>


            <li>
              <div class="inner">
                <div class="icon">
                  <img class="svg" src="@/assets/img/svg/adobe-illustrator.svg" alt="" />											</div>
                <div class="title_service">
                  <h3>Design</h3>
                </div>
                <div class="text">
                  <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /SERVICES -->
</template>

<script>
import {arlo_tm_imgtosvg} from "@/utils/utils.ts";

export default {
  name: "HomeServices",
  mounted() {
    arlo_tm_imgtosvg();
  }
}
</script>

<style scoped>

</style>