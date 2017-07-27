<template>
  <div class="card" id="card-list">
  
    <!--<div class="card-header">
                                                                    <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                                                                  </div>-->
    <div class="card-block container-fluid">
      <div class="row">
        <div class="col-xs-12" style="padding: 0;margin-bottom:154px;">
          <ul>
            <list-card v-for="ajgl in list" :key="ajgl.id" :ajgl="ajgl"></list-card>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import listCard from './children/listCard'
import { queryList } from '@/api/api'

export default {
  data() {
    return {
      list: []
    }
  },
  props: ['qxmc', 'dwlx'],
  methods: {
    queryList() {
      let para = {
        qxmc: this.qxmc,
        dwlx: this.dwlx
      };
      queryList(para).then((res) => {
        this.list = res.data.ajgls;
        //NProgress.done();
      });
    }
  },
  created() {
    this.queryList();
  },
  components: {
    listCard
  },
  watch: {
    qxmc: function (value) {
      this.queryList();
    },
    dwlx: function (value) {
      this.queryList();
    }
  }
}
</script>


<style scoped>
ul {
  -webkit-padding-start: 10px !important;
}
</style>


