<template>
    <div class="goodDetails" style="height: 100%; margin-bottom: 1.5rem">
       <headers />
      <div class="swiper" style="margin-top: 1.45rem">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(item, index) in $store.state.indexGoodDetails.swiper" :key="index"><img :src="item" alt=""></van-swipe-item>
          
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/5
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="bannerContent">
        <div class="col1" style="float: left; position: relative">
          <img src="../assets/sred.png" alt="" style="width: 1.46667rem;height: 1.6rem;position: absolute;left: 0">
          <div class="contents">{{$store.state.indexGoodDetails.type}}</div>
          <div class="price">{{$store.state.indexGoodDetails.price}} </div>
        </div>
        <div class="countdown" style="float: right; margin-right: .3rem">{{$store.state.indexGoodDetails.time}}</div>
      </div>

      <div class="content">
        <div class="baseInfo">
            <div class="info" >
              <p class="name">{{$store.state.indexGoodDetails.title}}</p>
              <p class="desc">推荐理由</p>
            </div>
       
            <div class="comment" style="position: relative">
               <div class="num">{{$store.state.indexGoodDetails.comment}}</div>
               <div class="com">好评率</div>
               <span class="iconfont icon-next" style="font-weight: 700;position: absolute; top: .2rem; right: .1rem; font-size: .4rem"></span>
            </div>
        </div>
        <div class="rcmdBanner">
          <ul>
            <li v-for="(item, index) in $store.state.indexGoodDetails.recomments" :key="index"><i>{{index + 1}}</i> <span>{{item}}</span></li>
             
          </ul>
        </div>
      </div>
      <div style="border-top: 0.26667rem solid rgb(244, 244, 244);border-bottom: 0.26667rem solid rgb(244, 244, 244);">
        <div class="m-points">邮费: 免邮，合作仓直发 <span class="iconfont icon-next" style="font-size: .4rem;font-weight: 700;float: right; margin-right: .3rem"></span></div>
        <div class="m-points">购物返: 最高<i style="color: rgb(221, 26, 33);">9积分</i> <span class="iconfont icon-next" style="font-size: .4rem;font-weight: 700;float: right; margin-right: .3rem"></span></div>
      </div>

      <transition name="move">
           <div class="car" v-if="carShow">
        <div style="background-color: #fff;position: absolute; top: 3rem; padding-left: .5rem; width: 100%; height: 15rem; text-align: left">
          <div class="icon-con" style="height: 2.64rem; display: flex;  ">
            <img style="position: absolute; top: -.8rem" :src="$store.state.indexGoodDetails.swiper[0]" alt="">
            <div class="right" style="margin-left: 2.88rem; flex: 1;text-align: left; padding-top: .2rem">
              <span>{{$store.state.indexGoodDetails.type}}</span>
              <p>价格：{{$store.state.indexGoodDetails.price}}</p>
              <div style="text-align: left;font-size: .37333rem;line-height: .53333rem;">已选择：请选择规格数量</div>
            </div>
          </div>
          <div class="u-format">
            <div class="tt" style="line-height: .53333rem;font-size: .37333rem;padding-bottom: .16rem;text-align: left">规格</div>
            <div class="con" style="padding-bottom: .26667rem; text-align: left">
              <div class="tab" :class="{selected: ind === index}" v-for="(item, ind) in $store.state.indexGoodDetails.select" :key="ind" @click="selects(ind)">{{item}}</div>
             

            </div>
          </div>
          <div>
            
            <p style="line-height: .53333rem;font-size: .37333rem;padding-bottom: .16rem;text-align: left">数量</p>
            <div class="m-selNumRow" style="text-align: left">
              <i class="iconfont icon-Decrease normal " :class="{border: this.value > 1}"  style="border-right: none" @click="deadd"></i>
              <input style="width: 1.72rem; height: .716rem;margin-top: -.02rem; border: 1px solid #7f7f7f; text-align: center;line-height: .88rem;font-size: .32rem" v-model="value">
              <i class="iconfont icon-increase normal ff border" style="border-left: none" @click="add"></i>
            </div>
          </div>
          <div style="color: rgb(221, 26, 33); margin-top: .4rem; font-size: .4rem" v-show="alert">请先选择商品</div>
          <button style="width: 90%; height: 1rem;margin-top: 4.6rem; border-radus: .5rem; background: #DD1A21; color: #fff; font-size: .4rem; border: none;" @click="carSelect">确定</button>
        </div>
        <div style="height: 100%; background: rgba(0, 0, 0, .3); " @click='carShow = !carShow'></div>
      </div>
      </transition>

      <div class="m-btnGroup">
        <button class="btn_k"><i></i></button>
        <button class="btn_m">立即购买</button>
        <button class="btn_c" @click='carShow = !carShow'>加入购物车</button>
    </div>
    </div>
</template>
<script>

import headers from './header'
import axios from 'axios';
export default {
    data() {
    return {
      carShow: false,
      select: false,
      alert: false,
      current: 0,
      index: '',
      value: 1
    };
  },
  
  methods: {
    onChange(index) {
      this.current = index;
    },
    carSelect() {
      
      if(this.index === '') {
        this.alert = true
        return
      } else if (!this.$store.state.user.phone) {
        this.$router.push('/login_d')
        return
      } 
      else {
        this.alert = false
        this.$store.commit('carChange', {
        index: this.$store.state.indexGoodDetails.select[this.index],
        value: this.value,
        img: this.$store.state.indexGoodDetails.swiper[0],
        title: this.$store.state.indexGoodDetails.title,
        price: this.$store.state.indexGoodDetails.price,
        check: 0
      })
      this.$store.dispatch('carput',{
        index: this.$store.state.indexGoodDetails.select[this.index],
        value: this.value,
        img: this.$store.state.indexGoodDetails.swiper[0],
        title: this.$store.state.indexGoodDetails.title,
        price: this.$store.state.indexGoodDetails.price,
        check: 0,

      } )
      this.$store.commit('countAdd')

      this.carShow = !this.carShow
      }
    },
    add() {
      this.value ++
    },
    selects(index) {
      
        if(this.index === index) {
          this.index = ''
        } else {
          this.index = index
        }
      

    },
    deadd() {
      if(this.value > 1) {
        this.value --
      }
      
    }
  },
  components: {
    headers
  },
  mounted() {
    this.$store.dispatch('indexGoodDetailsGet', this.$route.params.index)
    this.$store.dispatch('userGet')
  },
  computed: {
      
  }
}
</script>
<style  scoped>
 .custom-indicator {
   position: absolute;
    right: .2rem;
    bottom: .3rem;
    padding: 0 .2rem;
    font-size: .3rem;
    color: #bbb;
    background: #fff;
    border: 1px solid #eee;
 }
 .swiper img {
   width: 100%
 }
 .con .selected {
   border-color: red !important;
   color: red !important;
 }
 .bannerContent {
   overflow: hidden;
   background-image: url('../assets/redbgc.png');
   height: 1.6rem;
 }
 .bannerContent .contents {
   color: #fff;
    font-size: .32rem;
    line-height: .48rem;
    height: .48rem;
    text-align: left;
    margin-top: .15rem;
    margin-left: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
 }
 .price {
   color: #fff;
    padding-right: .4rem;
    font-size: .64rem;
    line-height: .96rem;
    text-align: left;
    font-weight: bold;
    padding-left: 1.8rem;
 }
.price span {
  opacity: .8;
    color: #fff;
    text-decoration: line-through;
    margin-left: .10667rem;
    font-weight: 700;
    font-size: .32rem;
    line-height: .48rem;
    height: .48rem;
}
 .countdown {
   color: #fff;
    overflow: hidden;
    white-space: nowrap;
    font-size: .32rem;
    line-height: .53333rem;
    text-align: right;
    line-height: 1.6rem;
 }
 
 .content {
   position: relative;
    padding: .34667rem 0 .48rem .4rem;
 }
 .content .baseInfo {
   display: flex;
    margin-top: .18667rem;
    padding-right: .32rem;
 }
 .baseInfo .info {
   flex: 1;
 }
 .baseInfo .name {
   text-align: left;
   font-size: .42667rem;
    color: #333;
    line-height: .64rem;
    margin-bottom: .05333rem;
    font-weight: 700;
 }
 .baseInfo .desc {
   text-align: left;
   font-size: .32rem;
    line-height: .48rem;
    color: #333;
    font-weight: lighter;
 }
.comment {
  justify-content: center;
    width: 2.37333rem;
    padding-left: .26667rem;
    text-align: center;
    font-size: .37333rem;
}
.comment .num {
  font-weight: 700;
    font-size: .42667rem;
    line-height: .6rem;
    color: #DD1A21;
    text-align: center;
}
.comment .com {
  font-family: PingFangSC-Light;
    line-height: .48rem;
    font-size: .32rem;
    color: #7F7F7F;
}
.rcmdBanner  {
    text-align: left;
    margin: .16rem .3rem 0 0;
    padding: .18667rem .26667rem;
    
    line-height: .8rem;
    background: #FAFAFA;
    border: 1px solid #E6E6E6;
    border-radius: .05333rem;
    position: relative;
}
.rcmdBanner i {
  display: inline-block;
    width: .32rem;
    height: .32rem;
    border: 1px solid #DD1A21;
    border-radius: 50%;
    text-align: center;
    line-height: .32rem;
    font-size: .26667rem;
    color: #DD1A21;
    font-family: PingFang SC;
    font-weight: 700;
    margin-right: .10667rem;
    vertical-align: middle;
}
.rcmdBanner span {
  display: inline-block;
    height: .48rem;
    line-height: .48rem;
    vertical-align: middle;
    font-size: .32rem;
    color: #333;
}
.m-points {
  text-align: left;
  border-bottom: 1px solid #d9d9d9;
  margin-left: .4rem;
    font-size: .37333rem;
    color: #333;
    line-height: 1.38667rem;
    
}
.icon-con img {
  width: 2.61333rem;
    overflow: hidden;
    border-radius: .04rem;
    margin-right: -2.61333rem;
    background-color: #f4f4f4;
}
.icon-con .right span {
  color: #fff;
    background-color: #f48f18;
    border-radius: 4px; 
    display: inline-block;
    padding: 0 .12rem;
    vertical-align: middle;
    line-height: .45333rem;
    font-size: .32rem;
   
    border: 1px solid #f48f18;
}
.icon-con .right p {
  font-size: .37333rem;
    padding-bottom: .05333rem;
    line-height: .53333rem;
    color: #DD1A21;
}
.con .tab {
    display: inline-block;
    padding: 0 .4rem 0 ;
    vertical-align: middle;
    border-radius: 4px;
    padding: 0 .32rem;
    font-size: .37333rem;
    line-height: .96rem;
    height: .96rem;
    margin-right: .4rem;
    margin-bottom: .26667rem;
    border: 1px solid #7f7f7f;
    overflow: hidden;
}

.car {
  
  position: fixed; 
  bottom: 0rem;
  height: 100%; 
  width: 100%; 
  z-index: 10001 ;
  
}
.move-enter-active,.move-leave-active {
  transition: all .3s;
}
.move-enter, .move-leave-to {
  transform: translateY(15rem)
}


.on {
  display: block;
  transform: translateY(-15rem);
  transition: all 3s;
}



.m-selNumRow  .normal {
  width: 1.2rem;
  font-size: .32rem;
  color: #eee;
  padding: .2rem .4rem;
  border: 1px solid #eee;
}
.m-selNumRow .border {
  border: 1px solid rgb(127, 127, 127);
  color: rgb(127, 127, 127)
}




  .m-btnGroup {
     display: flex;
     width: 100%;
     position: fixed;
     height: 1.388667rem;
     
     bottom: 0;
 }
 .m-btnGroup button {
     
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    border: 1px solid #DD1A21;
    outline: 0;
    background-color: #fff;
 }
 .m-btnGroup .btn_k {
     width: 2.08rem;
     height: 1.38667rem;
    
     border: none;
     border-top: 1px solid #ccc;
}
.m-btnGroup .btn_m {
    flex: 1;
    font-size: .37333rem;
    border: 1px solid #ccc;
    border-right:#ccc;
    color:#333;
}
.m-btnGroup .btn_c {
    flex: 1;
    background-color: #DD1A21;
    border: 1px solid #DD1A21;
    color: #fff;
}
.btn_k i {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>