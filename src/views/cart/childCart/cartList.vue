<template>
  <div class="cartList" v-if="isReload">
    <scroll class="counten" ref="scroll">
      <CartListItem
      v-for="(item, index) in isReload"
      :key="index"
      :cartListItem="item">
      </CartListItem>
    </scroll>
  </div>
</template>
<script>
import CartListItem from './cartListItem'

import Scroll from 'components/common/scroll/scroll'

import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isReload: []
    }
  },
  activated () {
    console.log(11)
    console.log(this.list)
    this.isReload = []
    this.isReload = this.list
    this.$refs.scroll.refresh()
  },
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters({
      list: 'cartList'
    })
  },
  methods: {
    reload () {
      this.isReload = false
      this.$nextTick(() => {
        this.isReload = true
      })
    }
  }
}
</script>
<style lang="less" scoped>
.cartList {
  overflow: hidden;
  height: 100vh;
}
.counten {
  height: calc(100% - 44px - 49px - 40px);
}
</style>
