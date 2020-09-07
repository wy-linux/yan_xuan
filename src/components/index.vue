<template>
    <div class="index" style="margin-bottom: 1rem">
        <section style="height: 1.9rem">
            <div class="title" style="position: fixed; top: 0; width: 100%; z-index: 1000; background-color: #fff; box-sizing: border-box">
               <van-row type="flex" justify="space-between">
                  <van-col span="5">
                      <img src="../assets/logo-img.png" alt="" class="img">
                  </van-col>
                  <van-col span="16" class="search" @click='seachFn'>
                      <van-icon name="search" class="searchIcon" size=".5rem"/>
                      <span>内部优惠价</span>
                  </van-col>
                  <van-col span="3">
                      <van-button type="primary" size="mini" class="btn" @click="$router.push('/login_d')">登陆</van-button>
                  </van-col>
                </van-row>

            </div>

            <div class="tab" style="position: fixed; top: .9rem; width: 100%; z-index: 1000; background-color: #fff">
                 <van-tabs @click="routerChange">
                  <van-tab :key='index' v-for="(item, index) in tablist" :title='item' >
                  
                  </van-tab>
                </van-tabs>
            </div>
        </section>
        <div class="banner">
           <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
             <van-swipe-item v-for='(item, index) in $store.state.indexHead.swiper' :key='index'>
                 <img :src="item" alt="" style="width: 100%">
             </van-swipe-item>
             
           </van-swipe>
        </div>
        <keep-alive>
        <router-view />
        </keep-alive>
    </div>




</template>

<script>
import axios from 'axios'



export default {
    data() {
        return {
            tablist: [],
           imgs:[],
           index: '0'
      
        }
    },
    methods: {
        seachFn() {
            this.$router.push('/search')
        },
        routerChange(index) {
           this.index = index
        }
    },
        watch: {
            index() {
                if(this.index <= 2) {
                this.$store.dispatch('indexGet', this.index)
                
                this.$store.dispatch('indexHeadGet', this.index)
                if(this.$route.path !== '/indexlist') {
                    this.$router.replace('/indexlist')
                } 
               
            } else if(this.index == 3){
                this.$store.dispatch('indexHeadGet', this.index)
               
                if(this.$route.path !== '/default') {
                     this.$router.replace('/default')
                }
            } else {
                return
            }
        }
    },
       
       
    mounted: function() {
        this.$store.dispatch('indexHeadGet', 0)
        this.$store.dispatch('indexGet', 0)
        axios.get('/tablist').then(par => this.tablist = par)
    }
}
</script>
<style scoped>
    .title {
        padding: .21333rem .4rem;
        background: #fff;
    }
    .img {
        margin-right: .35rem;
        margin-top: .1rem;
    }
    .btn {
         width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #DD1A21;
        border: 1px solid #DD1A21;
        border-radius: .10667rem;
        margin-left: .21333rem;
        margin-top: .1rem;
        font-size: .32rem;
        background: #fff;
    }
    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        color: #666;
    }
    .searchIcon {
           
        margin-right: .13333rem;
    }
    .tab {
         padding: .2rem 0;
         font-size: .37333rem;
        color: #333;
    }
   

</style>