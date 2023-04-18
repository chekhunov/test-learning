import type {} from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    headline?: string
    stroke?: string
  }

  interface TypeBackground {
    grey?: string
    light?: string
    lightOrange?: string
    lightPink?: string
    lightBlue?: string
    lightYellow?: string
    yellowSecondary?: string
    blueSecondary?: string
    pinkSecondary?: string
    blueWhite?: string
    blueDark?: string
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    third: Palette['primary']
    stroke: Palette['primary']
  }
  interface PaletteOptions {
    third?: PaletteOptions['primary']
    stroke?: PaletteOptions['primary']
  }
}
