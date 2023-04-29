<template>
  <a class="totop " href="javascript:void(0)" ref="toTop" ></a>
</template>

<script>
export default {
  name: "ToTop",
  mounted() {
    const toTop = this.$refs.toTop;
    toTop.addEventListener("click", () => {
      const home = document.getElementById("home");
      home.scrollIntoView({ behavior: "smooth" });
    });
  }
}
</script>

<style scoped>

.totop{
  position: fixed;
  bottom: 40px;
  right: 55px;
  z-index: 100;
  overflow: hidden;
  outline: 1px solid rgba(255,255,255,.2);

  background-color: #E3872D;
  padding: 22px;
  border-radius: 3px;
  display: inline-block;

  opacity: 0;
  visibility: hidden;

  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}
.totop:before{
  position: absolute;
  content: "";
  top: 0px;
  height: 100%;
  left: -75%;
  width: 0%;
  background-color: #041230;
  transform: skew(50deg);
  transition-duration: .6s;
  z-index: 1;
}
.totop:after{
  width: 0px;
  height: 0px;
  position: absolute;
  content: '';
  border: 5px solid transparent;
  border-bottom-color: #fff;
  top: 14px;
  left: 17px;
  z-index: 2;
}
.totop:hover:before{width: 290%;}
.totop.opened{
  opacity: 1;
  visibility: visible;
  bottom: 55px;
}
</style>