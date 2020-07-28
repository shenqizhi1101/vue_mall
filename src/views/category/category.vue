<template>
  <div>
    分类
    <TabControl :tabControl="['1', '2', '3']"/>
  </div>
</template>
<script>
import TabControl from 'components/content/tabControl/tabControl'
export default {
  data () {
    return {}
  },
  components: {
    TabControl
  }
}
</script>
<style lang='less' scoped>
</style>
