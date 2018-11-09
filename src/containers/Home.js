import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  background-color: #BBF7CF;
  padding-bottom: 3em;
  grid-area: hero;
`

const Info = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-area: info;
`
const InfoBlock = styled.div`
  max-width: 30em;
  padding: 1em;
`
const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "hero"
    "info";
`

export default withSiteData(() => (
  <Layout>
    <Hero>
      <h1 style={{ fontSize: '4rem', fontWeight: 20, textAlign: 'center' }}>Luke Wiwatowski</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 20, textAlign: 'center' }}>Gymnastics Engineering Miscellaneous</h2>
    </Hero>
    <Info>
      <InfoBlock>I was an Australian Representative for 15 years, during the 2010 Delhi Commonwealth Games I was lucky enough to be part of the Men's gold medal winning team. I also do small projects revolving around gymnastics and the Code of Points more specifically.</InfoBlock>
      <InfoBlock>I graduated from Swinburne University with a Bachelors in mechanical engineering. Experience in controls engineering at Alerton Australia. Lab Assistant for PV Lab Australia. Graduate Civil Engineer for Opus/WSP Australia.</InfoBlock>
      <InfoBlock>You can connect with me on the line using many different urls.</InfoBlock>
    </Info>
  </Layout>
))
