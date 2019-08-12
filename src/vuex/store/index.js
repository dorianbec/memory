import Vue from 'vue'
import Vuex from 'vuex'

import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

Vue.use(Vuex)

const state = {
  timer: 0,
  status: '',
  pairsLeft: 0,
  tryCount: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})