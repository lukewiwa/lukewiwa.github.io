import React from 'react'
import { withSiteData } from 'react-static'
import { Hero, Info } from '../components/Styled'

export default withSiteData(() => [
  <Hero>
    <h1 style={{ fontSize: '4rem', fontWeight: 20, textAlign: 'center' }}>Luke Wiwatowski</h1>
    <h2 style={{ fontSize: '2rem', fontWeight: 20, textAlign: 'center' }}>Gymnastics Engineering Miscellaneous</h2>
  </Hero>,
  <Info>
    <div>I was an Australian Representative for 15 years, during the 2010 Delhi Commonwealth Games I was lucky enough to be part of the Men's gold medal winning team. I also do small projects revolving around gymnastics and the Code of Points more specifically.</div>
    <div>two asdkfgjn askjgfna a;fna ifaw a;fa </div>
    <div>three as;gfa a;orgifjawfj awo;rfjaw;ofjawo i</div>
  </Info>,
])
