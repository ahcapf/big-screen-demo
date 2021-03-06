import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '@/assets/js/flexible.js'
import '@/assets/css/main.scss'
import BorderBox1 from '@/components/borderBox1'

Vue.use(BorderBox1)
Vue.use(Element)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
