<template>
  <f7-views>
    <f7-view id="main-view">
      <!-- iOS Theme Navbar -->
  
      <f7-navbar v-if="$theme.ios">
        <f7-nav-left>
          <f7-link icon="icon-bars" open-panel="left"></f7-link>
        </f7-nav-left>
        <f7-nav-center sliding>Framework7</f7-nav-center>
        <f7-nav-right>
          <f7-link icon="icon-bars" open-panel="right"></f7-link>
        </f7-nav-right>
      </f7-navbar>
  
      <!-- Pages -->
      <f7-pages>
        <chart-page></chart-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
<script>
import chartPage from './chart/index'
export default {
  components: {
    chartPage
  }
}
</script>

