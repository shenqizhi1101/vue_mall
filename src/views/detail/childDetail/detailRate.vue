<template>
  <div v-if="Object.keys(rate).length !== 0" class="detailRate">
    <div class="rateMore">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rateInfo">
      <div class="rateUser">
        <img :src="rate.user.avatar">
        <span>{{rate.user.uname}}</span>
      </div>
      <span class="rateContent">{{rate.content}}</span>
      <div class="rateStyle">
        <span>{{rate.created | dateFormat}}</span>
        <span>{{rate.style}}</span>
      </div>
      <div v-if="rate.images" class="rateImg">
        <img :src="item" v-for="(item, i) in rate.images" :key="i" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rate: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    // 定义一个时间戳
    dateFormat (value) {
      const dt = new Date(value * 1000)
      const y = dt.getFullYear()
      const m = (dt.getMonth() + 1 + '').padStart(2, '0')
      const d = (dt.getDate() + '').padStart(2, '0')
      return `${y}-${m}-${d}`
    }
  }
}
</script>
<style lang="less" scoped>
.detailRate {
  padding: 20px 10px;
  border-bottom: 3px solid #eee;
}
.rateMore {
  display: flex;
  font-size: 15px;
  padding: 0 0 20px 0;
  border-bottom: 2px solid #eee;
  justify-content: space-between;
}
.rateInfo {
  padding: 20px 0;
}
.rateUser {
  display: flex;
  align-items: center;
}
.rateUser img {
  width: 35px;
  height: auto;
  border-radius: 50%;
}
.rateUser span {
  font-size: 15px;
  margin-left: 10px;
}
.rateContent {
  font-size: 13px;
  margin: 10px 0;
  display: block;
  line-height: 18px;
}
.rateStyle {
  font-size: 12px;
  color: #969696;
  margin-bottom: 20px;
}
.rateStyle :last-child {
  margin-left: 10px;
}
.rateImg {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.rateImg img {
  width: 24%;
  flex-shrink: 0;
  padding: 2px;
}
</style>
