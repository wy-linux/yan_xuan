<template>
    <div class="login" style="height: 100%">
        <headers></headers>
        <div class="m-loginTypes">
            <div class="logoWrap">
                <img src="../assets/login.png" alt="">
            </div>
            <div class="btnWrap">
                <van-button type="primary" block @click="$router.push('/login_d')">手机号快捷登陆</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import headers from './header.vue'
export default {
    name: 'login',
    components: {
    headers
    },
   
}
</script>
<style  scoped>
 .logoWrap {
    text-align: center;
    padding-top: 3.83333rem;
    padding-bottom: 3.09333rem;
 }
 .logoWrap img {
     width: 3.57333rem;
    height: 1.2rem;
 }
 .m-loginTypes {
     position: relative;
     height: 100%;
     background: #F2F5F4;
 }
 .btnWrap {
     padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
 }
 .van-button {
     font-size: .37rem;
     height: 1.25333rem;
    line-height: 1.25333rem;
    border: 0 solid #DD1A21;
    background-color: #DD1A21;
    color: #fff;
 }
</style>