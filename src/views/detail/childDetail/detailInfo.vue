<template>
  <div class="detailInfo" v-if="Object.keys(goods).length !== 0">
    <div class="goodsTitle">
      <span>{{goods.title}}</span>
    </div>
    <div class="goodsPrice">
      <span>{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span :class="{none: !goods.discountDesc}">{{goods.discountDesc}}</span>
    </div>
    <div class="goodsInfo">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="goodsMail">
      <div class="goodsMail-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
.none {
  display: none;
}
.detailInfo {
  padding: 10px;
  border-bottom: 3px solid #eee;
}
.goodsTitle {
  font-size: 16px;
}
.goodsPrice {
  margin-top: 10px;
}
.goodsPrice span {
  padding: 3px;
}
.goodsPrice :first-child {
  color: var(--color-tint);
  font-size: 16px;
}
.goodsPrice :nth-child(2) {
  color: rgb(131, 130, 130);
  text-decoration: line-through;
  font-size: 12px;
}
.goodsPrice :last-child {
  background-color: var(--color-tint);
  border-radius: 10px;
  font-size: 13px;
  color: white;
  padding: 3px;
  position: relative;
  top: -5px;
}
.goodsInfo {
  // padding: 8px;
  padding: 15px 0 5px 0;
  display: flex;
  border-bottom: 2px solid #eee;
}
.goodsInfo span {
  flex: 1;
  font-size: 12px;
  color: rgb(131, 130, 130);
  text-align: center;
}
.goodsInfo :last-child {
  text-align: right;
}
.goodsInfo :first-child {
  text-align: left;
}
.goodsMail {
  padding: 15px 0;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.goodsMail-item img {
  width: 12px;
  height: 12px;
}
// .right {
//   text-align: right;
// }
</style>
