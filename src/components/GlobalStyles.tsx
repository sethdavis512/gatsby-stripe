import { createGlobalStyle } from 'styled-components'

// Initial colors
const white = '#ffffff'
const black = '#1F2D3D'

const lightBlue = '#85D7FF'
const blue = '#1FB6FF'
const darkBlue = '#009EEB'
const slate = '#3C4858'
const green = '#13CE66'

// Themes
export const lightTheme = {
    primary: darkBlue,
    secondary: lightBlue,
    tertiary: green,
    background: white,
    white,
    slate
}

export const darkTheme = {
    ...lightTheme,
    primary: blue,
    background: black
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
    }
`

export default GlobalStyles
