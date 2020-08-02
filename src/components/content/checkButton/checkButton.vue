<template>
  <div class="checkButton" :class="{check: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  activated () {
    console.log(this.isCheck)
  }
}
</script>
<style scoped>
.checkButton {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(156, 156, 156);
}
.check {
  background-color: var(--color-tint);
  border: none
}
</style>
