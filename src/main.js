import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/rem.js'
import './assets/reset.css'

import './assets/resetVant.css'
import { Notify, Toast, Col, Row, Icon, Button, Tab, Tabs, Field, Swipe, SwipeItem, Grid, GridItem, CountDown, Tabbar, TabbarItem, Sidebar, SidebarItem, Sku } from 'vant'
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Field);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(CountDown);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Sku);
Vue.use(Toast);
Vue.use(Notify);




Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    store

}).$mount('#app')