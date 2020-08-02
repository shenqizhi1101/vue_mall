<template>
  <div class="goods-item" @click="goodsItem">
    <img v-lazy="imgUrl" alt="" @load="imgItemLoad">
    <div class="goods_text">
      <p>{{goodslist.title}}</P>
      <span>{{goodslist.price}}</span>
      <span>  收藏:{{goodslist.cfav}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      goodslist: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      imgItemLoad () {
        // 通过$bus的事件总线传递给home.vue页面接收，事件总线是哪个页面都可以拿到
        if (this.$route.path.indexOf('/home') !== -1) {
          this.$bus.$emit('HomeimgItemLoad')
        } else if (this.$route.path.indexOf('/detail') !== -1) {
          this.$bus.$emit('DetailimgItemLoad')
        }
        // this.$bus.$emit('imgItemLoad')
      },
      goodsItem () {
        this.$router.push('/detail/' + this.goodslist.iid)
      }
    },
    computed: {
      imgUrl () {
        return this.goodslist.image || this.goodslist.show.img
      }
    }
  }
</script>
<style lang="less" scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  z-index: 8;
}
.goods-item img {
  width: 100%;
  border-radius: 5px
}
.goods_text {
  position: absolute;
  text-align: center;
  padding: 7px 0;
  width: 100%;
  bottom: 0px;
}
.goods_text p {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods_text :nth-child(2) {
  font-size: 14px;
  color: var(--color-tint);
}
.goods_text :nth-child(3) {
  font-size: 14px;
}
</style>
