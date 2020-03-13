import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/pages/layout/layout'
import HomeIndex from '@/pages/home/index/index'
import MeIndex from '@/pages/me/index/index'


export const constantRouterMap = [
    {
        path: '/',
        name:'/',
        redirect: '/home/index/index',
        component: Layout,
        meta: {
            icon: 'wap-home-o',
            title: '首页',
            auth_api:'',
        },
        children: [
            {
                path: 'home/index/index',
                component: HomeIndex,
                meta: {
                    scrollTop: true,
                    auth_api:'',
                }
            }
        ]
    },
    {
        path: '/me/',
        name: 'me',
        redirect: '/me/index/index',
        component: Layout,
        meta: {
            icon: 'user-o',
            title: '我的',
            auth_api:'',
        },
        children: [
            {
                path: 'index/index',
                component: MeIndex,
                meta: {
                    scrollTop: true,
                    auth_api:'',
                }
            }
        ]
    },
];


export const _otherRoutes = [
    // {
    //     path: '/mobile/login/index',
    //     name: '/mobile/login/index',
    //     component: LoginPage,
    //     meta: {
    //         type: "mobile",
    //         icon: 'newspaper-o',
    //         title: '其他',
    //         auth_api:'',
    //     },
    // },
];


export function _getAllRoutes(){
    let ret = [];
    constantRouterMap.map((item) => {
        ret.push(item)
    })
    _otherRoutes.map((item) => {
        ret.push(item)
    })
    return ret;
}

const router = new Router({
    routes: _getAllRoutes(),
    scrollBehavior(to) {
        if (to.meta.scrollTop) {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    next()
})


export default router