<template>
  <div class="bottomBar">
    <div>
      <i class="iconfont icon-kefu"/>
      <p>客服</p>
    </div>
    <div>
      <i class="iconfont icon-dianpu"/>
      <p>店铺</p>
    </div>
    <div>
      <i class="iconfont icon-shoucang"/>
      <p>收藏</p>
    </div>
    <div class="shopCar" @click="addToCart">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>
<style lang="less" scoped>
.bottomBar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  align-items: center;
}
.bottomBar div {
  flex: 0.5;
  height: 100%;
}
.bottomBar i {
  padding-top: 6px;
  display: block;
  font-size: 20px;
}
.bottomBar p {
  font-size: 14px;
}
.shopCar {
  flex: 0.7 !important;
  background-color: rgb(252, 182, 54);
}
.bottomBar span {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.buy {
  flex: 0.7 !important;
  background-color: var(--color-tint);
  font-size: 15px;
}
</style>
