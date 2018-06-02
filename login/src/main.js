import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由配置
import  './element'
import store from './vuex'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // 等价于 router: router
  store,
  components: { App },
  template: '<App/>'
})
