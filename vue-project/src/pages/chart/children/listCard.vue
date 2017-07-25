<template>
  <li class="li_card">
    <div class="row border-left">
      <div class="col-xs-7">
        <span class="title text-muted">单&nbsp;&nbsp;&nbsp;&nbsp;位&nbsp;&nbsp;：</span>
        <span class="content_text">{{ajgl}}</span>
      </div>' +
      <div class="col-xs-5">
        <span class="title text-muted">区&nbsp;&nbsp;&nbsp;&nbsp;县&nbsp;&nbsp;：</span>
        <span class="content_text"></span>
      </div>
      <div class="col-xs-7">
        <span class="title text-muted">违&nbsp;法&nbsp;率&nbsp;：</span>
        <span class="content_number" style="color: tomato">%</span>
      </div>
      <div class="col-xs-5">
        <span class="title text-muted">车&nbsp;辆&nbsp;数&nbsp;：</span>
        <span class="content_number"></span>
      </div>
      <div class="col-xs-7">
        <span class="title text-muted">现场违法：</span>
        <span class="content_number"></span>
      </div>
      <div class="col-xs-5">
        <span class="title text-muted">非&nbsp;现&nbsp;场&nbsp;：</span>
        <span class="content_number"></span>
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
.card {
  border: 0px;
}

.table th,
.table td {
  white-space: nowrap;
}

body {
  background-color: #e4e5e6;
}

.card-block {
  padding-top: 0px;
}

.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}


body,
div,
span,
header,
footer,
nav,
section,
aside,
article,
ul,
dl,
dt,
dd,
li,
a,
p,
h1,
h2,
h3,
h4,
h5,
h6,
i,
b,
textarea,
button,
input,
select,
figure,
figcaption {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: normal;
  font-family: "Microsoft Yahei";
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

.shop_li {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 0.025rem solid #f1f1f1;
  padding: 0.7rem 0.4rem;
}

.shop_right {
  -webkit-box-flex: 1;
  -webkit-flex: auto;
  -ms-flex: auto;
  flex: auto;
}

.foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  display: flex;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.3);
  /*border: solid 1px;*/
}

.guide_item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px;
}

.glyphicon.active {
  color: #3190e8 !important;
}


.guide_item .icon_style {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: .2rem;
  margin-top: .3rem;
  fill: #ccc;
}


.guide_item span {
  font-size: 1.75rem;
  color: #666;
}


.chart-title {
  background: url("../../../assets/title.jpg") no-repeat center #67c6f6;
  height: 90px;
  background-size: contain;
}

.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  /*background-color: #b3d4db;*/
  flex-wrap: wrap;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.3);
}

.flex-item {
  width: 100%;
  margin: 0.5rem auto;
  display: flex;
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

.li_card {
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.3);
  padding: 5px;
}

.border-left {
  border-left: solid #63c2de;
  border-left-width: 0.4rem;
  border-radius: 0.3rem;
  margin-left: 5px;
}

.form-control {
  border: 1px solid #ccc !important;
  border-radius: 0.25rem !important;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s !important;
}
</style>