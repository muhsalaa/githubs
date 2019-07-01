<template>
  <div class="s-container">
    <form @submit.prevent="findUser">
      <div class="s-form-group">
        <label for="validationServer03">Username</label>
        <input 
          type="text" 
          class="form-control" 
          v-model="username"
          :class="{'is-invalid': isExist === false}"
          id="validationServer03" 
          placeholder="Enter Username" 
          required
        >
        <div class="invalid-feedback">
          No users found!
        </div>
      </div>
      <button type="submit" class="btn btn-primary" v-if="!loading">Search</button>
      <div class="spinner-border text-primary" role="status" v-else>
        <span class="sr-only">Loading...</span>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      isExist: null,
      loading: false
    }
  },
  
  methods: {
    findUser() {
      this.loading = true
      axios.get(`https://api.github.com/users/${this.username}`)
        .then(resp => {
          this.isExist = null;
          this.$store.dispatch('getRepoList', this.username);
        })
        .then(resp => {
          this.$router.push(this.username);
          this.username = '';
        })
        .catch(err => {
          console.log(err)
          this.isExist = false;
          this.loading = false;
        })
    }
  }
};
</script>

<style scoped>
  .s-container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .s-form-group {
    width: 30vw;
    margin-bottom: 1rem
  }
</style>
