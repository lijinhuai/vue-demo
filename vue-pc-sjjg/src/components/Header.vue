<template>
  <div class="header">
    <v-menu mode="horizontal" :menuItems="menuItems"></v-menu>
  </div>
</template>
<script>
import vMenu from './menu/iViewMenu.vue'
import menuItems from '@/config/menu.json';
export default {
  data() {
    return {
      menuItems: menuItems,
      mode: 'horizontal'
    }
  },
  components: {
    vMenu
  }
}
</script>
<style scoped>
.header {
}
</style>
