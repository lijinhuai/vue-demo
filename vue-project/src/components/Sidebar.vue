<template>
    <div class="sidebar">
        <v-menu mode="vertical" :menuItems="menuItems"></v-menu>
    </div>
</template>

<script>
import vMenu from './menu/ElmMenu.vue'
import menuItems from '@/config/menu.json';
export default {
    data() {
        return {
            menuItems: menuItems
        }
    },
    components: {
        vMenu
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    }
}
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 60px;
    bottom: 0;
    background: #2E363F;
}

.sidebar>ul {
    height: 100%;
}
</style>
