<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-block">
        <div class="row">
          <div class="col-sm-12 col-xs-12 p-x-1 text-center chart-title">
          </div>
          <div class="col-sm-12 col-xs-12" style="text-align: left">
            <div class="form-group" style="padding-top: 10px;">
              <div class="col-xs-6" style="padding: 0px;">
                <span class="text-muted">区县名称：</span>
                <select class="form-control" id="qx" style="width:120px;display: inline-block"></select>
              </div>
              <div class="col-xs-6" style="padding: 0px;">
                <span class="text-muted">单位类型：</span>
                <select class="form-control" id="dwlx" style="width:120px;display: inline-block"></select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card" id="card-list" style="margin-top: -5px;">
      <div class="card-header">
        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-xs-12" style="padding: 0;">
            <ul>
              <list-card v-for="n in 10"></list-card>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import listCard from './children/listCard'

export default {
  data() {
    return {

    }
  },
  components: {
    listCard
  }
}
</script>


<style scoped>
.chart-title {
  background: url("../../assets/title.jpg") no-repeat center #67c6f6;
  height: 90px;
  background-size: contain;
}
</style>


