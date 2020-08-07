import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

Vue.config.productionTip = false
// process.env.GH_TOKEN = "579c4d59d94c1cfc83c7d4f4883b6627df892979"

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
