
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

//

export default () => (
  <div>
    <h1>Markov Twitter Bot</h1>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="newcodeofpoints"
    />
  </div>
)
