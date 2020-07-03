<template>
  <div class="container mx-auto p-4 space-y-10">
    <section
      class="flex flex-col space-y-2"
      v-for="post in posts"
      :key="post.slug"
    >
      <nuxt-link :to="post.path" class="text-lg font-semibold">{{
        post.title
      }}</nuxt-link>
      <p v-if="post.excerpt">{{ post.excerpt }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData({ $content }) {
    const posts = await $content("gymnastics")
      .only(["title", "slug", "path", "excerpt"])
      .fetch();
    return { posts };
  },
  setup() {
    return {};
  },
});
</script>
