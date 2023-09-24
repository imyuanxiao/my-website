<template>
  <div class="arlo_tm_section relative" id="about">
    <div class="arlo_tm_about_wrapper_all">
      <div class="container">

        <div class="arlo_tm_title_holder">
          <h3>{{ $t('about.title') }}</h3>
          <span>{{ $t('about.sub-title') }}</span>
        </div>

        <div class="arlo_tm_about_wrap">

          <div class="author_wrap">

            <div class="leftbox">

              <div class="about_image_wrap parallax" data-relative-input="true">

                <div class="image layer" data-depth="0.1">
                  <img src="@/assets/img/about/1.jpg" alt="" />
                </div>

                <div class="border layer" data-depth="0.2">
                  <img src="@/assets/img/about/550x640.jpg" style="opacity: 0" alt="" />
                  <div class="inner"></div>
                </div>

              </div>

            </div>

            <div class="rightbox">

              <div class="arlo_tm_mini_title_holder">
                <h4>{{ $t('about.sub-sub-title') }}<span class="arlo_tm_animation_text_word" ref="animation_text"></span></h4>
              </div>

              <div class="definition">
                <p>{{ $t('about.definition-1') }}<strong>{{ $t('about.definition-2') }}</strong>{{ $t('about.definition-3') }}<strong>{{ $t('about.definition-4') }}</strong>{{ $t('about.definition-5') }}</p>
              </div>
              <div class="about_short_contact_wrap">
                <ul>
                  <li>
                    <span><label>{{ $t('about.birthday') }}</label>{{ $t('about.birthday-value') }}</span>									 </li>
                  <li>
                    <span><label>{{ $t('about.age') }}</label>{{ $t('about.age-value') }}</span> </li>
                  <li>
                    <span><label>{{ $t('about.city') }}</label>{{ $t('about.city-value') }}</span>												</li>
                  <li>
                    <span><label>{{ $t('about.interests') }}</label>{{ $t('about.interests-value') }}</span>												</li>
                  <li>
                    <span><label>{{ $t('about.study') }}</label>{{ $t('about.study-value') }}</span>												</li>
                  <li>
                    <span><label>{{ $t('about.degree') }}</label>{{ $t('about.degree-value') }}</span>												</li>
                  <li>
                    <span><label>{{ $t('about.website') }}</label><a href="#">{{ $t('about.website-value') }}</a></span>												</li>
                  <li>
                    <span><label>{{ $t('about.email') }}</label><a href="imyuanxiao@126.com">{{ $t('about.email-value') }}</a></span>												</li>
                  <li>
                    <span><label>{{ $t('about.mobile') }}</label>{{ $t('about.mobile-value') }}</span>												</li>
                  <li>
                    <span><label>{{ $t('about.wechat') }}</label>{{ $t('about.wechat-value') }}</span>												</li>
                </ul>
              </div>
              <div class="buttons_wrap">
                <ul>
                  <li>
                    <a href="/"><span>{{ $t('about.download') }}</span></a>
                  </li>
<!--                  <li class="anchor">-->
<!--                    <a href="#" @click.prevent="smoothScroll('#contact')"><span>Send Message</span></a>-->
<!--                  </li>-->
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {smoothScroll, animateParallax, animateText, arlo_tm_list_height} from '@/utils/utils';

export default {
  name: "HomeAbout",
  mounted() {
    animateParallax();
    const el = this.$refs.animation_text;
    animateText(el);
    arlo_tm_list_height();
  },
  setup() {
    return {
      smoothScroll
    };
  },
};
</script>

<style>

</style>