<template>
  <div id="app">
  
    <router-view/>

    <div class="foot_nav" v-show="$route.meta.show">
        <router-link to='/index'> <i class="iconfont icon-home" :class="{on: $route.path == '/indexlist' || $route.path == '/default'}"></i> <span class="text" :class="{on: $route.path == '/indexlist' || $route.path == '/default'}">首页</span> </router-link >
        <router-link to='/carlist'> <i class="iconfont icon-favoriteslist" :class="{on: $route.path == '/carlist'}"></i> <span class="text" :class="{on: $route.path == '/carlist'}">分类</span> </router-link >
        <router-link to='/pay'> <i class="iconfont icon-faimlyalbum" :class="{on: $route.path == '/pay'}"></i> <span class="text" :class="{on: $route.path == '/pay'}">值得买</span> </router-link >
        <router-link :to="user.phone ? '/cared' : '/car'"> <i class="iconfont icon-cart" :class="{on: $route.path == '/car' || $route.path == '/cared'}"></i>  <span class="text" :class="{on: $route.path == '/car' ||  $route.path =='/cared'}">购物车</span> </router-link >
        <router-link :to="user.phone ? '/profile' : '/login'"> <i class="iconfont icon-nickname" :class="{on: $route.path == '/login' || $route.path=='/profile'}"></i> <span class="text" :class="{on: $route.path == '/login'|| $route.path == '/profile'}">个人</span> </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
import './assets/iconfont/iconfont.css'
export default {
  mounted() {
      this.$store.dispatch('userGet')
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.foot_nav {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 1.30667rem;
  background: #fff;
  border-top: 1px solid #d9d9d9;
  
    
}
.foot_nav .text {
    display: block;
    margin-top: -0.263rem;
    font-size: .32rem;
}
.foot_nav .iconfont {
  display: inline-block;
  font-size: .68rem;
  margin-top: -.2rem;
}
.foot_nav .on{
  color: red;
}

</style>
