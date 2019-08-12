export default {
  reset(state, newState) {
    state.timer = newState.timer
    state.status = newState.status
    state.pairsLeft = newState.pairsLeft
    state.tryCount = newState.tryCount
  },
  count(state) {
    state.timer++
  },
  updatedStatus(state, newStatus) {
    state.status = newStatus
  },
  paired(state) {
    state.pairsLeft--
  },
  trycounter(state) {
    state.tryCount++
  }
}