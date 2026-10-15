import type { ReactNode } from "react";
import { Base } from "../components/Base";

const Project = ({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: ReactNode;
}) => (
  <section>
    <h2 className="mb-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
      <a href={url} className="hover:text-sky-700 dark:hover:text-sky-400">
        {title}
      </a>
    </h2>
    <div className="leading-relaxed [&_a]:text-sky-700 [&_a]:underline dark:[&_a]:text-sky-400">
      {children}
    </div>
  </section>
);

export const Projects = () => (
  <Base url="/projects/" title="Projects">
    <div className="space-y-10">
      <Project url="https://setfire.lukewiwa.com/" title="Set Fire to a Gif">
        <p>
          A website backed by an AWS Lambda function and S3. The functionality
          is pretty simple, input an image file and it should spit out an
          animated gif with an overlay of a flickering fire. This was an
          experiment in how I could shove django into a lambda function white
          stripping away as much of the django functionality as possible. Django
          here is <em>almost</em> stateless. The function relies on a sqlite
          database that is largely used as go between to easily keep track of
          the gif file and to generate an endpoint to show the processed gif.
          The source is available on{" "}
          <a href="https://github.com/lukewiwa/set-fire-to-emoji">github</a>.
        </p>
      </Project>
      <Project
        url="https://github.com/lukewiwa/privatise"
        title="Privatise Browser Extension"
      >
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
          </a>
          .
        </p>
      </Project>
      <Project url="https://judgeofcharacter.xyz" title="Judge of Character">
        <p>
          A web game using client side tesseract and notepad libraries. It's
          frustratingly fun.
        </p>
      </Project>
      <Project
        url="https://pwa-share-target-revealer.lukewiwa.com/"
        title="PWA Share Target Data Revealer"
      >
        <p>
          If you have a PWA installed on android you can register it as a{" "}
          <a href="https://web.dev/web-share-target/">share target</a>. For
          debugging purposes this PWA allows you to see exactly what type of
          data will be transferred through the share intent. Add this site to
          your homescreen from android chrome and then from any android app
          share to this PWA to reveal the data being transferred.
        </p>
      </Project>
      <Project url="https://shout.lukewiwa.com" title="Shout!">
        <p>
          A proof of concept for the most basic Progressive Web App using React.
          Make text BIGGER.
        </p>
      </Project>
      <Project url="/projects/code-of-points/" title="Code of Points">
        <p>
          I wanted a machine readable code of points so I created a scraper with
          python and pulled out the relevant information. The most up to date
          version is available on github. Feel free to find any faults and send
          pull requests, due to the fickle nature of pdf scraping and my lack of
          experience coding there are bound to be errors.
        </p>
      </Project>
      <Project url="/projects/twitter-bot/" title="Twitter Bot">
        <p>
          I created a code of points gibberish bot using markov chains. The
          source code is quite simple and available on github.
        </p>
      </Project>
    </div>
  </Base>
);

export const TwitterBot = () => (
  <Base url="/projects/twitter-bot/" title="Twitter Bot">
    <a
      className="twitter-timeline"
      href="https://twitter.com/newcodeofpoints?ref_src=twsrc%5Etfw"
    >
      Tweets by newcodeofpoints
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
  </Base>
);
