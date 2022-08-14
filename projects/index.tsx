import React from "react";

export const title = "Projects";
export const layout = "layouts/Base.tsx";

export default () => (
  <article>
    <section className="pb2">
      <h3>
        <a href="https://setfire.lukewiwa.com/">
        Set Fire to a Gif
        </a>
      </h3>
      <p>
        A website backed by an AWS Lambda function and S3. The functionality is pretty simple, input
        an image file and it should spit out an animated gif with an overlay of a flickering fire.
        This was an experiment in how I could shove django into a lambda function white stripping away
        as much of the django functionality as possible. Django here is <em>almost</em> stateless.
        The function relies on a sqlite database that is largely used as go between to easily
        keep track of the gif file and to generate an endpoint to show the processed gif. The source
        is available on <a href="https://github.com/lukewiwa/set-fire-to-emoji">github</a>.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="https://github.com/lukewiwa/privatise">
          Privatise Browser Extension
        </a>
      </h3>
      <p>
        A browser extension that does exactly one thing, adds an item to the
        context menu that will open the current tab in a new private window. I
        use this to get around soft paywalls. Available at the{" "}
        <a href="https://microsoftedge.microsoft.com/addons/detail/privatise/kfconhabclnbnnjaapmdhnacnlonhgkl">
          Edge Extension Store
        </a>{" "}
        and the{" "}
        <a href="https://chrome.google.com/webstore/detail/privatise/hpiaebncpllkfbejofkbacblnnldcbgk">
          Chrome Extension Store
        </a>.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="https://judgeofcharacter.xyz">
          Judge of Character
        </a>
      </h3>
      <p>
        A web game using client side tesseract and notepad libraries. It's
        frustratingly fun.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="https://pwa-share-target-revealer.lukewiwa.com/">
          PWA Share Target Data Revealer
        </a>
      </h3>
      <p>
        If you have a PWA installed on android you can register it as a{" "}
        <a href="https://web.dev/web-share-target/">share target</a>. For
        debugging purposes this PWA allows you to see exactly what type of data
        will be transferred through the share intent. Add this site to your
        homescreen from android chrome and then from any android app share to
        this PWA to reveal the data being transferred.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="https://shout.lukewiwa.com">
          Shout!
        </a>
      </h3>
      <p>
        A proof of concept for the most basic Progressive Web App using React.
        Make text BIGGER.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="/projects/code-of-points">
          Code of Points
        </a>
      </h3>
      <p>
        I wanted a machine readable code of points so I created a scraper with
        python and pulled out the relevant information. The most up to date
        version is available on github. Feel free to find any faults and send
        pull requests, due to the fickle nature of pdf scraping and my lack of
        experience coding there are bound to be errors.
      </p>
    </section>
    <section className="pb2">
      <h3>
        <a href="/projects/twitter-bot">
          Twitter Bot
        </a>
      </h3>
      <p>
        I created a code of points gibberish bot using markov chains. The source
        code is quite simple and available on github.
      </p>
    </section>
  </article>
);
