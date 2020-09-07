import Vue from 'vue'
import VueRouter from 'vue-router'
import indexDefault from '@/components/indexDefault.vue'
import details from '@/components/details.vue'

import search from '@/components/search.vue'
import index from '@/components/index.vue'
import carlist from '@/components/carlist.vue'

import pay from '@/components/pay.vue'

import login from '@/components/login.vue'
import login_d from '@/components/login_d.vue'
import goodDetails from '@/components/goodDetails.vue'

import indexList from '@/components/indexList'
import profile from '@/components/profile.vue'

import car from "@/components/car.vue"
import cared from '@/components/cared.vue'
Vue.use(VueRouter)



const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    name: 'index',

    meta: {
        show: true
    },
    component: index,
    children: [{
        path: '/default',
        component: indexDefault,
        meta: {
            show: true
        }
    }, {
        path: '/indexlist',
        component: indexList,
        meta: {
            show: true
        },
    }, {
        path: '/',
        redirect: '/indexlist'
    }]
}, {
    path: '/search',
    name: 'search',
    component: search
}, {
    path: '/carlist',
    name: 'carlist',
    meta: {
        show: true
    },
    component: carlist
}, {
    path: '/goodDetails',
    name: 'goodDetails',
    component: goodDetails
}, {
    path: '/login',
    name: 'login',
    meta: {
        show: true
    },
    component: login
}, {
    path: '/login_d',
    name: 'login_d',
    component: login_d
}, {
    path: '/pay',
    component: pay,
    meta: {
        show: true
    }


}, {
    path: '/profile',
    meta: {
        show: true
    },
    component: profile
}, {
    path: '/car',
    component: car,
    meta: {
        show: true
    }
}, {
    path: '/cared',
    component: cared,
    meta: {
        show: true
    }
}]



const router = new VueRouter({
    routes
})

export default router