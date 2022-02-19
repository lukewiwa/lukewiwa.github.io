import React from "react";
import { Award, GitHub, Linkedin, Settings, Smartphone } from "react-feather";

export const layout = "layouts/Base.tsx";

export default () => (
  <>
    <section>
      <h1>Luke Wiwatowski</h1>
      <div>
        Gymnastics Engineering Miscellaneous
      </div>
    </section>
    <div>
      <div>
        <h2>
          <Award />
          <span>
            Gymnastics
          </span>
        </h2>
        <p>
          Australian Representative for 15 years. 2010 Delhi Commonwealth Games
          Gold Medal winner.
        </p>
      </div>
      <div>
        <h2>
          <Settings />
          <span>
            Engineering
          </span>
        </h2>
        <p>
          Bachelors in mechanical engineering from Swinburne University.
          Controls engineering at Alerton Australia. Lab Assistant for PV Lab
          Australia. Software Engineer for WSP Australia.
        </p>
      </div>
      <div>
        <h2>
          <Smartphone />
          <span>
            Online
          </span>
        </h2>
        <p>
          You can connect with me on the line using many different urls.{" "}
          <a href="https://www.linkedin.com/in/lukewiwa/">
            <Linkedin />
          </a>
          <a href="https://github.com/lukewiwa/">
            <GitHub />
          </a>
        </p>
      </div>
    </div>
  </>
);
