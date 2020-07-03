<template>
  <nav class="h-16 shadow-sm z-20 border-b border-gray-300">
    <div
      class="container mx-auto flex flex-row items-stretch h-full justify-between align-middle px-4"
    >
      <div class="h-full">
        <nuxt-link to="/">
          Wiwa
        </nuxt-link>
      </div>
      <div class="h-full flex flex-row">
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/gymnastics">Gymnastics</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>
