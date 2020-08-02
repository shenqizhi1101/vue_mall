<template>
  <div class="cartItemBox">
    <CheckButton class="cartButton" @click.native="checkClick" :isCheck="cartListItem.isCheck"/>
    <div class="cartImg">
      <img :src="cartListItem.topImages" alt="">
    </div>
    <div class="cartText">
      <p>{{cartListItem.title}}</p>
      <p>{{cartListItem.desc}}</p>
      <div class="cartPrice">
        <span>￥{{cartListItem.price}}</span>
        <span>x{{cartListItem.count}}</span>
      </div>
    </div>
    <!-- <h2>{{cartListItem.count}}</h2> -->
    <!-- {{cartListItem}} -->
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/checkButton.vue'
export default {
  data () {
    return {
      cartList: {}
    }
  },
  props: {
    cartListItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick () {
      // console.log(this.cartListItem.isCheck)
      this.cartListItem.isCheck = !this.cartListItem.isCheck
      // console.log(this.cartListItem)
    },
    a () {
      // this.cartList = {}
      // this.cartListItem.forEach(item => {
        // this.cartList.concat(this.cartListItem)
      // });
      // this.cartList.push(this.cartListItem)
      // for (let i = 0; i < this.cartListItem.length; i++) {
      //   console.log(i)
      // }
    }
  },
  activated () {
    // this.a()
    // this.cartList = this.cartListItem
    // console.log(32)
    // for (let i = 0; i < this.cartListItem.length; i++) {
    //     this.cartList.push(this.cartListItem[i])
    //   }
  }
}
</script>
<style lang="less" scoped>
.cartItemBox {
  display: flex;
  width: 100%;
  height: auto;
  padding: 8px;
  border-bottom: 2px solid #eee;
  align-items: center;
  justify-content: center;
}
.cartButton {
  margin-right: 8px;
}
.cartImg {
  width: 20%;
}
.cartImg img {
  width: 100%;
  border-radius: 8px;
}
.cartText {
  width: 70%;
  padding-left: 13px;
  padding-top: 10px;
}
.cartText p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  font-size: 14px;
}
.cartText p:first-child {
  font-size: 16px;
  margin-bottom: 15px;
}
.cartPrice {
  display: flex;
  margin-top: 20px;
  justify-items: center;
}
.cartPrice :first-child {
  color: var(--color-tint);
  flex: 1;
  font-size: 17px;
}
</style>
