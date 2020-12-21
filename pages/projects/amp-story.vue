<template>
  <amp-body>
    <p>hello</p>
  </amp-body>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  amp: "only",
  ampLayout: "story.amp",
});
</script>
