import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/css/base.css'
// 导入字体图标
import 'assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
