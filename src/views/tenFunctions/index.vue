<template>
  <m-frame title="十大功能">
    <div class="content-box">
      <div class="content-main">
        <img 
          src="@/assets/image/tenFunctions/big_circle.png" 
          class="main-img"
        >
        <div 
          v-for="(func, index) in funcList" 
          :key="func.title" 
          class="function-item"
        >
          <div class="function-item-inner">
            <div
              class="function-main"
              :class="leftMap.includes(index + 1) ? 'position-right' : 'position-left'"
            >
              <div class="function-title">
                {{ func.title }}
              </div>
              <div class="function-desc">
                {{ func.desc }}
              </div>
            </div>
            <img :src="func.img">
          </div>          
        </div>
      </div>      
    </div>
  </m-frame>
</template>

<script>
import MFrame from '@/components/Frame'
export default {
  components: { MFrame },
  data() {
    return {
      leftMap: [1, 2, 3, 9, 10],
      funcList: [
        {
          title: '专业服务匹配',
          desc: '聚集头部专业服务机构，提供各类专业化个性化对接服务',
          img: require('@/assets/image/tenFunctions/item_1.png')
        },
        {
          title: '路演推介展示',
          desc: '开展投融资项目、新技术发布等现场路演和在线直播',
          img: require('@/assets/image/tenFunctions/item_2.png')
        },
        {
          title: '公司质量提升',
          desc: '支持上市公司做优做强，加强风险监测预警，促进上市公司高质量发展',
          img: require('@/assets/image/tenFunctions/item_3.png')
        },
        {
          title: '上市辅导培训',
          desc: '开展改制、重组、挂牌、上市等多层次资本市场业务培训',
          img: require('@/assets/image/tenFunctions/item_4.png')
        },
        {
          title: '上市发现培育',
          desc: '依托人工智能和大数据技术，构建逐层递进的上市储备库、培育库和推荐库',
          img: require('@/assets/image/tenFunctions/item_5.png')
        },
        {
          title: '上市预审评价',
          desc: '对企业进行客观量化的综合评价，为科创板注册预审提供支持',
          img: require('@/assets/image/tenFunctions/item_6.png')
        },
        {
          title: '股权融资对接',
          desc: '吸纳各类产业引导基金和股权投资机构为企业解决融资需求',
          img: require('@/assets/image/tenFunctions/item_7.png')
        },
        {
          title: '债券融资对接',
          desc: '引导银行创新信贷产品，对科创企业提供精准信贷支持',
          img: require('@/assets/image/tenFunctions/item_8.png')
        },
        {
          title: '金融指数编制',
          desc: '探索编制长三角金融系列指数',
          img: require('@/assets/image/tenFunctions/item_9.png')
        },
        {
          title: '上市行政服务',
          desc: '设立行政服务受理窗口，一站式解决企业上市诉求',
          img: require('@/assets/image/tenFunctions/item_10.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/css/function.scss'; 
  .content-box {
    @include full;
    background: url('~@/assets/image/tenFunctions/bg.png') center/100% no-repeat;
    display: grid;
    // justify-items: center;
    // align-items: center;
    justify-content: center;
    align-content: center;
    .content-main {
      width: 624px;
      height:  624px;
      position: relative;
      .main-img {
        @include full;
      }
      .function-item {
        position: absolute;
        width: 82px;
        height: 82px;
        top: 50%;
        margin-top: -41px;
        margin-left: -30px;
        transform-origin: 343px 41px;
        .function-item-inner {
          @include full;
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 3;
          width: 100%;
        }

        .function-main {
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
          height: 77px;
          
          // background: linear-gradient(62deg, #05133B 0%, #082761 100%);
          
          padding-right: 50px;          
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
          padding-left: 31px;           
          .function-title {
            font-weight: 600;
            color: #FFFFFF;
            font-size: 24px;
            letter-spacing: 5px;
            text-shadow: 0px 0px 3px #0B72E4;
            margin-bottom: 6px;
            
          }
          .function-desc {
            font-size: 14px;
            font-weight: 400;
            color: #D1DCED;
          }
          &.position-left {
            left: 60%;
            background:linear-gradient(-120deg,transparent 40px, #082761 0);
            padding-left: 50px;
            padding-right: 31px;  
          }
          &.position-right {
            background:linear-gradient(120deg,transparent 40px, #082761 0);
            right: 60%;
            text-align: right;
          }
        }
        // 每个固定旋转36度长条间距不一致
        &:nth-of-type(2)  {
          transform: rotateZ(30deg);
          .function-item-inner {
            transform: rotateZ(-30deg);
            .function-main {
              padding-left: 45px;
            }
          }
        }
        &:nth-of-type(3) {
          transform: rotateZ(70deg);
          .function-item-inner {
            transform: rotateZ(-70deg);
          }
        }
        &:nth-of-type(4) {
          transform: rotateZ(108deg);
          .function-item-inner {
            transform: rotateZ(-108deg);
          }
        }
        &:nth-of-type(5)  {
          transform: rotateZ(150deg);
          .function-item-inner {
            transform: rotateZ(-150deg);
          }
        }
        &:nth-of-type(6) {
          transform: rotateZ(180deg);
          .function-item-inner {
            transform: rotateZ(-180deg);
          }
        }
        &:nth-of-type(7)  {
          transform: rotateZ(210deg);
          .function-item-inner {
            transform: rotateZ(-210deg);
          }
        }
        &:nth-of-type(8)  {
          transform: rotateZ(252deg);
          .function-item-inner {
            transform: rotateZ(-252deg);
          }
        }
        &:nth-of-type(9)  {
           transform: rotateZ(290deg);
          .function-item-inner {
            transform: rotateZ(-290deg);
            .function-main {
              padding-left: 200px;
            }
          }
         }
        &:nth-of-type(10)  {
          transform: rotateZ(330deg);
          .function-item-inner {
            transform: rotateZ(-330deg);
          }
        }
      }
    }
  }
</style>