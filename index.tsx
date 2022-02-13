import React from "react";

export const layout = "layouts/Base.tsx";

export default () => (
  <div>
    <header className="flex flex-col pt-10 pb-20 space-y-4 bg-teal-100">
      <h1 className="text-center text-5xl">Luke Wiwatowski</h1>
      <div className="text-center text-2xl text-gray-600 font-light">
        Gymnastics Engineering Miscellaneous
      </div>
    </header>
    <div className="grid grid-flow-row grid-rows-auto sm:grid-cols-1 md:grid-cols-3 gap-3 p-4 container mx-auto text-gray-600 font-light">
      <div>
        <h2 className="flex">
          {/* <AwardIcon /> */}
          <span className="text-lg ml-2 mb-4 font-medium text-gray-700">
            Gymnastics
          </span>
        </h2>
        <p>
          Australian Representative for 15 years. 2010 Delhi Commonwealth Games
          Gold Medal winner.
        </p>
      </div>
      <div>
        <h2 className="flex">
          {/* <SettingsIcon /> */}
          <span className="text-lg ml-2 mb-4 font-medium text-gray-700">
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
        <h2 className="flex">
          {/* <SmartphoneIcon /> */}
          <span className="text-lg ml-2 mb-4 font-medium text-gray-700">
            Online
          </span>
        </h2>
        <p>You can connect with me on the line using many different urls.</p>
        <p className="flex space-x-2">
          <a href="https://www.linkedin.com/in/lukewiwa/">
            {/* <LinkedinIcon /> */}
          </a>
          <a href="https://github.com/lukewiwa/">
            {/* <GithubIcon /> */}
          </a>
        </p>
      </div>
    </div>
  </div>
);
