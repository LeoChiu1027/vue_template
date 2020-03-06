import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  template: '<App/>',
  components: { App }
})
