// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Mock from './mock'
Mock.bootstrap();

import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint)

import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#app')