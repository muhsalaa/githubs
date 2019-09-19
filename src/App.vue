<template>
  <div class="container mx-auto md:px-16 relative">
    <s-navs></s-navs>
    <router-view></router-view>
  </div>
</template>

<script>
import Navs from "./components/Navs";

export default {
  name: "app",
  components: {
    sNavs: Navs
  }
};
</script>

<style>
</style>
