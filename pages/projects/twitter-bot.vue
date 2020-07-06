<template>
  <Timeline id="newcodeofpoints" source-type="profile" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
// @ts-ignore
import { Timeline } from "vue-tweet-embed";

export default defineComponent({
  name: "TwitterBot",
  components: {
    Timeline,
  },
});
</script>
