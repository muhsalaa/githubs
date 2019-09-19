<template>
    <router-link class="flex h-16 bg-gray-400 items-center border-b-2 border-black px-4 hover:bg-white hover:h-20" :to="`/${content.owner.login}/${content.name}`">
      <p class="font-body font-bold">
        - {{ content.name }}
      </p>
    </router-link>
</template>

<script>
export default {
  props: ['content'],
}
</script>

<style>
</style>
