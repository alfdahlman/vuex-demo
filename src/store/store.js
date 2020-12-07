import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    numbers: [1,2,3,4,5,6,7,8,9],
    selected: 0
  },
  getters: {
    numbers: state => state.numbers,
    selected: state => state.selected
  },
  mutations: {
    setNumbers: (state, payload) => state.numbers = payload,
    setSelected: (state, payload) => state.selected = payload,
  },
  actions: {
    sortNumbers: ({getters, commit}, payload) => {
      const numbers = [ ...getters.numbers ];
      numbers.sort((a, b) => a - b );
      if(payload === 'desc'){
        numbers.reverse();
      }

      commit( 'setNumbers', numbers );
    },
    selectNumber: ({commit}, payload) => {
      commit( 'setSelected', payload );
    }
  }
})
