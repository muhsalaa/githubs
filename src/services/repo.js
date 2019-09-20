import axios from "axios";
import { apiDetail, apiUser } from "../config";

function getUserRepo(username, repository) {
  return axios
    .get(`${apiDetail}/${username}/${repository}/master/README.md`)
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      console.log(err);
      return "<h1><center>No README.md found</center></h1>";
    });
}

function isUserExist(username) {
  return axios
    .get(`${apiUser}/${username}`)
    .then(resp => {
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}

export { getUserRepo, isUserExist };
