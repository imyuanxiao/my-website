<template>
  <!-- SKILLS -->
  <div class="home_page_section" id="skills">
    <div class="skills_wrap">
      <div class="container">
        <div class="inner_wrap">
          <div class="leftbox">
            <div class="mini_title_holder">
              <h4>Some About my Abilities</h4>
            </div>
            <p>
              With two years of experience in graphic design and two years of programming learning experience, I have a good command of the full-stack technology and can independently complete front-end and back-end separation projects. I specialize in Vue for front-end development and Java and C for back-end development.
            </p>
          </div>
          <div class="rightbox">
            <div class="progress_bar_wrap_total">
              <div class="progress_wrap" data-size="small" data-round="c" data-strip="off">
                <div class="progress" data-value="95" data-color="#000">
                  <span><span class="label">Java - <span class="experience">2 years of experience</span></span><span class="number">85%</span></span>
                  <div class="bar_bg"><div class="bar_wrap"><div class="bar"></div></div></div>
                </div>
                <div class="progress" data-value="85" data-color="#000">
                  <span><span class="label">C - <span class="experience">1 years of experience</span></span><span class="number">75%</span></span>
                  <div class="bar_bg"><div class="bar_wrap"><div class="bar"></div></div></div>
                </div>
                <div class="progress" data-value="75" data-color="#000">
                  <span><span class="label">PS - <span class="experience">2 years of experience</span></span><span class="number">80%</span></span>
                  <div class="bar_bg"><div class="bar_wrap"><div class="bar"></div></div></div>
                </div>
                <div class="progress" data-value="90" data-color="#000">
                  <span><span class="label">PR/AE - <span class="experience">2 years of experience</span></span><span class="number">80%</span></span>
                  <div class="bar_bg"><div class="bar_wrap"><div class="bar"></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /SKILLS -->

</template>

<script>
import $ from 'jquery';

export default {
  name: "HomeSkills",
  mounted() {
    window.addEventListener('scroll', () => {
      const el = document.getElementById('skills');
      console.log(this.isElementInViewport(el));

      if (this.isElementInViewport(el)) {
        $('.progress_wrap').attr('data-strip', 'on');
        $('.bar_wrap').addClass('open');
      }
    });
  },
  methods: {
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
}
</script>

<style scoped>

.skills_wrap,
.skills_wrap .inner_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.skills_wrap{
  background-color: #f6f7fd;
  padding: 90px 0px;
  margin-bottom: 100px;
}
.skills_wrap .inner_wrap{display: flex;}
.skills_wrap .leftbox{
  width: 35%;
  height: auto;
  clear: both;
  float: left;
  padding-right:0px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.skills_wrap .rightbox{
  width: 65%;
  height: auto;
  clear: both;
  float: right;
  padding-left: 65px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}

.skills_wrap,
.skills_wrap .inner_wrap{
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.skills_wrap{
  background-color: #f6f7fd;
  padding: 90px 0px;
  margin-bottom: 100px;
}
.skills_wrap .inner_wrap{display: flex;}
.skills_wrap .leftbox{
  width: 35%;
  height: auto;
  clear: both;
  float: left;
  padding-right:0px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
.skills_wrap .rightbox{
  width: 65%;
  height: auto;
  clear: both;
  float: right;
  padding-left: 65px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}

.progress_wrap[data-size="big"] .progress .bar_bg{height:40px;}
.progress_wrap[data-size="small"] .progress .bar_bg{height:5px;}

.progress_wrap[data-round="a"] .progress .bar_bg,
.progress_wrap[data-round="a"] .progress .bar{
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
}
.progress_wrap[data-round="b"] .progress .bar_bg,
.progress_wrap[data-round="b"] .progress .bar{
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
}
.progress_wrap[data-round="c"] .progress .bar_bg,
.progress_wrap[data-round="c"] .progress .bar{
  -webkit-border-radius:50px;
  -moz-border-radius:50px;
  border-radius:50px;
}

.progress_bar_wrap_total{
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 10px;
  position: relative;
  margin-top: -4px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}

.progress{
  width:100%;
  margin-bottom:16px;
}
.progress:last-child{margin-bottom: 0px;}
.progress > span{
  margin:0px 0px 3px 0px;
  width:100%;
  display:block;
  text-align:left;
}
.progress span.label{
  font-size:13px;
  font-weight:700;
  color:#000;
  font-family: "Montserrat";
}
.progress span.label .experience{font-size: 12px;font-weight: 600;}
.progress span.number{
  float:right;
  font-size:13px;
  color:#000;
  font-weight: 700;
  font-family: "Montserrat";
}
.progress .bar_bg{
  background:rgba(0,0,0,.1);
  width:100%;
  min-width:100%;
  position:relative;
  height:20px;
}
.progress .bar_bg .bar_wrap{
  width:0px;
  height:100%;
}
.progress .bar_bg .bar_wrap.open{
  -webkit-animation: arlo_tm_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* Safari 4+ */
  -moz-animation:    arlo_tm_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* Fx 5+ */
  animation:         arlo_tm_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* IE 10+ */
  width:100%;
}
.progress .bar_bg .bar{
  height:100%;
  background:#333;
  width:0px;
  overflow:hidden;
}
.progress_wrap[data-strip="on"] .progress .bar{
  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 75%, transparent 75%, transparent);

  -webkit-animation: arlo_tm_bar_move 4s linear infinite;
  -moz-animation: arlo_tm_bar_move 4s linear infinite;
  animation: arlo_tm_bar_move 4s linear infinite;
  background-size: 50px 50px;
}

@-webkit-keyframes bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}
@-moz-keyframes arlo_tm_bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}
@keyframes arlo_tm_bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}

/*expand width animation*/
@-webkit-keyframes arlo_tm_expand {0%{ width:0%; } 100%{ width:100%; }}
@-moz-keyframes arlo_tm_expand {0%{ width:0%; } 100%{ width:100%; }}
@keyframes arlo_tm_expand {0%{ width:0%; } 100%{ width:100%; }}

</style>