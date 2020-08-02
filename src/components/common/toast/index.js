import Toast from './Toast.vue'

const obj = {}

 obj.install = function (Vue) {
  //  1.创建组件构造器
  const ToastContrustor = Vue.extend(Toast)
  // 2.new的方式，根据组件构造器，创建一个新的组件对象
  const toast = new ToastContrustor()
  // 3.将组件对象挂载在对象上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = function(text) {
    toast.isShow = true
    toast.message = text
    setTimeout(() => {
      toast.isShow = false
      toast.message = ''
    }, 1000)
  }
 }
// 导出对象
export default obj
