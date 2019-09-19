<template>
  <div class="flex justify-center py-24 bg-black">
    <form @submit.prevent="findUser">
      <div class="w-full bg-black h-48 p-4">
        <label for="username">
          <p class="font-cursive font-bold text-white text-3xl mb-2">
            Find github repositories by username
          </p>
        </label>
        <input 
          class="font-body rounded w-full py-2 px-3 text-gray-700 mb-2"
          :class="{'border-red-700 border-2 text-red-700': notExist}"
          id="username" 
          type="text"
          v-model="username" 
          placeholder="Enter Username"
          required
        >
        <div class="flex flex-row items-center">
          <div class="flex-1">
            <p class="font-body text-white text-xl" v-if="notExist">Users not found!</p>
            <div class="lds-dual-ring" v-if="loading"></div>
          </div>
          <button type="submit" class="bg-gray-400 hover:bg-white text-black font-bold py-2 px-8 rounded">
            Seacrh
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { apiUser } from "@/config";

export default {
  data() {
    return {
      username: '',
      notExist: false,
      loading: false
    }
  },
  methods: {
    findUser() {
      this.loading = true
      this.notExist = false
      
      axios.get(`${apiUser}/${this.username}`)
        .then(resp => {
          this.notExist = false;
          this.$store.dispatch('getRepoList', this.username);
        })
        .then(resp => {
          this.$router.push(this.username);
          this.username = '';
        })
        .catch(err => {
          console.log(err)
          this.notExist = true;
          this.loading = false;
        })
    }
  }
};
</script>

<style>
.lds-dual-ring {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 1px;
  border-radius: 50%;
  border: 0.2rem solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
