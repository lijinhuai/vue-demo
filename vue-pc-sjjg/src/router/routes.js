import Login from 'pages/Login'
import Home from 'components/Home'

import Welcome from 'pages/Welcome'
import Zhjg from 'pages/zhjg/index'
import Yryd from 'pages/yryd/index'
import Wjw from 'pages/wjw/index'
import Fxyp from 'pages/fxyp/index'
import Znyj from 'pages/znyj/index'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: Home,
        /*  meta: {
             requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
         }, */
        children: [{
                path: '/',
                redirect: '/welcome'
            },
            {
                path: '/welcome',
                redirect: '/zhjg'
            },
            {
                path: '/zhjg',
                component: Zhjg
            },
            {
                path: '/yryd',
                component: Yryd
            },
            {
                path: '/wjw',
                component: Wjw
            },
            {
                path: '/fxyp',
                component: Fxyp
            },
            {
                path: '/znyj',
                component: Znyj
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export default routes;