<template>
  <div class="text-gray-700 font-normal">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  head() {
    return { title: "Wiwa" };
  },
});
</script>
