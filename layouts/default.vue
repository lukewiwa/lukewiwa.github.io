<template>
  <div class="text-gray-700 font-normal">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  head: {},
  setup() {
    useMeta({ title: "Wiwa" });
  },
});
</script>
