import React from 'react'
import { withSiteData, Link, Head } from 'react-static'
import styled from 'styled-components'
import { Award, Settings, Smartphone, Twitter, Linkedin, GitHub } from 'react-feather'
import { media, maxWidth } from '../styles/variables'

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
    grid-template-columns: repeat(3, minmax(14em, ${maxWidth / 3}em));
    grid-template-rows: 1fr;
  `}
`
const InfoBlock = styled.div`
  margin: 1em;
`
const IconLink = styled.a`
  margin: 1em;
`

export default withSiteData(() => (
  <Layout>
    <Head><title>Wiwa</title></Head>
    <Hero>
      <h1 style={{ fontSize: '4rem', fontWeight: 20, textAlign: 'center' }}>Luke Wiwatowski</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 20, textAlign: 'center' }}>Gymnastics Engineering Miscellaneous</h2>
    </Hero>
    <Info>
      <InfoBlock>
        <h5><Award /> Gymnastics</h5>
        <p>
          Australian Representative for 15 years. 2010 Delhi Commonwealth Games Gold Medal winner. Various small projects revolving around <Link to="/gymnastics">gymnastics</Link>.
        </p>
      </InfoBlock>
      <InfoBlock>
        <h5><Settings /> Engineering</h5>
        <p>
          Bachelors in mechanical engineering from Swinburne University. Controls engineering at Alerton Australia. Lab Assistant for PV Lab Australia. Software Engineer for WSP Australia.
        </p>
      </InfoBlock>
      <InfoBlock>
        <h5><Smartphone /> Online</h5>
        <p>
          You can connect with me on the line using many different urls.
        </p>
        <p>
          <IconLink href="https://www.linkedin.com/in/lukewiwa/"><Linkedin /></IconLink>
          <IconLink href="https://github.com/lukewiwa/"><GitHub /></IconLink>
          <IconLink href="https://twitter.com/lukewiwa/"><Twitter /></IconLink>
        </p>
      </InfoBlock>
    </Info>
  </Layout>
))