const TEST = "TEST"

const state = {
  num: 0
}

// getters
const getters = {
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },
}

const actions = {
  add({
    commit,
    state
  }, payload) {
    commit('add', payload)
  }
}

const mutations = {
  add(state, payload) {
    state.num += payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}