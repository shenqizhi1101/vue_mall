<template>
  <div class=homeSwiper>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  props: {
    banner: Array,
    default: []
  },
  data() {
    return {
    }
  },
   components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.homeSwiper {
  margin-top: 44px;
}
</style>
