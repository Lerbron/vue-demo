import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Button
} from 'element-ui'

import {
  Switch
} from 'ant-design-vue';

Vue.use(Button)
Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')