<template>
  <article class="container mx-auto">
    <h1 class="font-bold my-3">{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData({ $content, params }) {
    const post = await $content("gymnastics", params.slug).fetch();
    return { post };
  },
});
</script>
