<template>
  <!-- CONTACT & FOOTER -->
  <div class="arlo_tm_section" id="contact">
    <div class="container">
      <div class="arlo_tm_title_holder contact">
        <h3>Contact Me</h3>
        <span>Get in touch with me</span>						</div>
    </div>
    <div class="arlo_tm_footer_contact_wrapper_all">
      <div class="arlo_tm_contact_wrap_all">
        <div class="container">
          <div class="leftbox">
            <div class="arlo_tm_mini_title_holder contact">
              <h4>Get in Touch</h4>
            </div>
            <div class="short_info_wrap">
              <ul>
<!--                <li><p><label>Address:</label><span></span></p></li>-->
                <li><p><label>Email:</label><span><a href="mailto:imyuanxiao@126.com">imyuanxiao@126.com</a></span></p></li>
                <li><p><label>Phone:</label><span>+44 74 21898341</span></p></li>
                <li><p><label>Website:</label><span><a href="/index">imyuanxiao.com</a></span></p></li>
              </ul>
            </div>
          </div>
          <div class="rightbox">
            <div class="arlo_tm_contact_wrap">
              <div class="main_input_wrap">
                <form action="" method="post" class="contact_form" id="contact_form">
                  <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                  <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                  <div class="wrap">
                    <input id="name" type="text" placeholder="Your Name">
                  </div>
                  <div class="wrap">
                    <input id="email" type="text" placeholder="Your Email">
                  </div>
                  <div class="wrap">
                    <textarea id="message" placeholder="Your Message"></textarea>
                  </div>
                  <div class="arlo_tm_button">
                    <a id="send_message" href="#"><span>Send Message</span></a>												</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arlo_tm_footer_wrap">
        <div class="container">
          <p>Copyright &copy; 2023.IMYUANXIAO All rights reserved.<a target="_blank" href=""></a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /CONTACT & FOOTER -->
</template>

<script>
import {arlo_tm_contact_form} from "@/utils/utils.ts";

export default {
  name: "HomeContact",
  mounted() {
    arlo_tm_contact_form()
  }
}
</script>

<style scoped>

</style>