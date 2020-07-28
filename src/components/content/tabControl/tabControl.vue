<template>
  <div class="tabControl">
      <div v-for="(item, index) in tabControl" :key="index" class="tabControl-item" :class="{ active : index === activeIndex }" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    tabControl: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      console.log(index)
      this.activeIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style lang="less" scoped>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  // position: sticky;
  // top: 44px;
  z-index: 100;
}
.tabControl-item {
  flex: 1;
}
.tabControl-item span {
  padding: 3px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-height-text);
}
</style>
