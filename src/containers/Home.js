import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { Award, Settings, Smartphone } from 'react-feather'
import { media } from '../styles/variables'

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "hero"
    "info";
`

const Hero = styled.div`
  width: 100%;
  background-color: #BBF7CF;
  padding-bottom: 3em;
  grid-area: hero;
`

const Info = styled.div`
  grid-area: info;
  display: grid;
  grid-template-areas: 
    "."
    "."
    ".";
  justify-content: center;
  ${media.column`
    grid-template-areas: "." "." ".";
    grid-template-columns: repeat(3, minmax(14em, 20em));
    grid-template-rows: 1fr;
  `}
`
const InfoBlock = styled.div`
  margin: 1em;
`

export default withSiteData(() => (
  <Layout>
    <Hero>
      <h1 style={{ fontSize: '4rem', fontWeight: 20, textAlign: 'center' }}>Luke Wiwatowski</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 20, textAlign: 'center' }}>Gymnastics Engineering Miscellaneous</h2>
    </Hero>
    <Info>
      <InfoBlock>
        <h5><Award /> Gymnastics</h5>
        <p>
          I was an Australian Representative for 15 years, during the 2010 Delhi Commonwealth Games I was lucky enough to be part of the Men's gold medal winning team. I also do small projects revolving around gymnastics and the Code of Points more specifically.
        </p>
      </InfoBlock>
      <InfoBlock>
        <h5><Settings /> Engineering</h5>
        <p>
          I graduated from Swinburne University with a Bachelors in mechanical engineering. Experience in controls engineering at Alerton Australia. Lab Assistant for PV Lab Australia. Graduate Civil Engineer for Opus/WSP Australia.
        </p>
      </InfoBlock>
      <InfoBlock>
        <h5><Smartphone /> Online</h5>
        <p>
        You can connect with me on the line using many different urls.
        </p>
      </InfoBlock>
    </Info>
  </Layout>
))
