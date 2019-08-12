import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import MemoryApp from './MemoryApp'
import GameBoard from './GameBoard'
import { routes } from './routes'
import store from './vuex/store'

Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'md',
})

// removes "Vue Development Mode" warning in console.
// Don't forget to go to production mode and remove this line.
Vue.config.productionTip = false

// removes known "Unable to locate target [data-app]" console warning of Vuetify
const el = document.createElement('div')
el.setAttribute('data-app', true)
document.body.appendChild(el)

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  router,
  template: '<MemoryApp/>',
  components: { MemoryApp },
  children: [{
    template: '<GameBoard/>',
    components: { GameBoard }
  }],
  store
})


