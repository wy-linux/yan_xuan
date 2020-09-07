<template>
    <div class="carlist " style="position: relative">
        <div class="search">
            <van-icon name="search" />
            <span>搜索商品, 共34145款好物</span>
        </div>
        <div class="slide">

            <van-sidebar v-model="activeKey">
              <van-sidebar-item :title="item.text" v-for='(item, index) in slide_bar' :key='index'/>
              
            </van-sidebar>
        </div>
        <div class="m-subCateList">
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                  <van-swipe-item v-for='(item, index) in imgs' :key='index'>
                      <img :src="item" alt="" style="width: 100%">
                  </van-swipe-item>

                </van-swipe>                
            </div>
            <div class="gird">
                <ul>
                    <li v-for='(item, index) in goods' :key='index' >
                        <img :src="item.url" alt="">
                        <div>{{item.text}}</div>
                    </li>
                    
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'carlist',
    data() {
        return {
            activeKey: 0,
            slide_bar:[
                {
                    text:'推荐专区'
                },
                 {
                    text:'居家生活'
                },
                 {
                    text:'美食酒水'
                },
                 {
                    text:'服饰鞋包'
                },
                 {
                    text:'人气好物'
                },
                 {
                    text:'个护清洁'
                },
                {
                    text:'母婴亲子'
                },
                {
                    text:'运动旅行'
                },
                {
                    text:'数码家电'
                },
                {
                    text:'严选全球'
                },

               
            ],
            imgs:[],
            goods: [
                        {
                          text:'员工精选',
                          url:'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'人气好物',
                          url:'https://yanxuan.nosdn.127.net/036640056a47089a8a437cb14dc127e8.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'满2件享4折',
                          url:'https://yanxuan.nosdn.127.net/3e234d8b3af71c7cd1d45bb57ed6f874.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'消暑美食',
                          url:'https://yanxuan.nosdn.127.net/302806b76899547e9b500215feb2e455.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'防晒好物',
                          url:'https://yanxuan.nosdn.127.net/0f8e005a84f4b7f4070818abf1da83fb.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'母婴亲子',
                          url:'https://yanxuan.nosdn.127.net/08df36faf430bd9e81aef4e1685660dd.png?quality=75&type=webp&imageView'
                        }
                        ,{
                          text:'清凉伴侣',
                          url:'https://yanxuan.nosdn.127.net/4060fc12ae048c1a9c61684c846b6235.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'99专区',
                          url:'https://yanxuan.nosdn.127.net/1daf43d9a69e50f32cf858b36980b38b.png?quality=75&type=webp&imageView'
                        },
                        {
                          text:'浙江制造',
                          url:'https://yanxuan.nosdn.127.net/94698489e5c39a1f80b9da2530e8d965.jpg?quality=75&type=webp&imageView'
                        }
                       
                    ]
        }
    },
    
    
    
}
</script>
<style  scoped>
.carlist {
    height: 100%;
}
.slide {
    position: absolute;
    left: 0;
    height: 100%;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;

}
.van-sidebar{
    width: 2.16rem;
    padding: .53333rem 0;
}
.search {
    display: flex;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    color: #333;
    line-height: .74667rem;
    background-color: #ededed;
    border-radius: .10667rem;
   margin: .2rem .4rem;
} 
.search .van-icon {
    font-size: .53rem;
    color: #333;
}
.m-subCateList {
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid #ccc;
}
.banner {
    margin-bottom: .42667rem;
}
.gird {
    overflow: hidden;
}
.gird li {
    float: left;
    margin-right: .42rem;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
}
.gird img {
    width: 1.92rem;
}
.gird div {
    display: inline-block;
    height: .96rem;
    font-size: .32rem;
    color: #333;
    text-align: center;
    line-height: .48rem;
}
</style>