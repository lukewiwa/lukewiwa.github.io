<template>
  <section>
    <router-link :to="item.path">
      <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
    </router-link>
    <time>{{ formatPublishDate }}</time>
    <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>
    <p v-if="item.readingTime">Estimated time: {{ item.readingTime.text }}</p>
  </section>
</template>

<script>
export default {
  name: 'BlogPostPreview',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.item.frontmatter.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

      return dateFormat.toLocaleDateString('en-US', options)
    },
  },
}
</script>
