<template>

  <!-- NAVBAR_LEFT -->
  <div class="navbar_left" :class="{ fold: isFold }">
    <div class="navbar_inner">
      <div class="navbar_logo">
        <a href="#"><img src="@/assets/img/logo/desktop-logo.png" alt="" /></a>
      </div>
      <div class="navbar_menu_list">
        <ul class="anchor_nav">
          <li>
            <router-link to="/index#home">Home</router-link>
          </li>
          <li>
            <router-link to="/index#about">About</router-link>
          </li>

          <li>
            <router-link to="/index#projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/index#blogs">Blogs</router-link>
          </li>
          <li>
            <router-link to="/index#contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar_bottom">
        <div class="bottom_icon">
          <ul>
            <li><a href="#"><i class="xcon-facebook"></i></a></li>
            <li><a href="#"><i class="xcon-twitter"></i></a></li>
            <li><a href="#"><i class="xcon-linkedin"></i></a></li>
            <li><a href="#"><i class="xcon-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <a class="fold_button"
         @click="toggleFold"
         :class="{ opened: isFold }"
      ><i :class="isFold ? 'xcon-angle-right' : 'xcon-angle-left'"></i></a>
    </div>
  </div>
  <!-- NAVBAR_LEFT -->

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState(['isFold']),
  },
  methods: {
    ...mapMutations(['toggleFold']),
  },
};
</script>
<style scoped>

/*---------------------------------------------------*/
/*	NAVBAR LEFT
/*---------------------------------------------------*/

.fold_button {
  cursor: pointer;
}

.navbar_left{
  width: 300px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #041230;
  z-index: 100;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;

}
.navbar_left.hide{left: -300px;}
.navbar_left.fold{left: -300px;}
.navbar_left .navbar_logo{
  background-color: #041230;
  padding: 50px 20px;
  width: 100%;
  float: left;
  text-align: center;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(255,255,255,.1);

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.navbar_left .navbar_menu_list{
  width: 100%;
  height: auto;
  clear: both;
  /*float: left;*/
  text-align: left;
  padding: 0px 20px 0px 60px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.navbar_left .navbar_menu_list ul{
  margin: 0px;
  list-style-type: none;
}
.navbar_left .navbar_menu_list ul li{margin:0px;}
.navbar_left .navbar_menu_list ul li:last-child{margin-bottom: 0px;}
.navbar_left .navbar_menu_list ul li a{
  text-decoration: none;
  color: #fff;
  font-family: "OPPOSans L";
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 19px;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.navbar_left .navbar_menu_list ul li a:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 0px;
  background-color: #E3872D;
  top: 14px;
  transform: translateY(-50%);
  left: 100%;
  margin-left: 10px;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.navbar_left .navbar_menu_list ul li a:hover{color: #E3872D;}
.navbar_left .navbar_menu_list ul li a:hover:before{width: 35px;}
.navbar_left .navbar_bottom{
  position: absolute;
  left: 60px;
  bottom: 38px;
}
.navbar_left .navbar_bottom .bottom_icon{
  width: 100%;
  height: auto;
  float: left;
  position: relative;
  left: -5px;
  margin-bottom: 10px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.navbar_left .navbar_bottom .bottom_icon ul{
  margin: 0px;
  list-style-type: none;
}
.navbar_left .navbar_bottom .bottom_icon ul li{
  margin: 0px 10px 0px 0px;
  display: inline-block;
}
.navbar_left .navbar_bottom .bottom_icon ul li:last-child{margin-right: 0px;}
.navbar_left .navbar_bottom .bottom_icon ul li a{
  text-decoration: none;
  color: #fff;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.navbar_left .navbar_bottom .bottom_icon ul li a:hover{color: #E3872D;}
.navbar_left .fold_button{
  position: absolute;
  right: 0px;
  bottom: 20%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #E3872D;
  display: inline-block;
  text-decoration: none;
  z-index: 200;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.navbar_left .fold_button.opened{right: -30px;}
.navbar_left .fold_button i{
  color: #fff;
  transform: rotate(0deg);
  position: absolute;
  left: 6px;

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.navbar_left .fold_button i.opened{transform: rotate(-180deg);}


</style>