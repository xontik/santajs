// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
