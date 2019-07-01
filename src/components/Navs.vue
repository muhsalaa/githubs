<template>
    <div class="s-navs">
      <router-link to="/" class="s-txt" exact>Home</router-link>
    </div>
</template>

<script>
export default {
  methods: {
    aa() {
      alert('asdasd')
    }
  }
}
</script>


<style scoped>
  .s-navs {
    height: 4rem;
    display: flex;
    background: #428bca;
    padding: 0 2rem;
    align-items: center;
    margin-bottom: 1rem;
    position: fixed;
    left: 0;
    right: 0
  }

  .s-txt {
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-decoration: none
  }

  .s-txt:hover {
    color: #ebebeb
  }
</style>
