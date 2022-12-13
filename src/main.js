import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
