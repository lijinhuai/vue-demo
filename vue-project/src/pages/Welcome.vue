<template>
  <div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-container1">
        <list></list>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <chart></chart>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <mt-button @click.native="handleClick"></mt-button> -->
    <mt-tabbar fixed="true" v-model="selected">
      <mt-tab-item id="tab-container1">
        <img slot="icon" src=""> 列表
      </mt-tab-item>
      <mt-tab-item id="tab-container2">
        <img slot="icon" src=""> 图表
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import list from './chart/list'
import chart from './chart/chart'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 'tab-container1'
    }
  },
  methods: {
    handleClick: function () {
      this.$toast('Hello world!')
    }
  },
  components: {
    list,
    chart
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
