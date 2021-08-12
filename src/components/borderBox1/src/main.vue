<template>
  <div class="border-box-1" :ref="ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient x1="2.20910162%" y1="50%" x2="97.0946673%" y2="47.5862196%" id="linearGradient-1">
          <stop stop-color="#5998D1" stop-opacity="0.574640447" offset="0%"></stop>
          <stop stop-color="#679ED3" stop-opacity="0.821818093" offset="24.8345648%"></stop>
          <stop stop-color="#71A3D4" offset="54.2815095%"></stop>
          <stop stop-color="#639DD2" stop-opacity="0.919873205" offset="83.6997719%"></stop>
          <stop stop-color="#5998D1" stop-opacity="0.513257007" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="76.1979796%" y1="3.9777928%" x2="56.1398611%" y2="54.7756521%" id="linearGradient-2">
          <stop stop-color="#5B99D1" offset="0%"></stop>
          <stop stop-color="#29669D" stop-opacity="0.767272522" offset="46.7278458%"></stop>
          <stop stop-color="#2D5684" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="111.440768%" x2="50%" y2="8.88777638%" id="linearGradient-3">
          <stop stop-color="#5B99D1" offset="0%"></stop>
          <stop stop-color="#29669D" stop-opacity="0.767272522" offset="46.7278458%"></stop>
          <stop stop-color="#2D5684" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.0928241%" y1="9.00133709%" x2="71.4522664%" y2="35.7900728%" id="linearGradient-4">
          <stop stop-color="#5B99D1" offset="0%"></stop>
          <stop stop-color="#29669D" stop-opacity="0.767272522" offset="46.7278458%"></stop>
          <stop stop-color="#2D5684" offset="100%"></stop>
        </linearGradient>
        <g id="leftTop">
          <polygon id="Fill-23" fill-opacity="0.586045058" fill="#0F182F" points="5,15 16,4 27,4 5,26"></polygon>
          <path d="M1,13 L13,1  L35,1 L1,35  Z" id="Stroke-3" stroke="url(#linearGradient-4)" stroke-width="2"></path>
        </g>
        <g id="rightTop">
          <use href="#leftTop" transform="rotate(90)"/>
        </g>
        <g id="rightBottom" >
          <use href="#leftTop" transform="rotate(180)"/>
        </g>
        <g id="leftBottom">
          <use href="#leftTop" transform="rotate(270)"/>
        </g>
        
      </defs>
      <g id="group" fill="none" stroke-width="1" fill-rule="evenodd">
        <!-- 外边框 -->
        <path
          id="Stroke-5"
          :d="`
            M1, 45
            L45, 1 
            L${width - 45}, 1                      
            L${width - 1}, 45 
            L${width - 1}, ${height - 45}
            L${width - 45}, ${height - 1} 
            L45, ${height - 1}
            L1, ${height - 45}
            Z
          `"                  
          stroke="url(#linearGradient-1)"
          stroke-width="2"
        >
        </path>
        <!-- 底部黄线 -->
        <path
          id="Fill-1" 
          :d="`
            M${(width - markWidth) / 2 } ${height} 
            h${markWidth}                  
          `"
          stroke="#F8E9B4"
          stroke-width="6"
        >
        </path>
        <!-- 填充背景 -->
        <polygon 
          id="Fill-7" 
          fill-opacity="0.731889205" 
          fill="#041B47" 
          :points="`
            10,50 
            57,9 
            ${width - 52}, 9 
            ${width - 10}, 50 
            ${width - 10}, ${height - 50} 
            ${width - 52}, ${height - 9} 
            57, ${height - 9} 
            10, ${height - 50}
          `"
        >
        </polygon>
        <!-- 填充边框      -->
        <polygon 
          id="Stroke-9" 
          stroke="#31486E" 
          :points="`
            11 50 
            52 9 
            ${width - 53} 9 
            ${width - 12} 50 
            ${width - 12} ${height - 50}
            ${width - 53} ${height - 9} 
            52 ${height - 9} 
            11 ${height - 50}                  
          `"
        ></polygon>
        <!-- 四个角 -->
        <use href="#leftTop"></use>
        <use :x="`${width}`" href="#rightTop"></use>
        <use :x="`${width}`" :y="`${height}`" href="#rightBottom"></use>
        <use :y="`${height}`" href="#leftBottom"></use>        
      </g>
    </svg>
    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<script>
import autoResize from '@/mixin/autoResize'

export default {
  name: 'BorderBox1',
  mixins: [autoResize],
  data() {
    return {
      ref: 'border-box-1'
    }
  },
  computed: {
    markWidth() {
      switch(true) {
        case this.width <= 380:
          return this.width / 2;
        case this.width <= 500:
          return 200;
        case this.width < 1600:
          return 240;
        default:
          return 480;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-box-1 {
  position: relative;
  width: 100%;
  height: 100%;

  .border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>