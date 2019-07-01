import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../store'

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
          console.log(resp.data)
          commit('updateRepoList', resp.data)
        })
        .catch(err => {
          console.log(err.response)
        });
    }
  }
});
