<template>
  <Menu mode="horizontal" theme="light" :active-name="onRoutes" @on-select="onSelect">
    <template v-for="(item,i) in menuItems">
      <template v-if="item.subs">
        <Submenu :name="item.index">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            {{item.title}}
          </template>
  
          <Menu-item v-for="(subItem,i) in item.subs" :key="i" :name="subItem.index">{{subItem.title}}</Menu-item>
  
          <!-- <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group> -->
        </Submenu>
  
      </template>
      <template v-else>
        <Menu-item :name="item.index">
          <Icon type="ios-paper"></Icon>
          {{item.title}}
        </Menu-item>
      </template>
  
    </template>
    <!-- <Menu-item name="zhjg">
            <Icon type="ios-paper"></Icon>
            内容管理
          </Menu-item>
          <Menu-item name="wjw">
            <Icon type="ios-people"></Icon>
            用户管理
          </Menu-item>
        
          <Menu-item name="4">
            <Icon type="settings"></Icon>
            综合设置
          </Menu-item> -->
  </Menu>
</template>

<script>
export default {
  props: ['mode', 'menuItems'],
  methods: {
    onSelect(name) {
      const self = this;
      self.$router.push(name);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  }
}
</script>
