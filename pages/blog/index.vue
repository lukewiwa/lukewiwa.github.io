<template>
  <div class="max-w-screen-md mx-auto p-4 space-y-5">
    <section
      v-for="post in blogPosts"
      :key="post.slug"
      class="flex flex-col space-y-2"
    >
      <div>
        <span class="font-normal mr-2">{{ printDate(post.date) }}</span>
        <nuxt-link :to="post.path" class="bloglist-title"
          ><span>{{ post.title }}</span>
        </nuxt-link>
      </div>
      <nuxt-content v-if="post.excerpt" :document="{ body: post.excerpt }" />
      <p v-else-if="post.description">{{ post.description }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import { printDate } from "@/utils/datetime";

export default defineComponent({
  async asyncData({ $content }) {
    const blogPosts = await $content("blog")
      .only(["title", "slug", "path", "date", "excerpt", "description"])
      .sortBy("date", "desc")
      .fetch();
    return { blogPosts };
  },
  head: {},
  setup() {
    useMeta({ title: "Wiwa - Blog" });
    return { printDate };
  },
});
</script>
