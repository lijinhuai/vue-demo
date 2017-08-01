import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import iView from 'iview';

Vue.use(Router)

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routes
};

const router = new Router({
    routes: routes
});

// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if (store.state.token) { // 通过vuex state获取当前的token是否存在
//             next();
//         } else {
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     } else {
//         next();
//     }
// });

// JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
// router.beforeEach(({ name }, from, next) => {
//     // 获取 JWT Token
//     if (localStorage.getItem('JWT_TOKEN')) {
//         // 如果用户在login页面
//         if (name === 'login') {
//             next('/');
//         } else {
//             next();
//         }
//     } else {
//         if (name === 'login') {
//             next();
//         } else {
//             next({ name: 'login' });
//         }
//     }
// });

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;