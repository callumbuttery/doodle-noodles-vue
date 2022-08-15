import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallet: {},
    alertMessage: '',
  },
  mutations: {
    changeAlertMessage(state, payload) {
      state.alertMessage = payload
    },
    addWallet(state, payload) {
      state.wallet = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
