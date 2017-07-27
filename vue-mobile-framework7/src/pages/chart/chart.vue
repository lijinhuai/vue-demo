<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div id="chartColumn" style="width:100%; height:400px;"></div>
      </div>
    </div>
  </div>
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
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            /*axisLabel: {
             rotate: 10,
             interval: 10
             },*/
            show: false,
            type: 'category',
            data: this.xAxis,
            axisTick: {
              alignWithLabel: true
            }

          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '违法率',
            type: 'bar',
            barWidth: '60%',
            data: this.data
          }
        ]
      });
    },
    drawCharts() {
      this.drawColumnChart()
    },
  },
  mounted: function () {
    // this.drawCharts()
  },
  updated: function () {
    // this.drawCharts()
  }
}
</script>

<style scoped>
</style>
