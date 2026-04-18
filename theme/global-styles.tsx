import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    scrollBehavior: 'smooth',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '::selection': {
      backgroundColor: 'primary.800',
      color: 'primary.300'
    },
    scrollbarWidth: 'thin',
    scrollbarColor: 'token(colors.gray.600) token(colors.gray.700)'
  }
})
