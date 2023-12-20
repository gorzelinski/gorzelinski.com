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
        },
        bounceIn: {
          '20%': {
            transform: 'translateY(-8px)'
          },
          '40%': {
            transform: 'translateY(1px)'
          },
          '60%': {
            transform: 'translateY(-4px)'
          },
          '80%': {
            transform: 'translateY(0.5px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        buzz: {
          '10%': {
            transform: 'translateX(3px) rotate(2deg)'
          },
          '20%': {
            transform: 'translateX(-3px) rotate(-2deg)'
          },
          '30%': {
            transform: 'translateX(3px) rotate(2deg)'
          },
          '40%': {
            transform: 'translateX(-3px) rotate(-2deg)'
          },
          '50%': {
            transform: 'translateX(2px) rotate(1deg)'
          },
          '60%': {
            transform: 'translateX(-2px) rotate(-1deg)'
          },
          '70%': {
            transform: 'translateX(2px) rotate(1deg)'
          },
          '80%': {
            transform: 'translateX(-2px) rotate(-1deg)'
          },
          '90%': {
            transform: 'translateX(1px) rotate(0)'
          },
          '100%': {
            transform: 'translateX(-1px) rotate(0)'
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
