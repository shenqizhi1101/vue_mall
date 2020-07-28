<template>
  <div class="recommend">
    <div v-for="(item, i) in recommend" :key="i" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommend: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
.recommend-item p {
  font-size: 12px;
}
</style>
