<template>
  <div class="detailParams" v-if="Object.keys(params).length !== 0">
    <div>
      <div v-for="(item, i) in params.tables" :key="i">
        <div v-for="(items, is) in item" :key="is" class="tableItem">
          <span v-for="(pitems, index) in items" :key="index">
            {{pitems}}
          </span>
        </div>
      </div>
    </div>
    <div v-for="(item, i) in params.set" :key="i">
      <div class="paramsSet">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
.detailParams {
  padding: 20px 10px;
  border-bottom: 3px solid #eee;
}
.tableItem {
  display: flex;
  padding: 15px 0;
  border-bottom: 2px solid #eee;
}
.tableItem span {
  flex: 1;
  font-size: 13px;
  padding: 0 5px;
}
.tableItem :first-child {
  flex-shrink: 0;
  font-size: 14px;
}
.paramsSet {
  padding: 10px 5px;
  width: 100%;
  border-bottom: 2px solid #eee;
}
.paramsSet :first-child {
  font-size: 14px;
  width: 30%;
  display: inline-flex;
}
.paramsSet :last-child {
  color: var(--color-tint);
  font-size: 13px;
  width: 70%;
  display: inline-flex;
}
</style>
