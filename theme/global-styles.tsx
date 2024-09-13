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
      width: 'token(spacing.m)',
      backgroundColor: 'gray.700',
      cursor: 'pointer',
      '&:horizontal': {
        borderRadius: 'xs',
        height: 'token(spacing.s)'
      }
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.600',
      borderRadius: 'xs',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'gray.500'
      },
      '&:active': {
        backgroundColor: 'gray.400'
      }
    }
  }
})
