import { defineConfig } from '@pandacss/dev'
import { semanticTokens, tokens } from './theme'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],

  // Enable JSX syntax
  jsxFramework: 'react',

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens,
    semanticTokens,
    extend: {
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        wobble: {
          '16%': {
            transform: 'translateX(6px)'
          },
          '33%': {
            transform: 'translateX(-5px)'
          },
          '49%': {
            transform: 'translateX(4px)'
          },
          '66%': {
            transform: 'translateX(-2px)'
          },
          '83%': {
            transform: 'translateX(1px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
