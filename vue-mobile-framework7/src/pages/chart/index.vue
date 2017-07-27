<template>
  <f7-page tabs no-page-content tabbar-labels-fixed>
    <!-- <div slot="fixed">Fixed element</div>-->
    <!--<f7-navbar title="My App"></f7-navbar>-->
    <div slot="fixed">
      <div class="card">
        <div class="card-block">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-xs-12 p-x-1 text-center chart-title">
              </div>
              <div class="col-sm-12 col-xs-12" style="text-align: left">
                <div class="form-group" style="padding-top: 10px;">
                  <div>
                    <div class="col-xs-6" style="padding: 0px;">
                      <span class="text-muted">区县名称：</span>
                      <select class="form-control" v-model="qxmc" style="width:120px;display: inline-block">
                        <option v-for="item in qxmcList" :value="item.mc" :key="item.id">{{item.mc}}</option>
                      </select>
                    </div>
                    <div class="col-xs-6" style="padding: 0px;">
                      <span class="text-muted">单位类型：</span>
                      <select class="form-control" v-model="dwlx" style="width:120px;display: inline-block">
                        <option v-for="item in dwlxList" :value="item.mc" :key="item.id">{{item.mc}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <f7-page-content tab active id="tab1">
      <list-page-content :qxmc="qxmc" :dwlx="dwlx" ref="listCl"></list-page-content>
    </f7-page-content>
    <f7-page-content @tab:show="drawCharts" tab id="tab2">
      <chart-page-content ref="chartCl"></chart-page-content>
    </f7-page-content>
  
    <f7-toolbar tabbar labels>
      <f7-link icon="tabbar-demo-icon-1" text="列表" tab-link="#tab1" active></f7-link>
      <f7-link icon="tabbar-demo-icon-2" text="图表" tab-link="#tab2"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
import listPageContent from './list'
import chartPageContent from './chart'

import { queryQxmcList, queryDwlxList } from '@/api/api'

export default {
  data() {
    return {
      qxmcList: [],
      dwlxList: [],
      qxmc: '',
      dwlx: ''
    }
  },
  methods: {
    queryQxmcList() {
      let para = {
      };
      queryQxmcList(para).then((res) => {
        this.qxmcList = res.data.qxmcs;
      });
    },
    queryDwlxList() {
      let para = {
      };
      queryDwlxList(para).then((res) => {
        this.dwlxList = res.data.dwlxs;
      });
    },
    drawCharts() {
      this.$refs.chartCl.drawCharts();
    }
  },
  created() {
    this.queryQxmcList();
    this.queryDwlxList();

  },
  components: {
    listPageContent, chartPageContent
  }
}
</script>

<style>
/* Your app custom files in this file */


/* Tab bar icons */

i.tabbar-demo-icon-1 {
  width: 30px;
  height: 30px;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' fill='%23929292'><g><circle cx='15.2' cy='8.8' r='1.5'/><polygon points='16.7,12.3 16.7,11.7 16.7,11.3 13.7,11.3 13.7,12.3 14.7,12.3 14.7,20.3 13.7,20.3 13.7,21.3 17.7,21.3 17.7,20.3 16.7,20.3'/><path d='M15.2,2.3C8.3,2.3,2.7,7.9,2.7,14.8s5.6,12.5,12.5,12.5c6.9,0,12.5-5.6,12.5-12.5S22.1,2.3,15.2,2.3z M15.2,26.3 c-6.3,0-11.5-5.2-11.5-11.5S8.8,3.3,15.2,3.3s11.5,5.2,11.5,11.5S21.5,26.3,15.2,26.3z'/></g></svg>");
}

.active i.tabbar-demo-icon-1 {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 30' fill='%23007aff'><path d='M15,2.6C8.1,2.6,2.5,8.2,2.5,15.1C2.5,22,8.1,27.6,15,27.6S27.5,22,27.5,15.1C27.5,8.2,21.9,2.6,15,2.6z M15,7.6 c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5C13.5,8.3,14.2,7.6,15,7.6z M17.5,21.6h-4v-1h1v-8h-1v-1h3V12 v0.6v8h1V21.6z'/></svg>");
}

i.tabbar-demo-icon-2 {
  width: 25px;
  height: 30px;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 17' fill='%23929292'><path d='M19.5,0h-14L0,6v11h25V6L19.5,0z M5.9,1h13.2l4.5,5H16c0,1.9-1.6,3.4-3.5,3.4C10.6,9.4,9,7.9,9,6H1.4L5.9,1z M24,16H1V7h7.1 c0.5,1.9,2.3,3.4,4.4,3.4s3.9-1.5,4.4-3.4H24V16z'/></svg>");
}

.active i.tabbar-demo-icon-2 {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 17' fill='%23007aff'><path d='M19.5,0h-14L0,6v11h25V6L19.5,0z M5.9,1h13.2l4.5,5H16c0,1.9-1.6,3.4-3.5,3.4C10.6,9.4,9,7.9,9,6H1.3L5.9,1z'/></svg>");
}

.chart-title {
  background: url("~@/assets/title.jpg") no-repeat center #67c6f6;
  height: 90px;
  background-size: contain;
}

.form-control {
  border: 1px solid #ccc !important;
  border-radius: 0.25rem !important;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s !important;
}




























/*.tabbar a,
.tabbar a:hover,
.tabbar a:focus {
  text-decoration: none;
}*/

.card {
  margin: 0 0 5px 0;
  padding: 0 0 10px 0;
}
</style>
