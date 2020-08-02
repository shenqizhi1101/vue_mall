<template>
  <div id="detail">
    <DetailNavbar class="detail_navbar" @titleClick="titleClick" ref="navbar"/>
    <scroll class="content" ref="scroll" @scroll="getScroll" :probeType="3">
      <DetailSwiper :topImages="topImages"/>
      <DetailInfo :goods="goodsList"/>
      <DetailShop :shop="shopList"/>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <DetailParams :params="itemParams" ref="params"/>
      <DetailRate :rate="rateInfo" ref="rate"/>
      <GoodsList :goods="commendList" ref="commend"/>
    </scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop"/>
    <DetailBottomBar @addToCart="addToCart"/>
    <div>
      <!-- <Toast/> -->
    </div>
  </div>
</template>
<script>
import DetailNavbar from './childDetail/detailNavbar'
import DetailSwiper from './childDetail/detailSwiper'
import DetailInfo from './childDetail/detailInfo'
import DetailShop from './childDetail/detailShop'
import DetailGoodsInfo from './childDetail/detailGoodsInfo'
import DetailParams from './childDetail/detailParams'
import DetailRate from './childDetail/detailRate'
import DetailBottomBar from './childDetail/detailBottomBar'

import Scroll from 'components/common/scroll/scroll'
import GoodsList from 'components/content/goods/goodsList'
import BackTop from 'components/content/backTop/backTop'
import { debounce } from 'components/common/debounce'

// import Toast from 'components/common/toast/toast'

import { mapActions } from 'vuex'

import { getDetailList, getDateCommend, Goods, Shop, Params } from 'network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailParams,
    DetailRate,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop
    // Toast
  },
  data () {
    return {
      iid: null,
      // 获取到顶部轮播图的数据
      topImages: [],
      // 保存goods数据
      goodsList: {},
      // 保存shop数据
      shopList: {},
      // 详情图片数据
      detailInfo: {},
      // 参数数据
      itemParams: {},
      // 商品评论信息数据
      rateInfo: {},
      // 获取推荐数据
      commendList: [],
      // 头部点击的offsetTop
      themeOffsetTop: [],
      // 防抖函数保存
      titleDebounce: null,
      // 显示和隐藏返回按钮
      isShowBackTop: false,
      // 默认的导航栏的index值
      titleIndex: 0,
      positionY: 0
    }
  },
  created () {
    this.iid = this.$route.params.iid
    this.getDetailList()
    this.getDateCommend()
  },
  mounted () {
    // 防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('DetailimgItemLoad', () => {
      refresh()
    })
    // 点击头部导航栏的防抖函数
    this.titleDebounce = debounce(() => {
      this.themeOffsetTop.push(0)
      this.themeOffsetTop.push(this.$refs.params.$el.offsetTop - 44)
      this.themeOffsetTop.push(this.$refs.rate.$el.offsetTop - 44)
      this.themeOffsetTop.push(this.$refs.commend.$el.offsetTop - 44)
      this.themeOffsetTop.push(Number.MAX_VALUE)
    }, 50)
  },
  methods: {
    // 获取actions里面的数据
    ...mapActions(['addCart']),
    // 获取详情页的数据
    getDetailList () {
      getDetailList(this.iid).then(res => {
        console.log(res.data)
        this.topImages = res.data.result.itemInfo.topImages
        const data = res.data.result
        this.goodsList = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
        console.log(this.goodsList)
        this.shopList = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.itemParams = new Params(data.itemParams.info, data.itemParams.rule)
        if (data.rate.cRate !== 0) {
          this.rateInfo = data.rate.list[0]
        }
      })
    },
    // 获取推荐数据
    getDateCommend () {
      getDateCommend().then(res => {
        this.commendList = res.data.data.list
      })
    },
    // 获取展示图片的每次加载，然后刷新图片高度
    imageLoad () {
      this.$refs.scroll.refresh()
      this.titleDebounce()
    },
    // 获取滚动的位置 显示返回顶部按钮
    getScroll (position) {
      this.positionY = -position.y
      this.isShowBackTop = -(position.y) > 1000
      const length = this.themeOffsetTop.length
      for (let i = 0; i < length; i++) {
        if ((this.countIndex !== i) && (this.positionY >= this.themeOffsetTop[i] && this.positionY < this.themeOffsetTop[i + 1])) {
          this.$refs.navbar.countIndex = i
        }
      }
    },
    // 头部导航点击滚动对应位置
    titleClick (i) {
      this.$refs.scroll.scrollTo(0, -this.themeOffsetTop[i], 200)
      this.$refs.navbar.countIndex = i
    },
    // 返回顶部
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 添加加入购物车的信息
    addToCart () {
      // 这里是个坑 记得在这里定义一个空对象，不能再data里面定义，不然不会实时更新
      const product = {}
      product.desc = this.goodsList.desc
      product.title = this.goodsList.title
      product.topImages = this.topImages[0]
      product.price = this.goodsList.lowNowPrice
      product.iid = this.iid
      // 用...mapActions方法传值出来
      this.addCart(product).then(res => {
        this.$toast(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 100;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail_navbar {
  position: relative;
  top: 0;
  z-index: 101;
  background-color: #fff;
}
</style>
