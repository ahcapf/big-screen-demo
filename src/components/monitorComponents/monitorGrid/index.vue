<template>
  <div class="wrapper">
    <div class="wrapper-inner" ref="grid" :style="style">
      <slot />
    </div>    
  </div>
</template>

<script>

export default {
  name: 'MonitorGrid',
  props: {
    template: {
      type: [String, Array],
      required: true,
    },
    columns: {
      type: String,
    },
    rows: {
      type: String,
    },
    gap: {
      type: String,
    }
  },
  data() {
    return {
      style: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let templateAreas = this.template
      if (Array.isArray(templateAreas)) {
        let result = ''
        templateAreas.forEach(item => {
          result += `'${item}'`
        })
        templateAreas = result
      }
      this.style = {
        'grid-template-areas': templateAreas,
        'grid-template-columns': this.columns,
        'grid-template-rows': this.rows,
        'grid-gap': this.gap
      }

      const {children} = this.$refs.grid
      for(let i = 0; i < children.length; i++) {
        const child = children[i]
        const area = child.getAttribute('area')
        if (area) {
          child.style.gridArea = area
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/css/function.scss';  
  .wrapper {
    @include full;
    background: url('~@/assets/image/layout/main/wrapper01.png');
    .wrapper-inner {
      @include full;
      background: url('~@/assets/image/layout/main/wrapper02.png') center / cover no-repeat;
      display: grid;
    }
  }
</style>