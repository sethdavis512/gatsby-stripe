import { createGlobalStyle } from 'styled-components'

// Initial colors
const white = '#ffffff'

const lightBlue = '#85D7FF'
const blue = '#1FB6FF'
const darkBlue = '#009EEB'

const lightGreen = '#29EB7F'
const green = '#13CE66'
const darkGreen = '#0F9F4F'

const snow = '#F9FAFC'
const darkSnow = '#EFF2F7'
const extraDarkSnow = '#E5E9F2'

const smoke = '#E0E6ED'
const darkSmoke = '#D3DCE6'
const extraDarkSmoke = '#C0CCDA'

const silver = '#8492A6'
const slate = '#3C4858'
const steel = '#273444'
const black = '#1F2D3D'

// Themes
export const lightTheme = {
    primary: darkGreen,
    secondary: lightGreen,
    tertiary: green,

    // Layout colors
    background: white,
    foreground: black,
    footerForeground: white,
    footerBackground: steel,

    // Component colors
    border: extraDarkSmoke,
    disabled: silver,
    hover: snow
}

export const darkTheme = {
    ...lightTheme,

    // Layout colors
    background: steel,
    foreground: white,
    footerBackground: black,

    // Component colors
    border: black,
    hover: slate
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
        background-color: ${({ theme }) => theme.background};
    }

    a {
        color: ${({ theme }) => theme.foreground};
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`

export default GlobalStyles
