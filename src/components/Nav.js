import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import { minWidth, mainColour, secondColour, thirdColour } from '../styles/variables'

const Container = styled.nav`
  background-color: ${mainColour};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3em 3em;
  grid-template-areas:
    "brand"
    "menu";
  align-items: center;
  justify-items: center;
  @media only screen and (min-width : ${minWidth}em) {
    grid-template-columns: minmax(1em, 1fr) 20em minmax(auto, 20em) 20em minmax(1em, 1fr);
    grid-template-rows: 4em;
    grid-template-areas: ". brand . menu .";
  }

  a {
    color: ${secondColour};
  }
`

const Brand = styled.div`
  margin: 1em;
  grid-area: brand;
  font-size: 1.2rem;
  @media only screen and (min-width : ${minWidth}em) {
    justify-self: start;

  }
`

const Menu = styled.div`
  grid-area: menu;
  @media only screen and (min-width : ${minWidth}em) {
    justify-self: end;
  }
`

const Item = styled(Link)`
  padding: 0.5em 0;
  margin: 0 0.5em;
  &:hover {
    text-decoration: none;
    color: ${thirdColour};
  }
  &.active {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: ${secondColour};
  }
`

export default function Nav(props) {
  return (
    <Container>
      <Brand>
        <Item exact to="/">
          {props.title}
        </Item>
      </Brand>
      <Menu>
        {props.headings.map((heading, i) => (

          <Item key={i} to={`/${heading.link}`}>
            {heading.title}
          </Item>

        ))}
      </Menu>
    </Container>
  )
}
