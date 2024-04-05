import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '::selection': {
      backgroundColor: 'primary.800',
      color: 'primary.300'
    },
    '::-webkit-scrollbar': {
      cursor: 'pointer',
      backgroundColor: 'gray.700',
      width: 'token(spacing.m)',
      '&:horizontal': {
        borderRadius: 'xs',
        height: 'token(spacing.s)'
      }
    },
    '::-webkit-scrollbar-thumb': {
      cursor: 'pointer',
      backgroundColor: 'gray.600',
      borderRadius: 'xs',
      '&:hover': {
        backgroundColor: 'gray.500'
      },
      '&:active': {
        backgroundColor: 'gray.400'
      }
    }
  }
})
