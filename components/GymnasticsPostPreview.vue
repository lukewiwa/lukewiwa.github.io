<template>
  <section>
    <router-link :to="item.path">
      <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
    </router-link>
    <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>
  </section>
</template>

<script>
export default {
  name: "GymnasticsPostPreview",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
