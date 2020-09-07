<template>
    <div class="search">
        <van-row type="flex" justify="space-between" style="padding: .2rem .4rem;">
          <van-col span="21" >
               <van-field
                  v-model="value1"
                  left-icon="search"
                  @keyup.enter='submitFn'
                  placeholder="好货内部价"
                >
                     <template #button>
                        <van-icon name="close" v-show="isShow" @click='clearFn'/>
                     </template>
               </van-field>
          </van-col>

         
          <van-col span="3">
              <button style="font-size: .4rem; border: none; background-color: #fff;"   @click="$router.back(-1)">取消</button>
          </van-col>
        </van-row>

        <ul class="list">
            <li v-for='(item, index) in list' :key='index'>{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'saerch',
    data() {
        return {
            value1: '',
            isShow: false,
            list: []
        }
      
    },
    watch: {
        value1() {
            if(this.value1) {
                this.isShow = true
            } else {
                this.isShow =false
            }
        }
    },
    methods: {
        clearFn() {
            this.value1 = '';
            
        },
        submitFn() {
            axios.get('/search', {
                params: {
                    value: this.value1
                }
            }).then(par => {
                this.list = par.data;
                
            })
        },
       
    }
}
</script>
<style scoped>
   
    .van-field {
          padding-top: 0;
    padding-left: .26667rem;
    padding-bottom: 0;
    border: 0;
        background-color: #f4f4f4;
    height: .74667rem;
    border-radius: 4px;
    }
  .loginbtn {
    margin-top: .1rem;
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color:#333;
   border: none;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .37333rem;;
    background: #fff;
}
.list {
    padding-left: .4rem;
    background-color: #fff;
}
.list li {
    font-size: .3733rem;
    text-align: left;
    color: #333;
    height: 1.2rem;
    line-height: 1.4rem;
    border-bottom: 1px solid #ccc;
}
    
</style>