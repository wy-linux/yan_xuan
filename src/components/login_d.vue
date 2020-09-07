<template>
<div class="login">
       <div class="login" style="height: 100%">
        <headers></headers>
        <div class="m-loginTypes">
            <div class="logoWrap">
                <img src="../assets/login.png" alt="">
            </div>
            
        </div>
    </div>
    <div class="login_d">
        <div class="title" style="margin: 0px 2rem .5rem; overflow: hidden;">
            <a href="javascript:;" style="float: left; color:#333" @click.prevent='way = true' :class="{on: way}">短信登陆</a>
            <a href="javascript:;" style="float: right; color:#333" @click.prevent='way = false' :class="{on: !way}">密码登录</a>
        </div>
        <form @submit.prevent="login">
           <div class="first " :class="{on: way}">
                <section >
                     <input type="text" placeholder="请输入手机号" v-model="phone">
                </section>
                <section style="position: relative; margin-top: .7rem">
                    <input type="password" placeholder="请输入短信验证码" v-model="msg">
                    <button class="yan_zh" :class="{color: count}" @click.prevent="getMsg">{{count ? `已发送(${count}s)` : '获取验证码'}}</button>
                    <span class="phone" :class='{on: checkPhone}'>请输入正确的手机号</span>
                    <span class="phone" :class='{on: idenCode}'>验证码是{{idenCode}}</span>
                </section>
                <section style="margin-top: .8rem">
                    <div style="overflow: hidden">
                        <button>登录</button>
                    </div>
                    
                </section>
           </div>
           <div class="second " :class="{on: !way}">
                <section >
                     <input type="text" placeholder="请输入手机号" v-model="phone">
                </section>
                <section style="position: relative">
                    <input type="password" placeholder="请输入密码" v-model="pwd" v-show="!showPwd">
                    <input type="text" placeholder="请输入密码" v-model="pwd" v-show="showPwd">
                    <div class="switchBtn" :class="{green: showPwd}" @click='showPwd = !showPwd'>
                        <div class="circle" :class="{scroll: showPwd}"></div>
                        <span style="float: left; font-size: .3rem">{{showPwd ? 'abc' : ''}}</span>
                    </div>
                   <div class="tishi" style="font-size: .25rem; font-weight: 700; width: 7rem; margin-top: .1rem; text-align: left">* 提示： 登录密码为用户第一次输入的密码，请务必牢记。<br />* 如有遗忘，请使用验证码登录</div>
                </section>
                <section>
                    <div style="overflow: hidden; margin-top: .4rem">
                        <button>登录</button>
                    </div>
                    
                </section>
           </div>
        </form>
     </div>
     <alert-tip :msg='text' @destroy='change' v-show='alertShow' />
</div>
</template>
<script>
import axios from 'axios'
import headers from './header'
import alertTip from './alertTip.vue'
export default {
    data() {
        return {
            way: true,
            checkPhone: false,
            count: 0,
            showPwd: false,
            alertShow: false,
            text:'',

            phone: '',
            msg: '',
            idenCode:'',
            pwd: '',
            
            
        }
    },
    methods: {
        
        async getMsg() {
            
            if(/^1\d{10}$/.test(this.phone)) {
                let result = ''
                if(!this.count) {
                    this.count = 30
                    var intervalId = setInterval(() => {
                        this.count--;
                        if(this.count <=  0) {
                            clearInterval(intervalId)
                        }
                    }, 1000);
                    result  = await axios.get('/idenCode?phone='+ this.phone)
                }
                
                if(result.status == 0) {
                    this.checkPhone = false;
                    if(this.count) {
                        clearInterval(intervalId)
                        this.count = 0;
                    }
                    this.idenCode = result.code;
                }
            } 
            else {
                this.idenCode = ''
                this.checkPhone = true
            }
        },
        async login() {
            let r;
            if(this.way) {
                if (!/^1\d{10}$/.test(this.phone)) {
                        this.text = '手机号输入不正确',
                        this.alertShow = true
                        return
                }  else if(!/^\d{6}$/.test(this.msg)) {
                        this.text = '验证码格式错误',
                        this.alertShow = true
                        return
                } else {
                    r = await axios.post('/login_c', {
                        phone: this.phone,
                        code: this.msg
                    })
                    
                }
                 
            } else {
                    if(!/^1\d{10}$/.test(this.phone)) {
                        this.text = '手机号输入不正确',
                        this.alertShow = true
                        return
                } else if (!/^\w{8,16}$/.test(this.pwd)) {
                        this.text = '密码必须8-16位数字或者字母',
                        this.alertShow = true
                        return
                } else {
                     r = await axios.post('/login_pwd', {
                        phone: this.phone,
                        pwd: this.pwd,
                        
                    })
                    
                    
                }
                
            }
            
            this.checkPhone = false
             if(this.count) {
                    clearInterval(intervalId)
                    this.count = 0;
                    
                    }
                if(r.status == 0) {
                        this.$store.commit('userChange',r.user)
                        this.$router.replace('/profile')
                    
                        
                    } else {
                        this.alertShow = true
                        this.text = r.msg
                        return
                    }
        },
        change() {
            this.text = '';
            this.alertShow = false
        },
       
    },
    components: {
        alertTip,
        headers
    }
}
</script>
<style scoped>
     .logoWrap {
    text-align: center;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
 }
 .logoWrap img {
     width: 3.57333rem;
    height: 1.2rem;
 }
 .m-loginTypes {
     position: relative;
     height: 100%;
     background: #fff;
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
    .login_d {
        margin: 0 auto;
       
        padding: .6rem;
    }
    .login_d input {
        border: none;
        border-bottom: 1px solid #000;
        height: 1.28rem;
        width: 100%;
        font-size: 0.4rem ;
        color: #333;
        line-height: 1.28rem;
        
    }
    .login_d a {
         padding:  0 .3rem;
        
        text-decoration: none;
        cursor: pointer;
        color: #7f7f7f ;
        font-size: 0.4rem;
        line-height: .8rem;
        transition: all .3s;
    }
    
    .title .on {
        color:#DD1A21 !important;
        border-bottom: 5px solid #DD1A21;
    }
    .login_d button {
        width: 100%;
        height: 1.28rem;
        background: #DD1A21;
        font-size: 0.4rem;
        line-height: 1.28rem;
        border-radius: 3px;
        border: none;
        color: #fff;
    }
    .login_d .second,
    .login_d .first {
        display: none;
    }
    .login_d .on {
        display: block !important;
    }
    .login_d .yan_zh {
        position: absolute;
        right: 0;
        top: .25rem;
        width: 2.3rem;
        height: 0.75rem;
        text-align: center;
        color: #000;
        font-size: .32rem;
        line-height: .75rem;
        background-color: #fff;
        border: 1px solid #7f7f7f;
        border-radius: .05rem;
    }
    .login_d .phone {
        float: left;
        display: none;
        margin-top: .2rem;
        color: #DD1A21;
        font-size: .3rem;
        
    }
    .login_d .color {
        color: #ccc !important;
    }
    .switchBtn {
        position: absolute;
        right: .2rem;
        top: .35rem;
        width: 1rem;
        height: .4rem;
        border: 1px solid #ccc;
        border-radius: .2rem;
    }
    .circle {
        position: absolute;
        top: -.01rem;
        left: -.01rem;
        box-shadow: 0 0 9px 0 rgba(0, 0, 0 , .2);
        width: .4rem;
        height: .4rem;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .scroll {
        transform: translateX(.6rem);
        transition: transform .3s;

    }
    .green {
        background-color: #02a774;
    }
   
</style>