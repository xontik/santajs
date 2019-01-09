// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    iconOnly: false
  },
  mutations: {
    toggleMenu (state) {
      state.iconOnly = !state.iconOnly
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
