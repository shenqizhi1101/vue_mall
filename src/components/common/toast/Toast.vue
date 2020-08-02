<template>
  <div id="toast" v-show="isShow">
    <div class="mesg">{{message}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    // show (message = '发送的信息', duration = 2000) {
    //   this.message = message
    //   this.isShow = true
    //   setTimeout(() => {
    //     this.isShow = false
    //     this.message = ''
    //   }, duration)
    // }
  }
}
</script>
<style lang="less" scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  z-index: 999;
}
.mesg {color: #fff;font-size: 14px;}
</style>
