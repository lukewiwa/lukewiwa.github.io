<template>
  <div class="flex flex-col container mx-auto p-5 space-y-4">
    <div class="">
      <h2 class="flex">
        <AwardIcon /><span class="text-lg font-bold ml-2">Gymnastics</span>
      </h2>
      <p>
        Australian Representative for 15 years. 2010 Delhi Commonwealth Games
        Gold Medal winner. Various small projects revolving around
        <nuxt-link to="/gymnastics">gymnastics</nuxt-link>.
      </p>
    </div>
    <div class="">
      <h2 class="flex">
        <SettingsIcon /><span class="text-lg font-bold ml-2">Engineering</span>
      </h2>
      <p>
        Bachelors in mechanical engineering from Swinburne University. Controls
        engineering at Alerton Australia. Lab Assistant for PV Lab Australia.
        Software Engineer for WSP Australia.
      </p>
    </div>
    <div class="">
      <h2 class="flex">
        <SmartphoneIcon /><span class="text-lg font-bold ml-2">Online</span>
      </h2>
      <p>You can connect with me on the line using many different urls.</p>
      <p class="flex">
        <a href="https://www.linkedin.com/in/lukewiwa/"><LinkedinIcon /></a>
        <a href="https://github.com/lukewiwa/"><GithubIcon /></a>
        <a href="https://twitter.com/lukewiwa/"><TwitterIcon /></a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  LinkedinIcon,
  SmartphoneIcon,
  SettingsIcon,
  GithubIcon,
  AwardIcon,
  TwitterIcon,
} from "vue-feather-icons";

export default Vue.extend({
  components: {
    LinkedinIcon,
    SmartphoneIcon,
    SettingsIcon,
    GithubIcon,
    AwardIcon,
    TwitterIcon,
  },
});
</script>
