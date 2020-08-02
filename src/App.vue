<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabbar/>
  </div>
</template>
<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar.vue'
export default {
  data () {
    return {}
  },
  components: {
    mainTabbar
  }
}
</script>
<style>
@import 'assets/css/base.css'
</style>
