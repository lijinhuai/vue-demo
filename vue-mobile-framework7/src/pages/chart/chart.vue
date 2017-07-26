<template>
  <section class="chart-container" style="display:block;with:100%;">
    <div id="chartColumn" style="width:100%; height:400px;"></div>
  </section>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      chartColumn: null,
      xAxis: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      data: [5, 20, 36, 10, 10, 20]
    }
  },

  methods: {
    drawColumnChart() {
      this.chartColumn = echarts.init(document.getElementById('chartColumn'));
      this.chartColumn.setOption({
        title: { text: 'Column Chart' },
        tooltip: {},
        xAxis: {
          data: this.xAxis
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.data
        }]
      });
    },
    drawCharts() {
      this.drawColumnChart()
    },
  },
  mounted: function () {
    this.drawCharts()
  },
  updated: function () {
    this.drawCharts()
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  float: left;
}
</style>
