<template>
  <!-- CONTACT & FOOTER -->
  <div class="home_page_section" id="contact">
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
                <li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
                <li><p><label>Email:</label><span><a href="mailto:example@gmail.com">example@gmail.com</a></span></p></li>
                <li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
                <li><p><label>Website:</label><span><a href="mailto:example@gmail.com">www.yourdomain.com</a></span></p></li>
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
          <p>Copyright &copy; 2019.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /CONTACT & FOOTER -->
</template>

<script>
export default {
  name: "HomeContact"
}
</script>

<style scoped>

/*---------------------------------------------------*/
/*	09) ARLO CONTACT
/*---------------------------------------------------*/

.arlo_tm_contact_wrap_all{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background-color: #fff;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap_all .leftbox{
  width: 40%;
  height: auto;
  float: left;
  padding-right: 40px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap ul{
  margin: 0px;
  list-style-type: none;
}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap ul li{
  margin: 0px 0px 15px 0px;
}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap ul li label{
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 13px;
  color: #000;
}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap ul li span{padding-left: 5px;}
.arlo_tm_contact_wrap_all .leftbox .short_info_wrap ul li a{
  text-decoration: none;
  color: #000;
}
.arlo_tm_contact_wrap_all .rightbox{
  width: 60%;
  height: auto;
  float: right;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap{
  max-width: 830px;
  height: auto;
  margin: 0px auto;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap .subtitle{
  text-align: center;
  margin-bottom: 69px;
}
.arlo_tm_contact_wrap .subtitle p{color: #333;}
.arlo_tm_contact_wrap .main_input_wrap{
  margin-bottom: 75px;
  position: relative;
  top: -24px;
}
.arlo_tm_contact_wrap .main_input_wrap,
.arlo_tm_contact_wrap .main_input_wrap .wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_contact_wrap .main_input_wrap .wrap{margin-bottom: 20px;}
.arlo_tm_contact_wrap .main_input_wrap .wrap input{
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(10,4,37,1);
  color: #333;
  padding-left: 0px !important;
}
.arlo_tm_contact_wrap .main_input_wrap .wrap input:focus{
  outline: none;
}
.arlo_tm_contact_wrap .main_input_wrap .wrap textarea{
  width: 100%;
  height: 80px;
  text-align: left;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(10,4,37,1);
  color: #333;
  padding-left: 0px !important;
}
.arlo_tm_contact_wrap .main_input_wrap .wrap textarea:focus{
  outline: none;
}
.arlo_tm_contact_wrap .arlo_tm_button a{
  text-decoration: none;
  color: #fff;
  background-color: #E3872D;
  font-weight: 600;
  font-family: "Montserrat";
  padding: 12px 35px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.arlo_tm_contact_wrap .arlo_tm_button a:before{
  position: absolute;
  content: "";
  top: 0px;
  height: 100%;
  left: -25%;
  width: 0%;
  background-color: #041230;
  transform: skew(50deg);
  transition-duration: .6s;
  z-index: 1;
}
.arlo_tm_contact_wrap .arlo_tm_button a:hover:before{width: 170%;}
.arlo_tm_contact_wrap .arlo_tm_button a span{
  position: relative;
  z-index: 2;
}
.arlo_tm_contact_wrap .empty_notice{
  color: #BD0A0D;
  margin-bottom: 7px;
  display: none;
  text-align: left;
}
.arlo_tm_contact_wrap .contact_error{
  color: rgba(255,0,4,1.00);
  text-align: left;
}
.arlo_tm_contact_wrap .returnmessage{
  color:#0064FF;
  margin-bottom: 7px;
  text-align: left;
}

.arlo_tm_footer_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: left;
  background-color: #041230;
  padding: 50px 0px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.arlo_tm_footer_wrap p{color: #fff;}
.arlo_tm_footer_wrap p a{
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat";
  font-weight: 600;
  position: relative;
}

</style>