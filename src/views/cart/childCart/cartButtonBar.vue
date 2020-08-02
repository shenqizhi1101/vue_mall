<template>
  <div class="cartButtonBar">
    <div class="checkBox">
      <CheckButton class="checkButton" :isCheck="isAllCheck" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="allPrice">
      <span>合计：</span>
      <span>{{allPrice}}</span>
    </div>
    <div class="checkLength" @click="goClick">
      <span>去计算({{checkLength}})</span>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/checkButton.vue'
export default {
  components: {
    CheckButton
  },
  methods: {
    checkClick () {
      if (this.isAllCheck) {
        for (const i of this.$store.state.cartList) {
          i.isCheck = false
        }
      } else {
        for (const i of this.$store.state.cartList) {
          i.isCheck = true
        }
      }
    },
    goClick () {
      if (!this.isAllCheck) {
        this.$toast('未选定商品！')
      }
    }
  },
  computed: {
    // 计算出选中的产品总价格
    allPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.isCheck
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    // 计算选中多少件产品
    checkLength () {
      return this.$store.state.cartList.filter(item => item.isCheck).length
    },
    // 判断是否全选
    isAllCheck () {
      if (this.$store.state.cartList.length === 0) return false
      // 1.filter方法
      // return !this.$store.state.cartList.filter(item => !item.isCheck).length
      // 2.find方法
      return !this.$store.state.cartList.find(item => !item.isCheck)
    }
  }
}
</script>
<style lang="less" scoped>
.cartButtonBar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  background-color: rgb(223, 222, 222);
  display: flex;
  align-items: center;
  font-size: 14px;
}
.checkButton {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.checkBox {
  display: flex;
  align-items: center;
  width: 75px;
  padding-left: 5px;
}
.allPrice {
  flex: 1;
}
.allPrice :last-child {
  color: var(--color-tint);
}
.checkLength {
  width: 80px;
  height: 100%;
  background-color: rgb(240, 66, 153);
  text-align: center;
  line-height: 40px;
  color: #fff;
}
</style>
