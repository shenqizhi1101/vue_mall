<template>
  <div class="goods">
    <GoodsListItem v-for="(item, i) in goods" :key="i" :goodslist="item"/>
  </div>
</template>
<script>
import GoodsListItem from "./goodsListItem";
  export default {
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    components: {
      GoodsListItem
    }
  }
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
