import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment: (state) => {
//       state.count += 1
//     },
//     decrement: (state) => {
//       if (state.count === 1) return
//       state.count -= 1
//     }
//   }
// })
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})