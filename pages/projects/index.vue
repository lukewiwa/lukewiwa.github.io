<template>
  <div class="max-w-screen-md mx-auto p-4 space-y-8">
    <section class="flex flex-col space-y-2">
      <a href="https://judgeofcharacter.xyz" class="bloglist-title">
        Judge of Character
      </a>
      <p>
        A web game using client side tesseract and notepad libraries. It's
        frustratingly fun.
      </p>
    </section>
    <section class="flex flex-col space-y-2">
      <a
        href="https://lukewiwa.com/pwa-share-target-data-revealer/"
        class="bloglist-title"
      >
        PWA Share Target Data Revealer
      </a>
      <p>
        If you have a PWA installed on android you can register it as a
        <a href="https://web.dev/web-share-target/"> share target</a>. For
        debugging purposes this PWA allows you to see exactly what type of data
        will be transferred through the share intent. Add this site to your
        homescreen from android chrome and then from any android app share to
        this PWA to reveal the data being transferred.
      </p>
    </section>
    <section class="flex flex-col space-y-2">
      <a href="https://lukewiwa.com/shout/" class="bloglist-title"> Shout! </a>
      <p>
        A proof of concept for the most basic Progressive Web App using React.
        Make text BIGGER.
      </p>
    </section>
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
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    useMeta({ title: "Wiwa - Projects" });
  },
});
</script>
