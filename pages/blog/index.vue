<template>
  <div class="max-w-screen-md mx-auto p-4 space-y-10">
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
      <p v-if="post.excerpt">{{ post.excerpt }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { printDate } from "@/utils/datetime";

export default defineComponent({
  async asyncData({ $content }) {
    const blogPosts = await $content("blog")
      .only(["title", "slug", "path", "date", "excerpt"])
      .sortBy("date", "desc")
      .fetch();
    return { blogPosts };
  },
  methods: {
    printDate,
  },
  head() {
    return { title: "Wiwa - Blog" };
  },
  setup() {
    return {};
  },
});
</script>
