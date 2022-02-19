import React from "react";

export const title = "Twitter Bot";
export const layout = "layouts/Base.tsx";

export default () => (
  <div className="container-lg">
    <a
      className="twitter-timeline"
      href="https://twitter.com/newcodeofpoints?ref_src=twsrc%5Etfw"
    >
      Tweets by newcodeofpoints
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8">
    </script>
  </div>
);
