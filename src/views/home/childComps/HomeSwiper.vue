<template>
  <div class=homeSwiper>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"/>
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
      isLoad: false
    }
  },
   components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
<style scoped>
.homeSwiper {
  margin-top: 44px;
}
</style>
