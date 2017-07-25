<template>
  <baidu-map class="map" :center="center" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      center: { lng: 116.404, lat: 39.915 }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The container of BaiduMap must be set width & height. */

.map {
  width: 100%;
  height: 600px;
}
</style>
