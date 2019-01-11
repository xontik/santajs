// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuetify)

const store = new Vuex.Store({
  state: {
    iconOnly: false
  },
  mutations: {}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
