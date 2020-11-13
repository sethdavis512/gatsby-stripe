import { createGlobalStyle } from 'styled-components'

// Initial colors
const white = '#ffffff'
const black = '#1F2D3D'

const lightBlue = '#85D7FF'
const blue = '#1FB6FF'
const darkBlue = '#009EEB'

const lightGreen = '#29EB7F'
const green = '#13CE66'
const darkGreen = '#0F9F4F'

const slate = '#3C4858'

// Themes
export const lightTheme = {
    primary: darkBlue,
    secondary: lightBlue,
    tertiary: green,

    background: white,
    foreground: black
}

export const darkTheme = {
    ...lightTheme,
    background: black,
    foreground: white
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

    a {
        color: ${({ theme }) => theme.foreground};
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`

export default GlobalStyles
