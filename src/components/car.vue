<template>
    <div class="car" style="height: 100%">
        <div class="mycar">
            <span class="left" style="font-size: .48rem;">购物车</span>
            <span class="right" style="vertical-align: middle;color: #DD1A21; font-size: .4rem">领卷</span>
        </div>
        <div class="chengnuo">
           <div class="item"> <i></i> <span>30天无忧退货</span></div>
           <div class="item"> <i></i> <span>48小时快速退款</span></div>
           <div class="item"> <i></i> <span>满99元免邮费</span></div>

        </div>
        <div class="m-defaultPage">
            <div class="img"></div>
            <div class="text" @click="$router.push('/login_d')">登录</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .mycar {
        display: flex;
        justify-content:space-between;
        height: 1.17333rem;
        padding: 0 .6rem 0 .4rem;
        line-height: 1.17333rem;
        text-align: center;
        background-color: #fff;
    
    }
    .chengnuo {
        display: flex;
        justify-content: space-around;
        background: #eee;
        height: .9333rem;
    }
    .chengnuo .item {
        display: flex;
        align-items: center;
        font-size: .32rem;
        color: #666;
    }
    .chengnuo i {
        width: .1rem;
        height: .1rem;
        border-radius: 50%;
        border:  2px solid #bbb;
        margin-right: .13rem;
    }
    .m-defaultPage {
        position: relative;
        height: 100%;
        background-color: #f4f4f4;
    }
    .m-defaultPage .img {
        position: absolute;
        top: 4rem;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('../assets/caricon.webp');
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .m-defaultPage .text {
        position: absolute;
        top:7.4rem;
        left: 50%;
        transform: translateX(-50%);
        margin: auto;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #DD1A21;
        border-radius: .04rem;
    }
</style>