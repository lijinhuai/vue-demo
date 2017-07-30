<template>
  <el-menu :default-active="onRoutes" class="el-menu-demo" :mode="mode" unique-opened router>
    <template v-for="item in menuItems">
      <template v-if="item.subs">
        <el-submenu :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>{{ item.title }}</template>
          <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index">
          <i :class="item.icon"></i>{{ item.title }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
<script>
export default {
  props: ['mode', 'menuItems'],
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  }
}
</script>

