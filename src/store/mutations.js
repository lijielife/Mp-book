import * as types from './mutation-types'

const mutations = {
  [types.INCREMENT](state, count) { // 递增
    state.count += 1
  },
  [types.DECREMENT](state, count) { // 递减
    if (state.count === 1) return
    state.count -= 1
  }
}

export default mutations
