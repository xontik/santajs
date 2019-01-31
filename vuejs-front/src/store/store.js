import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconOnly: false,
    loggedIn: false
  },
  mutations: {
    testLogin: (state) => { state.loggedIn = true }
  }
})
