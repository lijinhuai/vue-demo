<template>
  <div class="card" id="card-list">
  
    <!--<div class="card-header">
                                    <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                                  </div>-->
    <div class="card-block container-fluid">
      <div class="row">
        <div class="col-xs-12" style="padding: 0;margin-bottom:154px;">
          <ul>
            <list-card v-for="n in 20"></list-card>
          </ul>
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
  methods: {
    queryList() {
      // alert('1');
    }
  },
  created() {
    this.queryList();
  },
  components: {
    listCard
  }
}
</script>


<style scoped>
ul {
  -webkit-padding-start: 10px !important;
}
</style>


