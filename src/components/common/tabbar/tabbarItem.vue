<template>
  <div class="taabar-item" @click="pathclick">
    <div :style="activeStyle"><slot></slot></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  // 父传子属性
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    pathclick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    // 计算属性判断path是否为点击的，是则返回
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 封装颜色，外面调用的页面可以修改颜色
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>
<style lang='less' scoped>
.taabar-item {
  flex: 1;
}
.taabar-item i {
  font-size: 20px;
}
.taabar-item div {
  font-size: 14px;
}
</style>
