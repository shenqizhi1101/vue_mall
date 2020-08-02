import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
// 导入图片懒加载包
import VueLazyLoad from 'vue-lazyload'

import 'assets/css/base.css'
// 导入字体图标
import 'assets/iconfont/iconfont.css'

// 安装toast插件
import toast from 'components/common/toast/index'
// 导入fastclick
import FastClick from 'fastclick'

// 安装懒加载包
Vue.use(VueLazyLoad)
// 移动端300ms延迟
FastClick.attach(document.body)

// 在vue的原型中新建一个实例
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
