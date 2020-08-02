<template>
  <!-- <div class="detail-swiper"> -->
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, i) in topImages" :key="i">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  <!-- </div> -->
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.detail-swiper {
  height: 300px;
}
</style>
