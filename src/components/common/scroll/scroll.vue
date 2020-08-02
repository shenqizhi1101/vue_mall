<template>
  <div class="wrapper" ref='content'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        scroll: null
      }
    },
    mounted () {
      // 实例对象，添加属性 probeType 0，1为默认，不滚动，2为实时获取滚动的位置，不包含惯性滚动，3为实时获取滚动位置，包含惯性滚动
      this.scroll = new BScroll(this.$refs.content, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      // 动态获取滚动位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      // 下拉加载更多事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      // 封装返回顶部按钮的事件
      scrollTo (x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 停止再重新加载更多
      finishPullUp () {
        this.scroll && this.scroll.finishPullUp()
      },
      // 图片每个load后都进行一次计算高度
      refresh () {
        this.scroll && this.scroll.refresh()
      },
      // 获取scroll的y值
      scrollY () {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>
<style lang="less" scoped>
</style>
