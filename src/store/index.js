import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0
  },
  mutations: {
    addNum(state) {
      state.num = state.num + 1
    },
    minusNum(state) {
      state.num = state.num - 1
    }
  },
  actions: {
    addNum(store) {
      store.commit('addNum')
    },
    minusNum(store) {
      store.commit('minusNum')
    }
  },
  modules: {
  }
})
