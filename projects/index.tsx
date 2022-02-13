import React from "react";

export const layout = "layouts/Base.tsx";

export default () => (
  <div className="max-w-screen-md mx-auto p-4 space-y-8">
    <section className="flex flex-col space-y-2">
      <a
        href="https://github.com/lukewiwa/privatise"
        className="bloglist-title"
      >
        Privatise Browser Extension
      </a>
      <p>
        A browser extension that does exactly one thing, adds an item to the
        context menu that will open the current tab in a new private window. I
        use this to get around soft paywalls. Available at the
        <a href="https://microsoftedge.microsoft.com/addons/detail/privatise/kfconhabclnbnnjaapmdhnacnlonhgkl">
          Edge Extension Store
        </a>
        and the
        <a href="https://chrome.google.com/webstore/detail/privatise/hpiaebncpllkfbejofkbacblnnldcbgk">
          Chrome Extension Store
        </a>.
      </p>
    </section>
    <section className="flex flex-col space-y-2">
      <a href="https://judgeofcharacter.xyz" className="bloglist-title">
        Judge of Character
      </a>
      <p>
        A web game using client side tesseract and notepad libraries. It's
        frustratingly fun.
      </p>
    </section>
    <section className="flex flex-col space-y-2">
      <a
        href="https://pwa-share-target-revealer.lukewiwa.com/"
        className="bloglist-title"
      >
        PWA Share Target Data Revealer
      </a>
      <p>
        If you have a PWA installed on android you can register it as a
        <a href="https://web.dev/web-share-target/">share target</a>. For
        debugging purposes this PWA allows you to see exactly what type of data
        will be transferred through the share intent. Add this site to your
        homescreen from android chrome and then from any android app share to
        this PWA to reveal the data being transferred.
      </p>
    </section>
    <section className="flex flex-col space-y-2">
      <a href="https://shout.lukewiwa.com" className="bloglist-title">Shout!</a>
      <p>
        A proof of concept for the most basic Progressive Web App using React.
        Make text BIGGER.
      </p>
    </section>
    <section className="flex flex-col space-y-2">
      <a href="/projects/code-of-points" className="bloglist-title">
        Code of Points
      </a>
      <p>
        I wanted a machine readable code of points so I created a scraper with
        python and pulled out the relevant information. The most up to date
        version is available on github. Feel free to find any faults and send
        pull requests, due to the fickle nature of pdf scraping and my lack of
        experience coding there are bound to be errors.
      </p>
    </section>
    <section className="flex flex-col space-y-2">
      <a href="/projects/twitter-bot" className="bloglist-title">
        Twitter Bot
      </a>
      <p>
        I created a code of points gibberish bot using markov chains. The source
        code is quite simple and available on github.
      </p>
    </section>
  </div>
);

{
  /* <script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    useMeta({ title: "Wiwa - Projects" });
  },
});
</script> */
}
