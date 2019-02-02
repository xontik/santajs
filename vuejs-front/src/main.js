// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import VueApollo from 'vue-apollo'
import store from './store/store'
import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueApollo)
Vue.use(Vuelidate)

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://santajs.test:8888/api/'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  components: {App},
  template: '<App/>'
})
