import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authPayload: {},
    snackbar: {
      type: '',
      message: '',
      value: false
    }
  },
  mutations: {
    testLogin (state) { state.loggedIn = true },
    login (state, payload) {
      state.authPayload = {
        ...payload
      }
    },
    addNotification (state, payload) {
      state.snackbar.value = true
      state.snackbar.type = payload.type
      state.snackbar.message = payload.message
    },
    closeNotification (state) {
      state.snackbar.value = false
      state.snackbar.type = ''
      state.snackbar.message = ''
    },
    retrieveAuth (state) {
      let storageAuth = localStorage.getItem('AuthPayload') ? JSON.parse(localStorage.getItem('AuthPayload')) : {}
      state.authPayload = {
        ...storageAuth
      }
      console.log(state.authPayload)
    }

  }
})
