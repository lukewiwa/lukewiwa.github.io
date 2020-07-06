<template>
  <article class="max-w-screen-md mx-auto px-6 mt-10 mb-20">
    <h1 class="font-semibold mb-4">{{ post.title }}</h1>
    <div class="mb-3 font-normal">{{ printDate(post.date) }}</div>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { printDate } from "@/utils/datetime";

export default defineComponent({
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    return { post };
  },
  methods: {
    printDate,
  },
});
</script>
