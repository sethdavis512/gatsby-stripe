import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    transition: background-color 0.7s ease-out, color 0.7s ease-out;
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    transition: color 0.7s ease-out;
  }
`

export default GlobalStyles
