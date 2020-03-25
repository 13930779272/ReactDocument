import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './myvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    add(state,payload){
      state.num += payload
    }
  },
  actions: {
    asyncadd(commit,...payload){
      // console.log(this.commit())
      // const {commit} = this
      console.log(...payload)
      setTimeout(() => {
        commit('add',...payload)
      },1000)
    }
  },
  modules: {
  }
})
