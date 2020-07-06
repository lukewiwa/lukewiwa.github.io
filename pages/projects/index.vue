<template>
  <div class="max-w-screen-md mx-auto p-4 space-y-10">
    <section class="flex flex-col space-y-2">
      <nuxt-link to="/projects/code-of-points" class="bloglist-title">
        Code of Points
      </nuxt-link>
      <p>
        I wanted a machine readable code of points so I created a scraper with
        python and pulled out the relevant information. The most up to date
        version is available on github. Feel free to find any faults and send
        pull requests, due to the fickle nature of pdf scraping and my lack of
        experience coding there are bound to be errors.
      </p>
    </section>
    <section class="flex flex-col space-y-2">
      <nuxt-link to="/projects/twitter-bot" class="bloglist-title">
        Twitter Bot
      </nuxt-link>
      <p>
        I created a code of points gibberish bot using markov chains. The source
        code is quite simple and available on github.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
  head() {
    return { title: "Wiwa - Projects" };
  },
});
</script>
