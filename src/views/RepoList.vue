<template>
    <div class="py-2 px-2 sm:px-0 relative">
      <div class="flex justify-center items-center h-48" v-if="repoData.length < 1">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
      <s-repo-card v-for="repo in repoData" :content="repo" :key="repo.id" v-else></s-repo-card>
      <button class="fixed right-0 bottom-0 my-6 mx-4 bg-purple-400 p-4" @click="backTop" v-show="currentScroll > 0">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RepoCard from '../components/RepoCard'

export default {
  data() {
    return {
      currentScroll: 0
    }
  },
  components: {
    sRepoCard: RepoCard
  },
  computed: {
    ...mapGetters({ repoData: 'repository/getRepo' })
  },
  methods: {
    backTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    const upperThis = this;
    window.addEventListener('scroll', function() {
      upperThis.currentScroll = this.scrollY;
    })
  }
}
</script>

<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}
</style>
