const Login = () =>
    import ('pages/Login')
const Home = () =>
    import ('components/Home')

const Welcome = () =>
    import ('pages/Welcome')
const Menu = () =>
    import ('pages/Menu')

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
                redirect: '/menu'
            },
            {
                path: '/menu',
                component: Menu
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