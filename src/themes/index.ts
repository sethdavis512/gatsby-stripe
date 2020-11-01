import Color from 'color'

const background = Color('white')
const primary = Color('#ffbe3d')
const secondary = Color('tomato')
const fontColor = Color('#2d2d2d')

const backgroundInverted = Color('#2d2d2d')
const primaryInverted = primary.negate()
const secondaryInverted = secondary.negate()
const fontColorInverted = fontColor.negate()

export const lightTheme = {
    primary: primary.hex(),
    secondary: secondary.hex(),
    background: '#f2f2f2',
    fontColor,
    linkColor: 'red'
}

export const darkTheme = {
    primary: primaryInverted.hex(),
    secondary: secondaryInverted.hex(),
    background: backgroundInverted.hex(),
    fontColor: fontColorInverted.hex(),
    linkColor: 'purple'
}
