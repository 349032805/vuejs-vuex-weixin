import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由异步切换示例
//const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
