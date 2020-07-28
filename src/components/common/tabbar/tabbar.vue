<template>
  <div>
    <div id='tabbar'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
#tabbar {
  width: 100%;
  height: 49px;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  box-shadow: 0px -1px 2px rgba(100, 100, 100, 0.2);
  z-index: 99;
}
</style>
