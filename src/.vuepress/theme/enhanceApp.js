import { AwardIcon, SettingsIcon, SmartphoneIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'vue-feather-icons'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('award', AwardIcon)
  Vue.component('settings', SettingsIcon)
  Vue.component('smartphone', SmartphoneIcon)
  Vue.component('twitter', TwitterIcon)
  Vue.component('linkedin', LinkedinIcon)
  Vue.component('github', GithubIcon)
  // ...apply enhancements to the app
}