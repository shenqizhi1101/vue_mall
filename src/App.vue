<template>
  <div id="app">
   <router-view></router-view>
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
