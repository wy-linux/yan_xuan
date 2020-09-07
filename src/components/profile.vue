<template>
    <div class="profile">
        <div class="m-profile" >
            <div class="left">
                <img src="../assets/profileuser.png" alt="">
                <div style="display: flex; flex-wrap: wrap; align-content: center; margin-left: .4rem">
                    <p class="nick-name">{{this.$store.state.user.phone}}欢迎来到网易严选</p>
                    <div class="user">{{this.$store.state.user.vip ? 'Plus用户':'普通用户'}}</div>
                </div>
            </div>
        </div>
        <div class="m-myAsset">
            <div class="tt">我的资产</div>
            <div class="assetList" style="display: flex; justify-content: space-around; height:2rem;border-bottom: .26667rem solid #F4F4F4;">
                <div style="position: relative">
                    <p class="assetCount">¥0</p>
                    <p class="assetName">回馈金</p>
                    <span style="position: absolute; left: .85rem; top: .45rem; width: .18rem; height:.18rem; border-radius: 50%; background-color: #DD1A21"></span>
                </div>
                <div>
                    <p class="assetCount">6</p>
                    <p class="assetName">红包</p>
                </div>
                <div>
                    <p class="assetCount">11</p>
                    <p class="assetName">优惠卷</p>
                </div>
                <div>
                    <p class="assetCount">¥0</p>
                    <p class="assetName">津贴</p>
                </div>
                <div>
                    <p class="assetCount">0</p>
                    <p class="assetName">礼品卡</p>
                </div>
                
            </div>
            <div class="m-uMenu">
                <a href="javascript:;"><i style="background-position: 0 -12.41333rem;"></i><span>我的订单</span></a>
                <a href="javascript:;"><i style="background-position: 0 -13.90667rem;"></i><span>周六一起拼</span></a>
                <a href="javascript:;"><i style="background-position: 0 -6.01333rem;"></i><span>售后服务</span></a>
                <a href="javascript:;"><i style="background-position: 0 -11.61333rem;"></i><span>邀请返利</span></a>
                <a href="javascript:;"><i style="background-position: 0 -15.50667rem;"></i><span>优先购</span></a>
                <a href="javascript:;"><i style="background-position: 0 -14.70667rem;"></i><span>积分中心</span></a>
                <a href="javascript:;"><i style="background-position: 0 -13.21333rem;"></i><span>会员俱乐部</span></a>
                <a href="javascript:;"><i style="background-position: 0 -5.21333rem;"></i><span>地址管理</span></a>
                <a href="javascript:;"><i style="background-position: 0 -17.10667rem;"></i><span>帐号安全</span></a>
                <a href="javascript:;"><i style="background-position: 0 -9.21333rem;"></i><span>帮助与客服</span></a>
                <a href="javascript:;"><i style="background-position: 0 -7.61333rem;"></i><span>意见反馈</span></a>
                
            </div>
            <div class="g-row" style="margin-bottom: 1rem">
                <button @click="logout">退出登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        logout() {
            axios('/logout')
            this.$store.commit('userChan',{})
            this.$router.replace('/login')
        }
    }
}
</script>
<style scoped>
.m-profile {
    background-image: url('../assets/profile.webp');
    height: 3.6rem;
    background-position: bottom center;
    padding-left: .4rem;
    overflow: hidden;
}
.m-profile .left img {
    vertical-align: middle;
    width: 1.89333rem;
    height: 1.89333rem;
    border-radius: 50%;
}
.m-profile .left {
    display: flex;
    padding: .85333rem 0;
    width: 7.2rem;
}
.left .nick-name {
    width: 4.5rem;
    color: #fff;
    font-size: .48rem;
    line-height: 1.2;
    text-align: left;
    margin-bottom: .13333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.left .user {
    text-align: left;
    color: #fff;
    font-size: .37333rem;
    vertical-align: middle;
}
.m-myAsset .tt {
    margin-left: .4rem;
    border-bottom: .01333rem solid #D9D9D9;
    text-align: left;
    line-height: 1.38667rem;
    font-size: .37333rem;
}
.m-myAsset .assetList div {
    display: flex;
    
    flex-wrap: wrap;
    align-content: center;
}
.assetList p {
    flex: 100%;
}
.assetList .assetCount  {
    margin-bottom: .05333rem;
    font-size: .42667rem;
    line-height: .64rem;
    font-weight: 700;
}
.assetList .assetName {
    font-size: .32rem;
    line-height: .48rem;
}
.m-uMenu {
   
   overflow: hidden;
}
.m-uMenu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
    width: 33%;
    height: 2.4rem;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.m-uMenu a:nth-child(3n) {
    border-right: none;
}
.m-uMenu a i {
    background-image: url('../assets/profilelist.webp');
    background-size: 1.12rem 17.77333rem;
    width: .66667rem;
    height: .66667rem;
    vertical-align: middle;
    margin-bottom: .21333rem;
}
.m-uMenu a span {
    font-size: .32rem;
    line-height: .45333rem;
    color: #333;
}
.g-row {
    height: 2.3rem;
    background-color: rgb(244, 244, 244);
    
}
.g-row button {
    margin-top: .6rem;
    font-size: .37333rem;
    width: 100%;
    padding: 0;
    border: none;
    height: 1.28rem;
    line-height: 1.28rem;
    background-color: #fff;
    color: #333;
}
</style>