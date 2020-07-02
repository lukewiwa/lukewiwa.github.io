<template>
  <div>
    <ul>
      <li v-for="post in blogPosts" :key="post.slug">
        <a :href="post.path">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData({ $content }) {
    const blogPosts = await $content("blog")
      .only(["title", "slug", "path"])
      .fetch();
    return { blogPosts };
  },
  setup() {
    return {};
  },
});
</script>
