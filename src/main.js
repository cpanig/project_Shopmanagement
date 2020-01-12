import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './plugins/element.js'
/* 导入字体图标 */
import './assets/fonts/iconfont.css'
import axios from 'axios'
Vue.prototype.$http = axios
/* 配置请求的根路径 */
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
