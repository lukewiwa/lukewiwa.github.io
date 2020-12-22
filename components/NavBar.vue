<template>
  <nav class="h-16 shadow-sm z-20 border-b border-gray-300">
    <div
      class="container mx-auto h-full flex flex-row items-center justify-between px-4"
    >
      <div class="flex flex-row items-center">
        <nuxt-link to="/" class="navlink">
          Wiwa
        </nuxt-link>
      </div>
      <div class="flex flex-row items-center space-x-4">
        <nuxt-link to="/blog" class="navlink">Blog</nuxt-link>
        <nuxt-link to="/projects" class="navlink">Projects</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({});
</script>
