<template>
  <!-- <notifications position="bottom left" /> -->
  <router-view></router-view>
</template>

<!-- <script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const route = new useRoute();
    const layout = computed(() => {
      return route.meta.layout + "Layout";
    });

    return {
      layout,
    };
  },
};
</script> -->

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
