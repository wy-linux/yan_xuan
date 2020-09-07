<template>
    <div class="cared" style=" background-color: #eee" >
         <div class="mycar">
            <span class="left" style="font-size: .48rem; float: left">购物车</span>
            <span class="right" style="vertical-align: middle;color: #000; font-size: .4rem; float: right;" @click="mode = !mode" v-show="!mode">编辑</span>
            <span class="right" style="vertical-align: middle;color: #000; font-size: .4rem; float: right;" @click="moded" v-show="mode">完成</span>
            <div class="withSpecialIcon">
                <span class="placeHolder">领卷</span>
                <span></span>
            </div>
        </div>
        <div class="chengnuo">
           <div class="item"> <i></i> <span>30天无忧退货</span></div>
           <div class="item"> <i></i> <span>48小时快速退款</span></div>
           <div class="item"> <i></i> <span>满99元免邮费</span></div>
        </div>
        <div class="promotion" style="text-align: left; padding:0  .5rem; background-color: #fff">
            <a href="javascript:;" style="display: block; padding: .4rem 0">
                <i>全场换购</i>
                <span>再购100元享低至6.5元超值换购</span>
                <p style="float: right;color: #DD1A21;font-size: .32rem; vertical-align: middle">去凑单 ></p>
            </a>
            <div class="promGuide">
                <span >查看换购商品</span>
                <i style="float: right;">></i>
            </div>
        </div>
        <div class="margin" style="margin-bottom: 3rem">
            <div class="m-cartGood" style="background-color: #fff; position: relative" v-for="(item, ind) in $store.state.user.carlist" :key="ind">
            <i class="checkbox " @click="checkshop($event,ind)"></i>
            <div class="imgWrap">
                <img style="width: 2.29333rem;height: 2.29333rem;" :src="item.img" alt="">
            </div>
            <div class="cnt">
                <p class="name">{{item.title}}</p>
                 <div class="valid">
                    <span class="spec">{{item.index}}</span>
                   
                </div>
                <div class="line3">{{item.price}}</div>
            </div>
            <div class="m-selNumRow" style="text-align: left">
              <i class="iconfont icon-Decrease normal " :class="{border: item.value > 1}"  style="border-right: none" @click="deadd(ind)"></i>
              <input style="width: .8rem; height: .73rem;margin-top: -.02rem; border: 1px solid #7f7f7f; text-align: center;line-height: .88rem;font-size: .32rem" v-model="item.value">
              <i class="iconfont icon-increase normal ff border" style="border-left: none" @click="item.value ++ "></i>
            </div>
        </div>
        </div>
        
        
        <div class="m-cartFt">
            <div class="lt">
                <div class="checkAll">
                    <i :class="{checked: checkAll}" @click="selectAll"></i>
                    <span>已选{{count}}</span>
                </div>
                <div class="f-vc">
                    <span v-if="this.$store.state.user.carlist">合计: {{total}}</span>
                </div>
                <button :class="{pay: count}" v-show="!mode">下单</button>
                <button :class="{pay: count}" v-show="mode" @click="moded">删除所选</button>
            </div>
            
        </div>
    </div>
</template>
<script>
import {mapState, createLogger} from 'vuex'
import Axios from 'axios'
export default {
    data() {
        return {
            checkOne: false,
            checkAll: false,
            mode: false,
            count: 0,
            index: '',
            value: 1
        }
    },
    mounted() {
        this.$store.dispatch('userGet')
    },
    methods: {
        checkshop(e,index) {
          if(e.target.classList.contains('checked')) {
                 e.target.classList.remove('checked')
                 this.count--
                 this.$store.state.user.carlist[index].check = 0
                 
          } else {
               e.target.classList.add('checked')
               this.count++
               this.$store.state.user.carlist[index].check = 1
               

          }

        },
        selectAll() {
            var is = document.querySelectorAll('.checkbox')
            if(!this.checkAll) {
              

              for(var i = 0 ; i < is.length; i++){
                  is[i].classList.add('checked')
              }
                this.count = this.$store.state.user.carlist.length
                for(let j = 0; j < this.$store.state.user.carlist.length; j++) {
                     this.$store.state.user.carlist[j].check = 1
                     
                 } 
            } else {
                
              
              for(var i = 0 ; i < is.length; i++){
                  is[i].classList.remove('checked')
              }
                this.count = 0
            for(let j = 0; j < this.$store.state.user.carlist.length; j++) {
                     this.$store.state.user.carlist[j].check = 0
                      
                 } 
                
            }
            
            this.checkAll = !this.checkAll
        },
         add() {
          this.$storevalue ++
        },
        deadd(ind) {
        if(this.$store.state.user.carlist[ind].value > 1) {
          this.$store.state.user.carlist[ind].value--
        }
       },
       moded() {
           
           
           for(let j = 0; j < this.$store.state.user.carlist.length; j++) {
                     if(this.$store.state.user.carlist[j].check) {
                         this.$store.state.user.carlist.splice(j, 1)
                         j--
                     }
                     
                      
                 }
            this.$store.commit('countChange', this.$store.state.user.carlist.length)
            Axios.post('/cardelete', {
               carlist: this.$store.state.user.carlist
            })
           
          
            this.mode = false
            
       }
    },
    computed: {
        total() {
            let sum = 0;
            for(let i = 0; i < this.$store.state.user.carlist.length; i++) {
                sum += Number(this.$store.state.user.carlist[i].price.slice(1)) * Number(this.$store.state.user.carlist[i].value) * Number(this.$store.state.user.carlist[i].check)
            }
            return sum
        }
    },
    watch: {
        count() {
          

           
            var is = document.querySelectorAll('.checkbox')
            if(this.count == this.$store.state.user.carlist.length && this.count != 0) {
                this.checkAll = true
                
               
                for(var i = 0 ; i < is.length; i++){
                    is[i].classList.add('checked')
                }
                 
                
            } else {
                this.checkAll = false
            }
        },
        mode() {
             var is = document.querySelectorAll('.checkbox')

           
                var is = document.querySelectorAll('.checkbox')
                for(var i = 0 ; i < is.length; i++){
                     is[i].classList.remove('checked')
                 }
                for(let j = 0; j < this.$store.state.user.carlist.length; j++) {
                     this.$store.state.user.carlist[j].check = 0
                     
                 } 
                 this.checkAll = false
                 this.count = 0
                
        }
    }
}
</script>
<style  scoped>
.mycar {
    overflow: hidden;
    height: 1.17333rem;
    padding: 0 .6rem 0 .4rem;
    line-height: 1.17333rem;
    text-align: center;
    background-color: #fff;

}
.mycar .withSpecialIcon {
    
    position: absolute;
    top: .01rem;
    right: 1.4rem;
    font-size: .3rem;
    height: .50667rem;
    line-height: .50667rem;
    color: #fff;
    vertical-align: top;
    margin-top: .33333rem;
    margin-right: .4rem;
    background-size: 100%;
    background-image: linear-gradient(-45deg,#FC865F 0,#FC625F 100%);
    border-radius: .04rem;
    background-repeat: no-repeat;
}
.withSpecialIcon::before {
    content: '';
    position: absolute;
    width: .21333rem;
    height: .21333rem;
    top: 50%;
    left: -.13rem;
    margin-top: -.10667rem;
    border-radius: .21333rem;
    background-color: #FFF;
}
.withSpecialIcon::after {
    position: absolute;
    width: .21333rem;
    height: .21333rem;
    top: 50%;
    right: -.13rem;
    margin-top: -.10667rem;
    border-radius: .21333rem;
    background-color: #FFF;
    content: '';
}
.mycar .placeHolder{
    line-height: .4rem;
    font-size: .34rem;
    padding: .05333rem .16rem;
    font-family: PingFangSC-Regular;
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
.promotion a i {
    background-color: #FC865F;
    background-image: linear-gradient(-225deg,#FC865F 0,#FC625F 100%);
    border-radius: .05333rem;
    padding: .09rem .10667rem;
    line-height: .42667rem;
    font-size: .26667rem;
    text-align: center;
    color: #FFF;
    margin: 0 .21333rem 0 .05333rem;
    vertical-align: middle;
}
.promotion a span {
    vertical-align: middle;
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;
}
.promGuide {
    margin: 0 0rem 0 .44667rem;
    padding: .1rem .23rem;
    font-size: .32rem;
    line-height: .74667rem;
    background-image: linear-gradient(-225deg,rgba(252,134,95,.05),rgba(252,98,95,.05) 100%);
    border-radius: .05333rem;
    color: #000;
}
.m-cartGood {
    position: relative;
    border-top: .3rem solid #eee;
    padding: .32rem .4rem 0 1.14667rem;
    height: 2.93333rem;
}
.m-cartGood .checkbox {
   position: absolute;
    top: 1.2rem;
    left: .4rem;
    display: inline-block;
    width: .50667rem;
    height: .50667rem;
    border: .04rem solid #bbb;
    border-radius: 50%;
}
.m-cartGood .checked {
    background-image: url('../assets/xuan.webp');
    background-size: .50667rem 7.01333rem;
    background-position: 0 -3.09333rem;
    border: none;
}
.checkAll .selected {
    background-image: url('../assets/xuan.webp');
    background-size: .50667rem 7.01333rem;
    background-position: 0 -3.09333rem;
    border: none;
}
.m-cartGood .imgWrap {
    float: left;
    position: relative;
    margin-right: .26667rem;
    border-radius: 4px;
    overflow: hidden;
    background-color: #eee;
}
.cnt  {
    position: relative;
    height: 2.29333rem;
    margin: 0 0 0 2.56rem;
}
.cnt .name {
    font-size: .37333rem;
    text-align: left;
}
.valid {
    margin: .1rem .9rem 0 0;
    padding: .03rem 0 0 .08rem;
    height: .5rem;
    text-align: left;
    color: #7F7F7F;
    background: #FAFAFA;
    border: .01333rem solid #EFEFEF;
    border-radius: .02667rem;
    font-size: .32rem;
}
.valid .rotate {
    
    transform: rotate(90deg);
}
.cnt .valid span {
    display: inline-block;
    
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
}
.line3 {
    position: absolute;
    bottom: -.13333rem;
    left: 0;
    text-align: left;
    font-size: .4333rem;
    line-height: .53333rem;
    width: 3.54667rem;
    color:#DD1A21;
}
.line3 span {
    font-size: .32rem;
    margin-left: .10667rem;
    color: #999;
}
.m-cartFt {
    position: fixed;
    z-index: 3;
    bottom: 1.30667rem;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding-right: 3.01333rem;
    background-color: #000;
    
}
.m-cartFt .lt {
    position: relative;
    width: 100%;
    padding-left: .4rem;
    height: 1.57333rem;
    background-color: #fff;
}
.checkAll i {
    position: absolute;
    top: .6rem;
    left: .4rem;
    display: inline-block;
     width: .50667rem;
    height: .50667rem;
    border: .04rem solid #bbb;
    border-radius: 50%;
}
.checkAll .checked {
    background-image: url('../assets/xuan.webp');
    background-size: .50667rem 7.01333rem;
    background-position: 0 -3.09333rem;
    border: none;
}

.checkAll span {
    color: #7f7f7f;
    position: absolute;
    font-size: .37333rem;
    top: .54rem;
    left: 1.1rem;
}
.f-vc {
    position: absolute;
    top: .5rem;
    right: .7rem;
    font-size: .37333rem;
    color: #DD1A21;
}
.m-cartFt button {
    position: absolute;
    right: -2.62rem;
    bottom: 0;
    height: 100%;
    text-align: center;
    font-size: .37333rem;
    width: 3.01333rem;
    border: 0!important;
    line-height: 1.57333rem;
    height: 1.57333rem;
    border-radius: 0;
    color: #fff;
    padding: 0;
    background-color: #ccc;
}
.m-selNumRow {
    position: absolute;
    bottom: .2rem;
    right: .3rem
}
.m-selNumRow  .normal {
  width: 1.2rem;
  font-size: .32rem;
  color: #eee;
  padding: .2rem .2rem;
  border: 1px solid #eee;
}
.m-selNumRow .border {
  border: 1px solid rgb(127, 127, 127);
  color: rgb(127, 127, 127)
}
.pay {
    background-color: #DD1A21 !important;
}
</style>