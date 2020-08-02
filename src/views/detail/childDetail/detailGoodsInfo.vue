<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail_goodsInfo">
    <div class="detail_info">
      <span>{{detailInfo.desc}}</span>
      <p>{{detailInfo.detailImage[0].key}}</p>
    </div>
    <div class="detail_img">
      <img :src="item" v-for="(item, i) in detailInfo.detailImage[0].list" :key="i" @load="imageLoad">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
          imageLength: 0
        }
      }
    }
  },
  data () {
    return {
      counten: 0
    }
  },
  methods: {
    imageLoad () {
      if (++this.counten === this.imageLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo () {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style lang="less" scoped>
.detail_goodsInfo {
  padding: 20px 10px;
  border-bottom: 3px solid #eee;
}
.detail_info {
  padding-bottom: 10px;
}
.detail_info span {
  font-size: 12px;
}
.detail_info p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
.detail_img {
  width: 100%;
  height: 100%;
  text-align: center;
}
.detail_img img {
  width: 100%;
  height: auto;
}
</style>
