const updateRepoList = (state, payload) => {
  state.repoList = payload;
};

const clean = state => {
  state.repoList = [];
};

export default {
  updateRepoList,
  clean
};
