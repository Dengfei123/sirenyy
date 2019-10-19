import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import "./font/iconfont.css"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import MintUI from 'mint-ui'
// 配置axios
import "mint-ui/lib/style.css"
Vue.use(MintUI)
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
