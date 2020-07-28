<template>
  <div>
    <div class="nav_bar">
      <div class="nav_left"><slot name="left"></slot></div>
      <div class="nav_center"><slot name="center"></slot></div>
      <div class="nav_right"><slot name="right"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
.nav_bar {
  height: 44px;
  line-height: 44px;
  width: 100%;
  display: flex;
}
.nav_left,.nav_right {
  width: 60px;
}
.nav_center {
  flex: 1;
  text-align: center;
}
</style>
