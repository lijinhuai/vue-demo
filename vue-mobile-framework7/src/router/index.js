import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chart from '@/pages/chart/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Chart',
        component: Chart
    }]
})