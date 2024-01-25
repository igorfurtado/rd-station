'use client'

import { createGlobalStyle } from 'styled-components'

import { colors, fonts } from './references'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.family.Nunito_Sans}, sans-serif;
  }

  body {
    background: ${colors.light};
    color: ${colors.dark};
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: ${colors.dark}
  }
`
