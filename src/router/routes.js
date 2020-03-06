import Login from '@/pages/login'
import Home from '@/layouts/template'
import Member from '@/pages/member'
import Vip from '@/pages/vip'
import auth from '@/middleware/auth'
import log from '@/middleware/log'


const defaultRoutes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: { middleware: log } 
}]

const memberRoutes = [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: { middleware: [auth, log] } ,
    children: [{
        path: '/home/member',
        component: Member
    }]
}]

const vipRoutes = [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: { middleware: [auth, log] } ,
    children: [
        {
            path: '/home/member',
            component: Member
        },
        {
            path: '/home/vip',
            component: Vip
        },
    ]
}]


export default {
    defaultRoutes,
    memberRoutes,
    vipRoutes,
}