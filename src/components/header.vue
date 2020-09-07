<template>
        <div class="row" style="position: fixed;top: 0; box-sizing: border-box; width: 100%; z-index: 1000">
            <van-icon name="wap-home-o"  @click="toHomeFn" />
            <img src="../assets/logo-img.png" alt="">
            <div class="icon" style="position: relative">
                <van-icon name="search" />
                <van-icon name="shopping-cart-o" @click="carTo" />
                <i class="car" v-show="this.$store.state.user.phone">{{this.$store.state.count}}</i>
            </div>
        </div>
</template>
<script>
export default {
    methods: {
        toHomeFn() {
            this.$router.replace('/')
        },
        carTo() {
            if(this.$store.state.user.phone) {
                this.$router.replace('/cared')
            } else {
                this.$router.push('/login_d')
            }
        }
    }
}
</script>
<style scoped>
.row {
     display: flex;
     justify-content: space-between;
     align-items:center;
     padding: 0 .21333rem 0 .32rem;
     height: 1.45rem;
    background-color: #fafafa;
 }
 .row img {
     width: 2rem;
    
 }
.van-icon {
     font-size: .8rem;
     color: #333;
     margin-right: .4rem;
 }
 .icon .car {
     position: absolute;
    right: 0rem;
    top: -.2rem;
    padding: .06rem .15rem;
    color: #fff;
    font-size: .4rem;
    line-height: .4rem;
    background-color: #b4282d;
    border-radius: .3rem .3rem .3rem 0;
 }
</style>