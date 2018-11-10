import { css } from 'styled-components'

export const minWidth = 42
export const colWidth = 50
export const mainColour = '#04872F'
export const secondColour = '#FFFFFC'
export const thirdColour = '#DBDBDB'
export const headingColour = '#2C363F'
export const textColour = '#353535'

export const media = {
  desktop: (...args) => css`
    @media only screen and (min-width: ${minWidth}em) {
      ${css(...args)};
    }
  `,
  column: (...args) => css`
  @media only screen and (min-width: ${colWidth}em) {
    ${css(...args)};
  }
`,
}
