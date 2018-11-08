import React from 'react'
import { Link } from 'react-static'
//

export default () => (
  <div>
    <h1>Gymnastics Projects.</h1>
    <span>
      <h4>
        <Link to="/gymnastics/MAG2020">MAG 2020</Link>
      </h4>
      <p>
        I wanted a machine readable code of points so I created a scraper with python and pulled out the relevant information. The most up to date version is available on github. Feel free to find any faults and send pull requests, due to the fickle nature of pdf scraping and my lack of experience coding there are bound to be errors.
      </p>
    </span>
    <span>
      <h4>
        <Link to="/gymnastics/markov">Twitter Bot</Link>
      </h4>
      <p>
        I created a code of points gibberish bot using markov chains. The source code is quite simple and available on github.
      </p>
    </span>
  </div>
)
