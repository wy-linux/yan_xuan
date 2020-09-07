<template>
    <div class="details">
        <section style="height: 2rem">
            <headers></headers>
            <div class="tab" style="position: fixed;top: 1.42rem; box-sizing: border-box; width: 100%; background-color: #fff; z-index: 1000">
                <van-tabs @click="store">
                  <van-tab :key='index' v-for="(item, index) in tablist" :title='item' >
                  
                  </van-tab>
                </van-tabs>
                <slot></slot>
                <div class="ccc"></div>
            </div>
        </section>
        <goodlist/>
    </div>
</template>
<script>
import headers from './header.vue'
import axios from 'axios'
import goodlist from './goodlist'
export default {
    data() {
        return {
            tablist:[],
            goodlist:[],
            active: ''
        }
        
    },
    components: {
        headers,
        goodlist
    },
    methods: {
        toGoodDetailsFn(item) {
            this.$router.push({
                name:'goodDetails',
                params: {
                    item
                }
            })
        },
        store(name) {
            this.$store.dispatch('detailsGet', name)
            
        }
    },
    created() {
          axios.get('/tablist')
            .then(par => {
                this.tablist = par
            });
           
            
    },
   

}
</script>
<style scoped>
 
 
 
.tab .van-tabs {
    margin: .15rem 0 ;
}
.ccc {
    width: 100%;
    height: .3rem;
    background-color: #eee;
}
</style>