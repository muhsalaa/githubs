import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    repoList: []
  },
  mutations: {
    updateRepoList(state, payload) {
      state.repoList = payload;
    },
    clean(state) {
      state.repoList = [];
    }
  },
  actions: {
    getRepoList({ commit }, payload) {
      commit('clean');
      axios.get(`https://api.github.com/users/${payload}/repos`)
        .then(resp => {
          commit('updateRepoList', resp.data)
        })
        .catch(err => {
          console.log(err.response)
        });
    }
  }
});
