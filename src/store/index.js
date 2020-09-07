import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://182.92.226.242:8081'
axios.interceptors.response.use((response) => {
    return response.data
})
export default new Vuex.Store({
    state: {

        pay_swipper: [], //值得买页面轮播
        userinfo: {},
        indexGoodlists: [], //首页商品列表
        user: {

        }, //用户信息， 维持登录
        indexGoodDetails: {}, //首页商品详情列表
        carlist: [], //用户加入购物车商品

        indexHead: {
            swiper: [],
            title1: '',
            title2: ''
        },
        paylist: [],
        count: '',
        search: ''


    },
    mutations: {
        indexHeadChange(state, list) {
            state.indexHead.swiper = list.swiper
            state.indexHead.title1 = list.title1
            state.indexHead.title2 = list.title2
        },
        payChange(state, list) {
            state.pay_swipper = list
        },
        userinfoChange(state, list) {
            state.userinfo = list
        },
        indexChange(state, list) {

            state.indexGoodlists = list
        },
        userChange(state, list) {
            state.user = list;
            state.count = state.user.carlist ? state.user.carlist.length : 0

        },
        indexGoodDetails(state, list) {
            state.indexGoodDetails = list
        },
        carChange(state, list) {

            state.carlist.push(list)
        },
        paylistChange(state, list) {
            state.paylist = list
        },
        countChange(state, list) {
            state.count = list

        },
        countAdd(state) {
            state.count++
        },

        userChan(state, list) {
            state.user = list
        },
        searchChange(state, list) {
            state.search = list
        }

    },
    actions: {
        async paylist(context) {
            let res = await axios('/paylist')

            if (res.status == 0) {
                context.commit('paylistChange', res.list)
            }
        },
        async pay(context) {
            let r = await axios('/pay_swipper');
            context.commit('payChange', r)
        },
        async indexGet(context, index) {

            let r = await axios('/goods/' + index)

            if (!r.status) {

                context.commit('indexChange', r['good' + index])
            }

        },
        async indexGoodDetailsGet(context, index) {

            let r = await axios('/goodsDetails/' + index)
            if (!r.status) {
                context.commit('indexGoodDetails', r['good' + r.index])
            }
        },
        async userGet(context) {
            let res = await axios('/session')

            if (res.status == 0) {
                context.commit('userChange', res.user)
            }
        },
        async indexHeadGet(context, index) {

            let res = await axios('/index/' + index)
            if (res.status == 0) {
                context.commit('indexHeadChange', res.list)
            }
        },
        async carput(context, list) {

            axios.put('/carput', {

                carlist: list,
                phone: context.state.user.phone

            })
        },
        async searchGet(context, key) {
            let r = axios.get('/search/' + key)
            if (!r.status) {
                context.commit('searchChange', r.goods)
            }
        }

    },
    getters: {
        pay_swippers(state) {
            var min = [];
            var arr = []
            state.pay_swipper.forEach(value => {
                min.push(value)
                if (min.length % 8 === 0) {
                    arr.push(min);
                    min = []
                }

            })

            return arr
        },
        paylistPack(state) {
            var min = [];
            var arr = [];
            state.paylist.forEach(value => {
                min.push(value)
                if (min.length == state.paylist.length / 2) {
                    arr.push(min);
                    min = [];
                }
            })
            return arr
        }
    }
})