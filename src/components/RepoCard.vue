<template>
    <router-link class="s-card" :to="`/${content.owner.login}/${content.name}`">
      <span class="s-repo-link">
        - {{ content.name }}
      </span>
    </router-link>
</template>

<script>
export default {
  props: ['content'],
}
</script>

<style scoped>
  .s-card {
    height: 4rem;
    display: flex;
    background: #bed1b0;
    padding: 0 2rem;
    align-items: center;
    border-bottom: white 2px solid;
    cursor: pointer;
    text-decoration: none;
  }

  .s-repo-link {
    font-weight: bold;
    color: black
  }

  .s-card:hover span {
    color: #ebebeb;
  }
</style>
