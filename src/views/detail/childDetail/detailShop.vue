<template>
  <div class="shop_box">
    <div class="shop_name">
      <img :src="shop.shopLogo">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop_list">
      <div class="shopList_item">
        <p>{{shop.cSells}}</p>
        <p>总销量</p>
      </div>
      <div class="shopList_item">
        <p>{{shop.cGoods}}</p>
        <p>全部宝贝</p>
      </div>
      <div class="shopList_item">
        <div class="shuxian"></div>
      </div>
      <div class="shopList_item">
        <div v-for="(item, i) in shop.score" :key="i">
          <span>{{item.name}}</span>
          <span :class="{colorRed: item.isBetter}"> {{item.score}}</span>
          <span :class="{bgColorRed: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shopUrl">
      <a :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.shop_box {
  padding: 20px 10px;
  border-bottom: 3px solid #eee;
}
.shop_name {
  display: flex;
  align-items: center;
  font-size: 15px;
}
.shop_name img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.shop_list {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  align-items: center;
  padding: 20px;
}
.shop_list :nth-child(0), .shop_list :nth-child(1) {
  text-align: center;
}
.shopList_item {
  flex-shrink: 0;
}
.shuxian {
  background-color: #eee;
  width: 2px;
  height: 35px;
}
.shopList_item div :nth-child(2) {
  color: rgb(134, 207, 24);
  margin-left: 5px;
}
.shopList_item p, .shopList_item div{
  margin-bottom: 4px;
}
.shopList_item div :last-child {
  flex: 1;
  background-color: rgb(134, 207, 24);
  color: white;
  font-size: 12px;
  border-radius: 2px;
  float: right;
  margin-left: 5px;
  padding: 1px;
}
.bgColorRed {
  background-color: red !important;
}
.colorRed {
  color: red !important;
}
.shopUrl {
  width: 100px;
  height: 26px;
  background-color: #eee;
  border-radius: 10px;
  text-align: center;
  line-height: 25px;
  margin: auto;
  font-size: 13px;
}
</style>
