const actions = {
  setRoot({
    commit,
    state
  }, payload) {
    commit('setRoot', payload)
  }
}

export default actions