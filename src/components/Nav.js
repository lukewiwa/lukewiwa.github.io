import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media only screen and (max-width : 360px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`

export default function Nav (props) {
  return (
    <StyledNav>
      <div>
        <Link exact to="/">
          {props.title}
        </Link>
      </div>
      <div>
        {props.headings.map((heading, i) => {
          return (
            <span key={i}> 
              <Link to={`/${heading.link}`}>
                {heading.title}
              </Link>
            </span>
          )
        })}
      </div>
    </StyledNav>
  )
}
