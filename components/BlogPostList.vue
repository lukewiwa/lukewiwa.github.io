<template>
  <div>
    <div v-if="selectedTags.length > 0" class="filtered-heading">
      <h2>Filtered by {{ selectedTags.join(",") }}</h2>
      <button type="button" class="btn clear-filter-btn" @click="resetTags">
        Clear filter
      </button>
    </div>
    <ul class="blog-list">
      <li v-for="(item, index) in filteredList" class="blog-list__item">
        <BlogPostPreview
          v-show="
            index >= currentPage * pageSize &&
            index < (currentPage + 1) * pageSize
          "
          :item="item"
        />
        <ul v-for="tag in item.frontmatter.tags" class="blog-list__tags">
          <li>
            <button @click="addTag(tag)">{{ tag }}</button>
          </li>
        </ul>
      </li>
    </ul>

    <div class="pagination">
      <button
        v-show="currentPage > 0"
        class="button--pagination"
        type="button"
        @click="previousPage"
      >
        Previous
      </button>
      <button
        v-show="currentPage < totalPages - 1"
        class="button--pagination"
        type="button"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPostList",
  props: {
    pages: {
      type: Array,
      default: [],
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    startPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentPage: Math.ceil(this.startPage / this.pageSize),
      selectedTags: [],
    };
  },
  computed: {
    filteredList() {
      if (this.pages) {
        return this.pages
          .filter((item) => {
            const isBlogPost = !!item.frontmatter.blog;
            const isReadyToPublish =
              new Date(item.frontmatter.date) <= new Date();
            // check if tags contain all of the selected tags
            const hasTags =
              !!item.frontmatter.tags &&
              this.selectedTags.every((tag) =>
                item.frontmatter.tags.includes(tag)
              );

            if (
              !isBlogPost ||
              !isReadyToPublish ||
              (this.selectedTags.length > 0 && !hasTags)
            ) {
              return false;
            }

            return true;
          })
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
    },

    totalPages() {
      return Math.ceil(this.filteredList.length / this.pageSize);
    },
  },

  mounted() {
    this.currentPage = Math.min(
      Math.max(this.currentPage, 0),
      this.totalPages - 1
    );
  },

  methods: {
    nextPage() {
      this.currentPage =
        this.currentPage >= this.totalPages - 1
          ? this.totalPages - 1
          : this.currentPage + 1;
    },
    previousPage() {
      this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1;
    },
    addTag(tag) {
      const tagExists = this.selectedTags.some((item) => {
        return item === tag;
      });

      if (!tagExists) {
        this.selectedTags = this.selectedTags.concat(tag);
      }
    },
    removeTag(tag) {
      this.selectedTags.filter((t) => t != tag);
    },
    resetTags() {
      this.selectedTags = [];
    },
  },
};
</script>
