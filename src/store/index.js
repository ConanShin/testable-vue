import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: 'Conan'
  },

  actions: {
    setNameTo: function (context, newName) {
      return context.commit('setNameTo', newName)
    }
  },

  mutations: {
    setNameTo: function (state, newName) {
      return state.name = newName
    }
  }
})
