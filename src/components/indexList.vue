<template>
    <div class="goodgird" style="overflow: hidden">
        <section style="height: 1.6rem;text-align: center; margin-top: .5rem">
            <div style="font-size: .42667rem;line-height: 1; color: #000">{{this.$store.state.indexHead.title1}}</div>
            <div style="margin-top: .21333rem;line-height: 1;color: #999;font-size: .32rem;">{{this.$store.state.indexHead.title2}}</div>
        </section>
            <ul>
                <li v-for='(item, index) in this.$store.state.indexGoodlists' :key='index' @click='toGoodDetailsFn(index)'>
                    <div style="position: relative">
                        <img :src="item.img" alt="" class="img">
                        <img src="../assets/99bgc2.png" alt="" class="bgc">
                    </div>
                    <div class="promBanner" v-show='item.time'>
                        <h3>
                            <span>{{item.type}}</span>
                            <span class="price">{{item.tPrice}}</span>
                        </h3>
                        <p>{{item.time}}</p>
                    </div>
                    <div class="activity" v-show="item.noDiscount">{{item.noDiscount}}</div>
                    <div class="name">{{item.title}}</div>
                    <div class="c_price">
                        <span>{{item.price}}</span>
                        <span class="counterPrice">{{item.oriPrice}}</span>
                    </div>
                    <div class="tagWraper" v-show="item.label"><span>{{item.label}}</span></div>
                </li>
            </ul>
        </div>
</template>
<script>

export default {
     methods: {
        toGoodDetailsFn(index) {
            this.$router.push({
                name:'goodDetails',
                params: {
                    index
                }
            })
        },
    },
  
    

}
</script>
<style scoped>
.goodgird {
     overflow: hidden;
    
 }
.goodgird li {
    float: left;
    width: 50%;
    height: 8.2rem;
    padding: 0rem 0.133333rem 0rem 0.1rem;
    box-sizing: border-box;
}
.goodgird li .img {
    display: block;
    width: 100%;
    height: 4.6rem;
    border-radius: .05333rem .05333rem 0 0;
    background-color: #f4f4f4;
    vertical-align: middle;
}
.promBanner {
    position: relative;
    background: url('../assets/99bgc.png') no-repeat;
    height: .74667rem;
    background-size: 100%;
}
.promBanner h3 {
    position: absolute;
    top: -0.2rem;
    height: .74667rem;
    padding: .1rem .3rem 0 .2rem ;
    background:  url("../assets/99bgc1.png") no-repeat ;
    background-size: auto,100%;
    background-position: right .01333rem;
}
.promBanner h3 span{
    display: block;
    font-size: .24rem;
    color: #fff;
    font-weight: 700;
}
.promBanner h3 .price {
    font-size: .29333rem;
    color: #fff;
}
.promBanner p {
    font-size: .26667rem;
    padding-left: .8rem;
    line-height: .64rem;
    color: #fff;
}
.name {
    padding: 0 .2rem;
    margin-top: .11333rem;
    line-height: .53333rem;
    text-align: left;
    font-size: .37333rem;
}
.c_price {
    font-size: .42667rem;
    padding: 0 .2rem;
    line-height: .64rem;
    text-align: left;
    color: #dd1a21;
}
.counterPrice {
    margin-left: .10667rem;
    font-size: .32rem;
    color: #999;
    line-height: .48rem;
    text-decoration: line-through;
}
.tagWraper {
    margin-top: .05333rem;
    height: .44rem;
    text-align: left;
    padding: 0 .2rem;
}
.tagWraper span {
    margin-bottom: .06667rem;
    height: .4rem;
    padding: 0 .10667rem;
    line-height: .4rem;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    font-size: .24rem;
    border-radius: .2rem;
    display: inline-block;
}
.activity  {
    background: #f8e4cc;
    color: #875d2a;
    
    width: 100%;
    box-sizing: border-box;
    border-radius: 0 0 .05333rem .05333rem;
    font-size: .32rem;
   
    letter-spacing: 0;
    line-height: .48rem;
    padding: .08rem .13333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.bgc {
    left: 0;
    width: 0.96rem;
    height: 0.96rem;
    position: absolute;
    top: 0;
    margin-top: .08rem;
    margin-left: .08rem;
}
</style>