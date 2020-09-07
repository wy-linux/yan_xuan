<template>
    <div class="index_Default">
        


        <div class="server" style="margin-top: .3rem">
            <ul>
                <li><i style=" background: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png') no-repeat;"></i><span>网易自营品牌</span></li>
                <li><i style="background: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png') no-repeat;"></i><span>30天无忧退货</span></li>
                <li><i style="background: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png') no-repeat;"></i><span>48小时快速退款</span></li>
            </ul>
        </div>


        <div class="gird">
           <van-grid :column-num="5">
             <van-grid-item
               v-for="(item, index) in goods"
               :key="index"
               :icon="item.url"
               :text="item.text"
             />
           </van-grid>
        </div>

        <div class="count">
           <div class="left">
               限时购
               <div class="countDown">
                   <van-count-down :time="time">
                     <template v-slot="timeData">
                       <span class="item">{{ timeData.hours }}</span>
                       <span class="sec">:</span>
                       <span class="item">{{ timeData.minutes }}</span>
                       <span class="sec">:</span>
                       <span class="item">{{ timeData.seconds }}</span>
                     </template>
                   </van-count-down>
                   
               </div>
           </div>
           <a href="#">更多</a>
        </div>
        <div class="cnt">
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/1011346f5afa546a24e2ffb573cdd56a.jpg?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥179</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥100</span>
            </div>
          </a>
           <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/b8d3a7c79c145abe753dae8421bfb846.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥2209</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥2599</span>
            </div>
          </a>
           <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/7f73c588141c9145f7ebbc27287d0655.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥65</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥78</span>
            </div>
          </a>
           <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/8b57c506f556dff5a3828b217234c016.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥1049</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥1499</span>
            </div>
          </a>
           <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/95d461ad9e2997c3a52410b8cf5502a7.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥1099</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥1200</span>
            </div>
          </a>
           <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/4c71e456d88ece0d16128bceb51f6307.jpg?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div class="price">
              <span class="actualPrice" style="font-size: .37333rem;color: #dd1a21;margin-right: .16rem;">¥1249</span>
              <span class="retailPrice" style="font-size: .32rem;color: #7f7f7f;text-decoration: line-through;">¥1600</span>
            </div>
          </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost'
export default {
    data() {
        return {
            imgs: [],
             
            time: 30 * 60 * 60 * 1000,
           
            goods: [
            {
              text:'新品首发',
              url:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
            },
            {
              text:'居家生活',
              url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png'
            },
            {
              text:'服饰鞋包',
              url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png'
            },
            {
              text:'美食酒水',
              url:'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png'
            },
            {
              text:'个护清洁',
              url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png'
            },
            {
              text:'母婴亲子',
              url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png'
            }
            ,{
              text:'运动旅行',
              url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png'
            },
            {
              text:'数码家电',
              url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png'
            },
            {
              text:'全球特色',
              url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png'
            }
            ,{
              text:'好货抄底',
              url:'https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif'
            }
            ]
        }
    },
   
}
</script>
<style scoped>
 .server ul {
        height: .96rem;
    padding: 0 .4rem;
    display: flex;
    }
    .server li {
        flex: 1;
        height: .42667rem;
    }
    .server ul i {
    display: inline-block;
    vertical-align: middle;
    width: .42667rem;
    height: .42667rem;
   
    background-size: 100% 100% !important;
    }
    .server span {
        font-size: .32rem;
    color: #333;
    margin-left: .10667rem;
    line-height: .42667rem;
    }
    .count {
height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 .4rem;
    background: #fff;
    }
    .count .left {
        float: left;
    font-size: .42667rem;
    }
    .count .countDown {
        display: inline-block;
    vertical-align: middle;
    margin: -.08rem 0 0 .16rem;
    }
    .count .item {
        display: inline-block;
    font-size: .32rem;
    line-height: .48rem;
    width: .48rem;
    height: .48rem;
    text-align: center;
    background-color: #333;
    border-radius: .05333rem;
    color: #fff;
    margin: 0 .13333rem;
    }
    .count .sec {
        font-size: .37333rem;
    }
    .count a {
        font-size: .37333rem;
    float: right;
    color: #333;
    line-height: 1.33333rem;
    }
    .van-swipe__indicator {
      width: .2rem;
      height: .2rem;
      background-color: #000;
    }
    .cnt {
    
      flex-wrap: wrap;
     overflow: hidden;
      
      padding: 0 .13333rem 0 .25rem;;
    }
    .cnt a {
      float: left;
      width: 2.8rem;
    
    margin: 0 .17rem  .3rem;
    
      
    }
    .cnt a img {
      width: 100%;
      background-color: #f5f5f5;
    }
</style>
