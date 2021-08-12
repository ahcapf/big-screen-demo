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
      <span>
        <img
          class="back-btn"
          src="@/assets/image/layout/main/back_btn.png"
        >
      </span>
      <div class="company-title">
        <div class="title-left"></div>
        <div class="title-center">{{ title }}</div>
        <div class="title-right"></div>
      </div>
      <!-- <div class="content-title">
        {{ title }}
      </div> -->
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
  components: { MGrid, MHeader },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/css/function.scss';   
  .m-title {
    display: flex;
    padding-left: 32px;
    align-items: center;
    transform: translateY(-10px);
    .back-btn {
      width: 26px;
      margin-right: 13px;
      cursor: pointer;
    }
    .content-title {
      height: 45px;
      padding: 6px 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('~@/assets/image/layout/main/title_left.png') left / contain no-repeat,                  
                  url('~@/assets/image/layout/main/title_right.png') right / contain no-repeat,
                  url('~@/assets/image/layout/main/title_center.png') left / contain;
      // background: url('~@/assets/image/layout/main/title_right.png') no-repeat;
      // background-position: right;
      // background-size:  contain;
      font-size: 19px;
      font-weight: 600;
      color: #FAF4E6;
      letter-spacing: 3px;
    }
    .company-title {
      height: 45px;
      display: flex;
      // align-items: center;
      line-height: 45px;
      font-size: 19px;
      font-weight: 600;
      color: #FAF4E6;
      letter-spacing: 3px;
      .title-left {
        width: 43px;        
        background: url('~@/assets/image/layout/main/title_left.png') no-repeat;
        background-size: cover;
        background-position: left top;
      }
      .title-center {      
        background: url('~@/assets/image/layout/main/title_center.png');
        background-size: 100% 101%;
        background-position: left 0;
      }
      .title-right {
        width: 43px;
        background: url('~@/assets/image/layout/main/title_right.png') no-repeat;
        background-size: cover;
        background-position: right center;
      }
    }
  }
  .m-content {
    padding: 10px 32px 35px;    
  }
</style>