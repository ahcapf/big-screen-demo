<template>
  <m-frame title="储备库分析储备库分析">
    <div class="layout-content">
      <border-box-1 class="top-component"></border-box-1>
      <border-box-1 class="center-start"></border-box-1>
      <border-box-1 class="center-middle"></border-box-1>
      <border-box-1 class="center-end"></border-box-1>
      <border-box-1 class="bottom-start"></border-box-1>
      <border-box-1 class="bottom-middle"></border-box-1>
      <border-box-1 class="bottom-end"></border-box-1>
    </div>   
  </m-frame>
</template>

<script>
import MFrame from '@/components/Frame'
export default {
  components: { MFrame},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .layout-content {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 24px;
  }
  .top-component {
    grid-row: 1 / span 2;
    grid-column: 1 / span 24;
    // background-color: white;
  }
  .center-start {
    grid-row: 3 / span 3;
    grid-column: 1 / span 11;
    // background-color: yellow;
  }
  .center-middle {
    grid-row: 3 / span 3;
    grid-column: 12 / span 8;
    // background-color: yellow;
  }
  .center-end {
    grid-row: 3 / span 3;
    grid-column: 20 / span 5;
    // background-color: yellow;
  }
  .bottom-start {
    grid-row: 6 / span 3;
    grid-column: 1 / span 10;
    // background-color: skyblue;
  }
  .bottom-middle {
    grid-row: 6 / span 3;
    grid-column: 11 / span 7;
    // background-color: skyblue;
  }
  .bottom-end {
    grid-row: 6 / span 3;
    grid-column: 18 / span 7;
    // background-color: skyblue;
  }
</style>