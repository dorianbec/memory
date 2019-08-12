import { STATUS } from './store/status'
import imageData from '../api/imagedata'

let timerId

// gets length of the data object with the images in it
let pairsLeft = Object.keys(imageData().images).length / 2

const statusHandler = {
  PLAY: function({ commit }) {
    timerId = setInterval(() => {
      commit('count')
    }, 1000);
  },
  STOP: function() {
    clearInterval(timerId)
  }
}

export default {
  reset: function({ commit }) {
    commit('reset', {
      status: STATUS.READY,
      timer: 0,
      pairsLeft: pairsLeft,
      tryCount: 0
    })
  },
  updatedStatus: function(context, status) {
    context.commit('updatedStatus', status)
    statusHandler[status] && statusHandler[status](context)
  },
  match: function({ commit }) {
    commit('paired')
  },
  tryCounter: function({ commit }) {
    commit('trycounter')
  }
}