import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'Conan'
  },

  mutations: {
    setNameTo: (state, newName) => {
      state.name = newName
    }
  },

  getters: {
    nameStartsWithC: (state) => {
      return state.name.toLowerCase().startsWith('c') ? 'name starts with c' : 'name does not starts with c'
    }
  },

  actions: {
    setNameTo: (context, newName) => context.commit('setNameTo', newName)
  }
})

export default store
