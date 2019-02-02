import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authPayload: localStorage.getItem('AuthPayload') ? JSON.parse(localStorage.getItem('AuthPayload')) : {}
  },
  mutations: {
    testLogin (state) { state.loggedIn = true },
    login (state, payload) {
      console.log('vuex login')
      state.authPayload.userId = payload.userId
      state.authPayload.token = payload.token
    }
  }
})
