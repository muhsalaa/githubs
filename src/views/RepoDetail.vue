<template>
  <div>
    <div class="flex justify-center items-center h-48" v-if="!this.text">
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
    <div class="my-4 px-2 sm:px-0" v-else>
      <button class="bg-gray-400 hover:bg-white text-black font-bold py-2 px-8 rounded" @click="$router.go(-1)">Back to list</button>
      <div class="my-2 p-4 bg-white rounded">
        <markdown-it-vue class="md-body" html="true" :content="text" :options="options"/>
      </div>
    </div>
    <button class="fixed right-0 bottom-0 my-6 mx-4 bg-purple-400 p-4" @click="backTop" v-show="currentScroll > 500">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownItVue from "markdown-it-vue"
import "markdown-it-vue/dist/markdown-it-vue.css"

import { apiDetail } from "@/config";

export default {
  data() {
    return {
      text: "",
      currentScroll: 0,
      options: {
        markdownIt: {
          linkify: true,
          html: true
        }
      }
    }
  },
  components: {
    MarkdownItVue
  },
  created() {
    const { username, repository } = this.$route.params;
    axios.get(`${apiDetail}/${username}/${repository}/master/README.md`)
      .then(resp => {
        this.text = resp.data;
      })
      .catch(err => {
        console.log(err);
        this.text = "<h1><center>No README.md found</center></h1>";
      });
  },
  methods: {
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    let p = this;
    window.addEventListener("scroll", function() {
      p.currentScroll = this.scrollY;
    });
  }
};
</script>

<style>
</style>
