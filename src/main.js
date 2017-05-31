
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import http from '@/config/axios'
import store from '@/Vuex'
import { Toast } from 'mint-ui';

//把请求挂在全局vue实例下，可以直接在页面或者组件中用this.$http()来使用
Vue.prototype.$http = http

//把toast挂在vue实例下
Vue.prototype.$toast = Toast

Vue.config.productionTip = false

//去除300毫秒的点击延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
