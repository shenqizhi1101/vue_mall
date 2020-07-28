<template>
  <div>
    <TabBar>
      <TabbarItem path="/home">
        <i class="iconfont icon-1"/>
        <div>首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <i class="iconfont icon-fenlei"/>
        <div>分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <i class="iconfont icon-icon-"/>
        <div>购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <i class="iconfont icon-yixianshi_huaban"/>
        <div>我的</div>
      </TabbarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/tabbar.vue'
import TabbarItem from 'components/common/tabbar/tabbarItem.vue'
export default {
  data () {
    return {}
  },
  components: {
    TabBar,
    TabbarItem
  }
}
</script>
<style lang='less' scoped>
</style>
