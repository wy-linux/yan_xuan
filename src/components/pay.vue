<template>
    <div class="pay" style="height: 100%; background-color: #eee">
         <div class="row" style="position: fixed;top: 0; box-sizing: border-box; width: 100%; z-index: 1000;">
            <van-icon name="wap-home-o"  @click="toHomeFn" />
            <div class='pay_z'>值得买</div>
            <div class="icon" style="position: relative; margin-right: .2rem">
                <van-icon name="search" />
                <van-icon name="shopping-cart-o" @click="carTo" style="margin-left: .3rem; margin-right: .07rem" />
                <i class="car" v-show="this.$store.state.user.phone">{{this.$store.state.count}}</i>
            </div>
        </div>
        <div class='m-swiperTab-container'>
            <div class="m-swiperTab-title">
                <img src="../assets/topic_logo.c2284970.png" alt="" class="u-img">
                <div class="u-text">严选好物 用心生活</div>
                <img src="../assets/topic_title_bg.2373a140.png" alt="">
            </div>
        </div>
        <div class="m-swiper">
            <van-swipe class="my-swipe"  indicator-color="white">
              <van-swipe-item v-for='(item, index) in pay_swippers' :key='index'>
                  <div class="swipe_slid" >
                      <a href="javascript:;" style="display: inline-block;width: 2.4rem; height: 2.8rem; margin: .42rem 0 0 0rem" v-for='(value, id) in item' :key='id'>
                          <img :src="value.url" alt="" style="width: 1.7rem; height: 1.7rem">
                          <div class="u-mainText">{{value.text0}}</div>
                          <div class="u-descText" style="font-size: .26rem;color: #999999;">{{value.text1}}</div>
                      </a>
                  </div>
              </van-swipe-item>
              
            </van-swipe>
                
        </div>
        <div class="comments" style=" padding: .45rem .3rem 0; display: flex; justify-content: space-between; background-color: #eeeeee; margin-bottom: 2rem">
            
                <div class="m-lookColumn" >
                    <section class='m-innerWrapper' style="background-color: #fff; margin-bottom: .3rem" v-for="(item, index) in $store.getters.paylistPack[0]" :key="index">
                        <img class="first_img" :src="item.img" alt="">
                        <div class="first">{{item.title}}</div>
                        <div class="second">
                            <div class="left_div">
                                <img class="m-userpic"  :src="item.icon" alt="">
                                <span class="m-userName">{{item.name}}</span>
                            </div>
                            <div class="right_div" >
                                <img style="width: .5rem; vertical-align: bottom" src="data:image/png;base64,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" alt="">
                                <span style="font-size: .3rem; color: #7f7f7f">{{item.count}}</span>
                            </div>
                        </div>
                        <div class="last" v-show="item.des">
                            <div class="u-goodsname">{{item.des}}</div>
                            <div class="u-goBuy">
                                <span>去购买 ></span>

                            </div>
                        </div>
                    </section>
                </div>
                <div class="m-lookColumn">
                   <section class='m-innerWrapper' style="background-color: #fff; margin-bottom: .3rem" v-for="(item, index) in $store.getters.paylistPack[1]" :key="index">
                       <img class="first_img" :src="item.img" alt="">
                       <div class="first">{{item.title}}</div>
                       <div class="second">
                           <div class="left_div">
                               <img class="m-userpic"  :src="item.icon" alt="">
                               <span class="m-userName">{{item.name}}</span>
                           </div>
                           <div class="right_div" >
                               <img style="width: .5rem; vertical-align: bottom" src="data:image/png;base64,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" alt="">
                               <span style="font-size: .3rem; color: #7f7f7f">1761</span>
                           </div>
                       </div>
                       <div class="last" v-show="item.des">
                           <div class="u-goodsname">{{item.des}}</div>
                           <div class="u-goBuy">
                               <span>去购买 ></span>

                           </div>
                       </div>
                   </section>
                </div>
            
         </div>
    </div>
</template>
<script>


import {mapGetters} from 'vuex'
export default {
    methods: {
        toHomeFn() {
            this.$router.back()
        },
        carTo() {
            if(this.$store.state.user.phone) {
                this.$router.replace('/cared')
            } else {
                this.$router.replace('/login_d')
            }
        }
    },
    computed: {
        ...mapGetters(['pay_swippers'])
    },
    mounted() {
        this.$store.dispatch('pay');
        this.$store.dispatch('paylist');

        
        
    },
    
    
}
</script>
<style scoped>
.row {
     display: flex;
     justify-content: space-between;
     align-items:center;
     padding: 0 .21333rem 0 .32rem;
     height: 1.5rem;
    background-color: #fafafa;
 }
 .row img {
     width: 2rem;
    
 }
.van-icon {
     font-size: .8rem;
     color: #333;
 }
 .pay_z {
     font-size: .5rem;
     color: #000;
 }
 .m-swiperTab-container {
    position: relative;
    padding-top: 1.45rem;
    background: #eee;
     }
.m-swiperTab-title  {
    position: absolute;
    top: 0;
    z-index: 1;
     }
 .u-img    {
    position: absolute;
    width: 1.8rem;
    height: auto;
    top: 1.8rem;
    left: .12rem;
    z-index: 2;
     }
.u-text {
    font-size: .4rem;
    line-height: .44rem;
    height: .44rem;
    position: absolute;
    font-family: 'PingFangSC-Regular';
    left: 2rem;
    top: 2.1rem;
    color: #FFF;
}
.m-swiper {
    position: relative;
    z-index: 3;
    width: 9.3rem;
    background: #fff;
    border-radius: 0.16rem;
    margin: 1.5rem auto 0;
 }

.swiper-container {
    height: 8rem;
    background: #FFF;
    border-radius: .16rem;
   
    position: relative;
    overflow: hidden;
}
.swipe_slid {
    display:flex;
    justify-content: space-between;
    height: 7.2rem;
    flex-wrap: wrap;
    align-content: flex-start;
}
.swipe_slid a {
    flex: 25%
}
.swipe_slid .u-mainText {
    font-weight: bold;
    font-size: .35rem;
    margin: .1rem 0  ;
    line-height: .4rem;
    color:  #000
}
.van-swipe__indicator {
      width: .4rem;
      height: .1rem;
      background-color: #000;
      border: 1px solid #ccc
}
.comments .m-innerWrapper {
    width: 4.55rem;
    border-radius: .16rem;
    /* background-color: pink; */
}
.m-innerWrapper .first_img{
    width: 4.55rem;
    height: 4.55rem;
    border-radius: .16rem;
}
.m-innerWrapper .first {
    box-sizing: border-box;
    width: 100%;
    padding: .3rem .2rem 0;
    color: #333;
    font-size: .35rem;
    line-height: .5rem;
    text-align: left;
}
.m-innerWrapper .second {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    margin: .17rem 0 0 0;
    padding:.17rem .16rem .24rem;
}
  .m-userpic  {
        width: .66rem;
        height: .66rem;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid #d9d9d9
    }
  .m-userName {
        
    font-size: .3rem;
    color: #7f7f7f;
    height: .48rem;
    line-height: .48rem;
    margin-left: .08rem;
    }
   .last {
        width: 3.05rem;
    border-top: .5px solid #d9d9d9;
    margin: 0 auto;
    padding-top: .2rem;
    padding-bottom: .2rem;
    }
 .u-goodsname {
     
    width: 2.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .28rem;
    color: #333333;
    line-height: .32rem;
    height: .32rem;
 }
 .m-innerWrapper .last {
     display: flex;
     width: 4rem;
     justify-content: space-between;
    border-top: .01rem solid #d9d9d9;
    margin: 0 auto;
    padding-top: .27rem;
    padding-bottom: .27rem;
 }
.m-innerWrapper .u-goBuy   {
       font-size: .27rem;
    color: #DD1A21;
    line-height: .32rem;
    height: .32rem;
   }
.icon .car {
     position: absolute;
    right: -.3rem;
    top: -.2rem;
    padding: .06rem .15rem;
    color: #fff;
    font-size: .4rem;
    line-height: .4rem;
    background-color: #b4282d;
    border-radius: .3rem .3rem .3rem 0;
 }
</style>