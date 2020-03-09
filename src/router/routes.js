import Login from '@/pages/login'
import Home from '@/layouts/template'
import Member from '@/pages/member'
import Vip from '@/pages/vip'
import PageNotFound from '@/pages/pageNotFound'
import AuthExpire from '@/pages/authExpire'
import Logout from '@/pages/logout'
import auth from '@/middleware/auth'
import log from '@/middleware/log'


const defaultRoutes = [   
    {
        path: '/',
        redirect: {
            name: 'login'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { middleware: log } 
    },
    {
        path: '/404',
        name: '404',
        component: PageNotFound,
        meta: { middleware: log } 
        
    },
    {
        path: '/expire',
        name: 'expire',
        component: AuthExpire,
        meta: { middleware: log } 
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: { middleware: log } 
    }
]

const memberRoutes = [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: { middleware: [auth, log] },
    children: [{
        path: '/home/member',
        component: Member
    }]
    },
    {
        path: '*', 
        redirect: '/404'
    }    
]

const vipRoutes = [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: { middleware: [auth, log] },
    children: [
        {
            path: '/home/member',
            component: Member
        },
        {
            path: '/home/vip',
            component: Vip
        },
    ]},
    {
        path: '*', 
        redirect: '/404'
    } 
]

export default {
    defaultRoutes,
    memberRoutes,
    vipRoutes
}