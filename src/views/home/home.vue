<template>
  <div id="home">
    <NavBar class="navbar_box">
      <div slot="center">购物街</div>
    </NavBar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3" :pullUpLoad="true" @pullingUp="moreLoader">
      <HomeSwiper :banner="banner"/>
      <HomeRecommend :recommend='recommend'/>
      <Featur/>
      <TabControl :tabControl="['流行', '新款', '精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods"/>
    </scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>
<script>
// 导入其他页面组件
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommend from './childComps/HomeRecommend.vue'
import Featur from './childComps/Featur'

// 导入共同组件的模块
import NavBar from 'components/common/navbar/navBar.vue';
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/goodsList'
import scroll from 'components/common/scroll/scroll'
import BackTop from 'components/content/backTop/backTop'

// 导入请求数据的组件
import { getHomeList, getDataList } from 'network/home.js';
export default {
  data () {
    return {
      // 请求首页轮播图和四个图标的数据数组
      banner: [],
      recommend: [],
      // 请求热门，精选，新款的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 请求的默认goods
      tabGoods: 'pop',
      // 显示隐藏返回顶部图标
      isShowBackTop: false
    }
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    Featur,
    NavBar,
    TabControl,
    GoodsList,
    scroll,
    BackTop
  },
  created() {
    // 页面加载时获取请求数据
    this.getHomeList()
    this.getDataList('pop')
    this.getDataList('new')
    this.getDataList('sell')
  },
  methods: {
    // 请求首页的轮播图和四个图标数据
    getHomeList () {
      getHomeList().then(res => {
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
      return true;
      })
    },
    // 请求流行，新款，精选的产品数据
    getDataList (type) {
      const pages = this.goods[type].page + 1
      getDataList(type, pages).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },
    // 获取点击的是哪个按钮，传参数
    tabClick (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.tabGoods = 'pop'
          break
        case 1:
          this.tabGoods = 'new'
          break
        case 2:
          this.tabGoods = 'sell'
          break
      }
    },
    // 返回顶部按钮
    backClick () {
      this.$refs.scroll.backScroll(0, 0, 500)
    },
    // 获取滚动位置的值，返回顶部
    contentScroll (position) {
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
    },
    // 下拉加载更多
    moreLoader () {
      this.getDataList(this.tabGoods)
      this.$refs.scroll.finishPullUp()
    }
  },
  computed: {
    // 父传子，计算属性 goods
    showGoods () {
      return this.goods[this.tabGoods].list
    }
  }
};
</script>
<style lang="less" scoped>
#home {
  position: relative;
  // vh单位是高度为窗口的高度
  height: 100vh;
}
.navbar_box {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  // height: 500px;
  // overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
