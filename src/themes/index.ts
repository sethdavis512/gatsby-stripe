import Color from 'color'

// Color utils
const getHex = (colorObj) => colorObj.hex();
const getInvertedHex = (colorObj) => colorObj.negate().hex();

// Initial colors
const white = Color('#ffffff')
const lightGrey = white.darken(0.25)
const grey = white.darken(0.5)
const darkGrey = white.darken(0.75)
const darkerGrey = white.darken(0.85)
const black = white.darken(1)

const blue = Color('dodgerblue')
const green = Color('forestgreen')

// Derived colors
const primary = blue
const secondary = green

// Generic variables
const background = white
const borderRadius = 12 
const fontColor = darkGrey
const linkColor = grey

// Themes
export const lightTheme = {
    primary: getHex(primary),
    secondary: getHex(secondary),
    background: getHex(background),
    borderRadius,
    cardBackground: getHex(white),
    borderColor: getHex(lightGrey),
    fontColor: getHex(fontColor),
    linkColor: getHex(linkColor),
}

export const darkTheme = {
    ...lightTheme,
    background: getHex(darkGrey),
    cardBackground: getHex(darkerGrey),
    borderColor: getHex(black),
    fontColor: getHex(white),
    linkColor: getHex(lightGrey),
}
