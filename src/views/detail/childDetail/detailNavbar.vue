<template>
  <div>
    <NavBar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" @click="backClick">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, i) in titles" :key="i" :class="{colorRed: countIndex === i}" @click="titleClick(i)">
          <span>{{item}}</span>
        </div>
      </div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/navBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      countIndex: 0
    }
  },
  methods: {
    backClick () {
      this.$router.back()
    },
    titleClick (i) {
      this.countIndex = i
      this.$emit('titleClick', i)
    }
  }
}
</script>
<style lang="less" scoped>
.titles {
  display: flex;
  font-size: 13px;
}
.titles div {
  flex: 1;
}
.back {
  margin-top: 6px;
}
.colorRed {
  color: var(--color-tint);
}
</style>
