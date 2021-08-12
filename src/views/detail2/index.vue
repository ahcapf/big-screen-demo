<template>
  <m-frame title="上海下渊重工机械有限公司">
    <div class="layout-content">
      <div class="left-top" />
      <div class="left-bottom" />
      <div class="center-top" />
      <div class="center-bottom-left" />
      <div class="center-bottom-right-start" />
      <div class="center-bottom-right-end" />
      <div class="right-top" />
      <div class="right-bottom" />
    </div>   
  </m-frame>
</template>

<script>
import MFrame from '@/components/Frame'
export default {
  components: { MFrame },
}
</script>

<style lang="scss" scoped>
  .layout-content {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(24, 1fr);
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 24px;
  }
  .left-top {
    grid-row: 1 / span 14;
    grid-column: 1 / span 5;
    background-color: pink;
  }
  .left-bottom {
    grid-row: 15 / span 10;
    grid-column: 1 / span 5;
    background-color: pink;
  }
  .center-top {
    grid-row: 1 / span 6;
    grid-column: 6 / span 11;
    background-color: yellow;
  }
  .center-bottom-left {
    grid-row: 7 / span 18;
    grid-column: 6 / span 6;
    background-color: yellow;
  }
  .center-bottom-right-start {
    grid-row: 7 / span 9;
    grid-column: 12 / span 5;
    background-color: yellow;
  }
  .center-bottom-right-end {
    grid-row: 16 / span 9;
    grid-column: 12 / span 5;
    background-color: yellow;
  }
  .right-top {
    grid-row: 1 / span 6;
    grid-column: 17 / span 8;
    background-color: skyblue;
  }
  .right-bottom {
    grid-row: 7 / span 18;
    grid-column: 17 / span 8;
    background-color: skyblue;
  }
</style>