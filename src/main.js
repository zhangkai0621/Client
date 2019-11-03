import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import '../public/styles/common.scss'

// 项目配置
import config from '../src/config/environment'
console.log(config)
// webscoket 连接
import VueSocketIO from 'vue-socket.io';
Vue.use(new VueSocketIO({
  debug: true,
  connection: config.wsUrl
}));

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
