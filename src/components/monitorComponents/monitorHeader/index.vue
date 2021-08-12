<template>
  <div class="monitor-header">
    <div class="header-left">
      <span class="city">{{ weatherInfo.city }}</span>
      <span class="weather">{{ weatherInfo.wea }}</span>
      <span
        v-if="weatherInfo.Interval"
        class="temperature"        
      >
        {{ weatherInfo.Interval[0] }}～{{ weatherInfo.Interval[1] }} ℃
      </span>
    </div>
    <div class="header-center">
      <img src="@/assets/image/layout/header/header_title.png">
    </div>
    <div class="header-right">
      <span class="date">{{ dateMap.date }}</span>
      <span class="day">星期{{ dateMap.day }}</span>
      <span class="time">{{ dateMap.time }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'MonitorHeader',
  data() {
    return {
      timer: null,
      dateMap: {
        date: '',
        day: '',
        time: ''
      },
      weatherInfo: {},
      timeFlag: null
    }
  },
  mounted() {
    this.timeFlag = Date.now() + 3600 * 1000 // 一个小时以后
    this.initTime()
    this.getWeather()

    this.timer = setInterval(() => {
      this.initTime()
      let now = Date.now()      
      // 天气一个小时更新一次
      if (now > this.timeFlag) {
        this.timeFlag = Date.now() + 3600 * 1000
        this.getWeather()
      }
    }, 500)

    this.$once('hook:beforeDestroy',  () => {
      clearInterval(this.timer)
      this.timer = null
    })
  },
  methods: {
    // 初始化日期时间
    initTime() {
      let weekList = ['一', '二', '三', '四', '五', '六', '日']
      this.dateMap.date = moment().format('YYYY.MM.DD')
      this.dateMap.day = weekList[moment().isoWeekday() - 1]
      this.dateMap.time = moment().format('HH:mm:ss')
    },
    // 获取天气
    getWeather() {
      axios('https://tianqiapi.com/api?version=v6&appid=27325769&appsecret=k2G7Q7bA').then(res => {
        this.weatherInfo = res.data
        this.weatherInfo.Interval = [res.data.tem1, res.data.tem2].sort()
      })
    }    
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/css/function.scss'; 
  .monitor-header {
    background-image: url('~@/assets/image/layout/header/header_bg.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-content: center;
    .header-center {
      overflow:hidden;
      justify-self: center;
      img {
        width: 678px;
      }
    }
    .header-left, .header-right {
      align-self: center;
      font-weight: 600;
      color: #15E4F8;
      font-size: 14px;
      span:not(:last-child) {
        margin-right: 24px
      }
    }
    .header-left {
      justify-self: start;
      padding-left: 51px;
    }
    .header-right {
      justify-self: end;
      padding-right: 26px;      
    }

  }
</style>