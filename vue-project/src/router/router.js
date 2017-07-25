import Vue from 'vue'
import Router from 'vue-router'


import Login from 'pages/Login'
import Home from 'components/Home'
import Welcome from 'pages/Welcome'

Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [{
            path: '/',
            component: Welcome
        }]
    },
    {
        path: '/login',
        component: Login
    }
];



const router = new Router({
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.token) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

export default router;