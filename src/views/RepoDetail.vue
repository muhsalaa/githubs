<template>
  <div style="padding-top: 4.5rem" v-html="renderHtml">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: ''
    }
  },
  created() {
    const { username, repository } = this.$route.params;
    axios.get(`https://raw.githubusercontent.com/${username}/${repository}/master/README.md`)
      .then(resp => {
        console.log(resp.data);
        this.text = resp.data;
      })
      .catch(err => {
        console.log(err);
        this.text = '# Error No Data'
      });
  },
  computed: {
    renderHtml() {
      let MarkdownIt = require('markdown-it'),
      md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      });
      let result = md.render(this.text);
      return result;
    }
  }
}
</script>

<style>

</style>
