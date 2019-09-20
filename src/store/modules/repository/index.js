import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  repoList: []
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
