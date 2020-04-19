import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import test from './modules/test'

Vue.use(Vuex)

const state = {
  root: '/'
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    test
  }
})