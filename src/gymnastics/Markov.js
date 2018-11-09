
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Title } from '../styles/Styled'
//

export default () => (
  <div className="flex-center">
    <div className="container">
      <Title>Markov Twitter Bot</Title>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="newcodeofpoints"
      />
    </div>
  </div>
)
