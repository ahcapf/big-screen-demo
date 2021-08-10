<template>
  <m-grid
    rows="8% 4.6% auto"
    :template="[
      'header',
      'title',
      'content'
    ]"
  >
    <m-header />
    <div class="m-title">
      <img
        class="back-btn"
        src="@/assets/image/layout/main/back_btn.png"
      >
    </div>
    <div class="m-content">
      <slot />
    </div>    
  </m-grid>
</template>

<script>
import MGrid from '@/components/monitorComponents/monitorGrid'
import MHeader from '@/components/monitorComponents/monitorHeader'
export default {
  components: { MGrid, MHeader }
  
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/css/function.scss'; 
  .m-content {
    padding: 0 pxToRem(32px) pxToRem(37px)
  }
  .m-title {
    padding-left: pxToRem(32px);
    .back-btn {
      width: pxToRem(26px);
    }
  }
</style>