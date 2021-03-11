<template>
  <div class="">
    <header class="flex flex-col pt-10 pb-20 space-y-4 bg-teal-100">
      <h1 class="text-center text-5xl">Luke Wiwatowski</h1>
      <div class="text-center text-2xl text-gray-600 font-light">
        Gymnastics Engineering Miscellaneous
      </div>
    </header>
    <div
      class="grid grid-flow-row grid-rows-auto sm:grid-cols-1 md:grid-cols-3 gap-3 p-4 container mx-auto text-gray-600 font-light"
    >
      <div>
        <h2 class="flex">
          <AwardIcon /><span class="text-lg ml-2 mb-4 font-medium text-gray-700"
            >Gymnastics</span
          >
        </h2>
        <p>
          Australian Representative for 15 years. 2010 Delhi Commonwealth Games
          Gold Medal winner.
        </p>
      </div>
      <div>
        <h2 class="flex">
          <SettingsIcon /><span
            class="text-lg ml-2 mb-4 font-medium text-gray-700"
            >Engineering</span
          >
        </h2>
        <p>
          Bachelors in mechanical engineering from Swinburne University.
          Controls engineering at Alerton Australia. Lab Assistant for PV Lab
          Australia. Software Engineer for WSP Australia.
        </p>
      </div>
      <div>
        <h2 class="flex">
          <SmartphoneIcon /><span
            class="text-lg ml-2 mb-4 font-medium text-gray-700"
            >Online</span
          >
        </h2>
        <p>You can connect with me on the line using many different urls.</p>
        <p class="flex space-x-2">
          <a href="https://www.linkedin.com/in/lukewiwa/"><LinkedinIcon /></a>
          <a href="https://github.com/lukewiwa/"><GithubIcon /></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import {
  LinkedinIcon,
  SmartphoneIcon,
  SettingsIcon,
  GithubIcon,
  AwardIcon,
} from "vue-feather-icons";

export default defineComponent({
  components: {
    LinkedinIcon,
    SmartphoneIcon,
    SettingsIcon,
    GithubIcon,
    AwardIcon,
  },
});
</script>
