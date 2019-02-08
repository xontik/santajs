import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authPayload: {},
    snackbar: {}
  },
  mutations: {
    testLogin (state) { state.loggedIn = true },
    login (state, payload) {
      state.authPayload = {
        ...payload
      }
    },
    logout (state) {
      state.authPayload = {}
    },
    addNotification (state, payload) {
      state.snackbar = {
        value: true,
        ...payload
      }
    },
    closeNotification (state) {
      state.snackbar = {
        value: true,
        type: '',
        message: ''
      }
    }
  },
  actions: {
    retrieveAuth (context) {
      let storageAuth = localStorage.getItem('AuthPayload') ? JSON.parse(localStorage.getItem('AuthPayload')) : {}
      context.commit('login', storageAuth)
    },
    setAuth (context, payload) {
      localStorage.setItem('AuthPayload', JSON.stringify(payload))
      context.commit('login', payload)
    },
    logout (context) {
      localStorage.removeItem('AuthPayload')
      context.commit('logout')
    }

  }
})
