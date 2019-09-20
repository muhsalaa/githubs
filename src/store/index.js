import Vue from "vue";
import Vuex from "vuex";

import repository from "./modules/repository";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    repository
  }
});
