<template>
  <div id="home">
    <NavBar class="navbar_box">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl :tabControl="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isfixed"></TabControl>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3" :pullUpLoad="true" @pullingUp="moreLoader">
      <HomeSwiper :banner="banner" @swiperImageLoad="swiperImageLoad"/>
      <HomeRecommend :recommend='recommend'/>
      <Featur/>
      <TabControl :tabControl="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>
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
import { debounce } from 'components/common/debounce'
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
      isShowBackTop: false,
      // TabControl的offsetTop的默认值
      tabOffsetTop: 0,
      // 是否定位tabControl为fixed
      isfixed: false,
      scrollY: 0
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
  mounted () {
    // 创建防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    // 监听item中图片加载完成。加载完成就重新计算高度
    this.$bus.$on('HomeimgItemLoad', () => {
      // 调用函数
      refresh()
    })
    this.swiperImageLoad()
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

    // 加载完轮播图的图片后计算tabControl的offsetTop值
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 获取点击的是哪个按钮，传参数
    tabClick (index) {
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
      this.$refs.tabControl1.activeIndex = index
      this.$refs.tabControl2.activeIndex = index
    },
    // 返回顶部按钮
    backClick () {
      // 返回顶部的点击事件一定要在组件事件上加native
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 获取滚动位置的值，返回顶部
    contentScroll (position) {
      this.isShowBackTop = (-position.y) > 1000
      this.isfixed = (-position.y) > this.tabOffsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop + 44
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
  },
  // 返回本页时回到离开时滚动到的位置
  activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
  },
  // 离开本页时，记录离开时的页面滚动位置
  deactivated () {
    this.scrollY = this.$refs.scroll.scroll.y
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
  position: absolute;
  top: 43px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 9;
  top: 44px;
}
</style>
