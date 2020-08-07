import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

Vue.config.productionTip = false
// process.env.GH_TOKEN="83d25e7e319ea30867817355a3d8524eb0fe5874"

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
