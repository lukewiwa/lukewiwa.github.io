import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const Container = styled.nav`
  border-bottom: 1px solid #f2f2f2;

  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3em 3em;
  grid-template-areas:
    "brand"
    "menu";
  justify-items: center;
  align-items: center;

  @media only screen and (min-width : 42em) {
    grid-template-columns: minmax(1em, 1fr) 20em minmax(auto, 20em) 20em minmax(1em, 1fr);
    grid-template-rows: 4em;
    grid-template-areas: ". brand . menu .";
  }

  a {
    color: #777;
  }
`

const Brand = styled.div`
  grid-area: brand;
  font-weight: 800;
  @media only screen and (min-width : 42em) {
    justify-self: start;
  }
`

const Menu = styled.div`
  grid-area: menu;
  @media only screen and (min-width : 42em) {
    justify-self: end;
  }
`

const Item = styled(Link)`
  margin: 1em;
  &.active {
    font-weight: 600;
  }
`

export default function Nav (props) {
  return (
    <Container>
      <Brand>
        <Link exact to="/">
          {props.title}
        </Link>
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
