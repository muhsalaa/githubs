<template>
    <div style="padding-top: 4.5rem">
      <div class="d-flex justify-content-center" v-if="repoList.length < 1">
        <div class="spinner-grow text-primary m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <s-repo-card v-for="repo in repoList" :content="repo" :key="repo.id" v-else></s-repo-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import Navs from '../components/Navs'
import RepoCard from '../components/RepoCard'

export default {
  components: {
    sNavs: Navs,
    sRepoCard: RepoCard
  },
  computed: {
    ...mapState(['repoList'])
  },
}
</script>

<style scoped>
</style>
