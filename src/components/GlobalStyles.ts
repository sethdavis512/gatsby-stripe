import { createGlobalStyle } from 'styled-components'

import "@fontsource/montserrat/800.css"
import "@fontsource/catamaran/400.css"
import "@fontsource/catamaran/800.css"

// Initial colors
const white = '#ffffff'

const lightBlue = '#85D7FF'
const blue = '#1FB6FF'
const darkBlue = '#009EEB'

const lightGreen = '#13CE66'
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

const red = '#FF4949'

// Themes
export const lightTheme = {
    // General palette
    primary: darkGreen,
    secondary: lightGreen,
    tertiary: green,

    black,
    white,
    steel,
    red,

    // Layout colors
    background: white,
    foreground: black,

    // Component colors
    border: extraDarkSmoke,
    disabled: silver,
    hover: snow,

    // Borders
    borderRadius: '12px'
}

export const darkTheme = {
    ...lightTheme,

    // Layout colors
    background: steel,
    foreground: white,

    // Component colors
    border: black,
    hover: slate
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Catamaran", Helvetica, sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.foreground};
        background-color: ${({ theme }) => theme.background};
        transition: background-color 0.5s, color 0.5s;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Montserrat", Helvetica, sans-serif;
    }

    a {
        color: ${({ theme }) => theme.foreground};
        text-decoration: none;
    }

    img {
        width: 100%;
        max-width: 100%;
    }
`

export default GlobalStyles
