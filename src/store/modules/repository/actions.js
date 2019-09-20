import axios from "axios";
import { apiUser } from "@/config";

const getRepoList = ({ commit }, payload) => {
  commit("clean");
  axios
    .get(`${apiUser}/${payload}/repos`)
    .then(resp => {
      commit("updateRepoList", resp.data);
    })
    .catch(err => {
      console.log(err.response);
    });
};

export default {
  getRepoList
};
