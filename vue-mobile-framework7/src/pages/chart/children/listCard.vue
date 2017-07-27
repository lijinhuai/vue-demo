<template>
  <li class="li_card">
    <div class="container-fluid">
      <div class="row border-left">
        <div class="col-xs-7">
          <span class="title text-muted">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位&nbsp;&nbsp;：</span>
          <span class="content_text">{{ajgl.dwmc}}</span>
        </div>
        <div class="col-xs-5">
          <span class="title text-muted">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;县&nbsp;&nbsp;：</span>
          <span class="content_text">{{ajgl.qxmc}}</span>
        </div>
        <div class="col-xs-7">
          <span class="title text-muted">违&nbsp;法&nbsp;率&nbsp;：</span>
          <span class="content_number" style="color: tomato">{{ajgl.bfl}}%</span>
        </div>
        <div class="col-xs-5">
          <span class="title text-muted">车&nbsp;辆&nbsp;数&nbsp;：</span>
          <span class="content_number">{{ajgl.cls}}</span>
        </div>
        <div class="col-xs-7">
          <span class="title text-muted">现场违法：</span>
          <span class="content_number">{{ajgl.xc}}</span>
        </div>
        <div class="col-xs-5">
          <span class="title text-muted">非&nbsp;现&nbsp;场&nbsp;：</span>
          <span class="content_number">{{ajgl.fxc}}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['ajgl']
}
</script>

<style scoped>
li {
  list-style: none;
}

.card {
  border: 0px;
}

.card-block {
  padding-top: 0px;
}

.li_card {
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.3);
  padding: 5px 0;
}

.title {
  /*padding-left:1rem;*/
}

.content_text {
  /*color: green;*/
  font-size: 14px;
}

.content_number {
  color: #63c2de;
  font-size: 18px;
}

.border-left {
  border-left: solid #63c2de;
  border-left-width: 0.4rem;
  border-radius: 0.3rem;
  /* margin-left: 5px;*/
}
</style>