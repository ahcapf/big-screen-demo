<template>
  <div id="app" ref="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        width: 1920,
        height: 1080
      },
      width: '',
      height: '',
      // 屏幕分辨率的宽高
      originalWidth: '', 
      originalHeight: '',
      dom: null
    }
  },
  mounted() {
    // this.init()
    // this.updateSize()
    // this.updateScale()
    // window.addEventListener('resize', () => {
    //   this.init()
    //   this.updateScale()
    // })
  },
  methods: {
    init() {
      this.dom = this.$refs.app
      if (this.options.width && this.options.height) {
        this.width = this.options.width
        this.height = this.options.height
      } else {
        this.width = this.dom.clientWidth
        this.height = this.dom.clientHeight
      }
      

      this.originalWidth = window.screen.width
      this.originalHeight = window.screen.height

      console.log('dom', this.width, this.height, this.originalWidth, this.originalHeight)
    },
    updateSize() {
      if (this.width && this.height) {
        this.dom.style.width = `${this.width}px`
        this.dom.style.height = `${this.height}px`
      } else {
        this.dom.style.width = `${this.originalWidth}px`
        this.dom.style.height = `${this.originalHeight}px`
      }
    },
    updateScale() {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const realWidth = this.width || this.originalWidth
      const realHeight = this.height || this.originalHeight
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      this.dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    transform-origin: left top;
  }
</style>
