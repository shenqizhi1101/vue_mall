<template>
  <div>
    <NavBar class="navBar_box">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList/>
    <CartButtonBar/>
  </div>
</template>
<script>
import CartList from './childCart/cartList'
import CartButtonBar from './childCart/cartButtonBar'

import NavBar from 'components/common/navbar/navBar.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
    }
  },
  components: {
    CartList,
    CartButtonBar,
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>
<style lang='less' scoped>
.navBar_box {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
