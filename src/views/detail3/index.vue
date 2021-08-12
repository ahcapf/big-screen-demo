<template>
  <m-frame title="储备库分析储备库分析">
    <div class="layout-content">
      <border-box-1 class="left"></border-box-1>
      <border-box-1 class="right-top">
      </border-box-1>
      <border-box-1 class="right-bottom-start"></border-box-1>
      <border-box-1 class="right-bottom-middle"></border-box-1>
      <border-box-1 class="right-bottom-end"></border-box-1>
    </div>   
  </m-frame>
</template>

<script>
import MFrame from '@/components/Frame'
// import FilterProcess from './components/filterProcess'  
export default {
  components: { MFrame },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-content {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 24px;
  }
  .left {
    grid-row: 1 / span 2;
    grid-column: 1 / span 5;
    // background-color: yellow;
  }
  .right-top {
    grid-row: 1 / span 1;
    grid-column: 6 / span 19;
    // background-color: skyblue;
  }
  .right-bottom-start {
    grid-row: 2 / span 1;
    grid-column: 6 / span 9;
    // background-color: pink;
  }
  .right-bottom-middle {
    grid-row: 2 / span 1;
    grid-column: 15 / span 5;
    // background-color: pink;
  }
  .right-bottom-end {
    grid-row: 2 / span 1;
    grid-column: 20 / span 5;
    // background-color: pink;
  }
</style>