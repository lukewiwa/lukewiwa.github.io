import styled from 'styled-components'

export const Title = styled.h1`
margin: 0;
text-align: center;
/* border-bottom-style: solid;
border-bottom-width: 1px;
border-color: #c9c9c9; */
padding: 0.5em 0;
`

export const Hero = styled.div`
  margin: 0;
  width: 100%;
  background-color: #BBF7CF;
  padding-bottom: 3em;
  grid-area: hero;
`

export const Info = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-area: info;
`
export const InfoBlock = styled.div`
  max-width: 25em;
  padding: 1em;
`
export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "hero"
    "info";


`
