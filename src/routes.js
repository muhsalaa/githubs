import Home from "./views/Home.vue";
import RepoList from "./views/RepoList.vue";
import RepoDetail from "./views/RepoDetail.vue";

export const routes = [
  { path: "", name: "Home", component: Home },
  { path: "/:username", name: "RepoList", component: RepoList },
  { path: "/:username/:repository", name: "RepoDetail", component: RepoDetail },
  { path: "*", redirect: "/" }
];
