<template>
  <!-- SERVICES -->
  <div class="home_page_section" id="services">
    <div class="services_wrap">
      <div class="container">
        <div class="title_holder">
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
export default {
  name: "HomeServices"
}
</script>

<style scoped>

/*---------------------------------------------------*/
/*	04) ARLO SERVICES
/*---------------------------------------------------*/

.services_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background-color: #fff;
  margin-bottom: 70px;
  text-align: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.services_wrap .arlo_tm_title_holder_wrap{margin-bottom: 93px;}
.services_wrap .list_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.services_wrap .list_wrap ul{
  margin: 0px 0px 0px -30px;
  list-style-type: none;
}
.services_wrap .list_wrap ul li{
  margin: 0px 0px 30px 0px;
  float: left;
  width: 33.3333%;
  padding-left: 30px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.services_wrap .list_wrap ul li .inner{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
  box-shadow: 0 0 20px rgba(0,0,0,.1);
  padding: 40px 40px 33px 40px;
  top: 0px;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.services_wrap .list_wrap ul li .inner:hover{top: -5px;}
.services_wrap .list_wrap ul li .icon{margin-bottom: 21px;}
.services_wrap .list_wrap ul li .icon .svg{
  width: 40px;
  height: 40px;
  color: #E3872D;
}
.services_wrap .list_wrap ul li .title_service{margin-bottom: 17px;}
.services_wrap .list_wrap ul li .title_service h3{
  font-family: "OPPOSans M";
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  line-height: 1;
}


</style>