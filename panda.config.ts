import { defineConfig } from '@pandacss/dev'
import { semanticTokens, tokens } from './theme'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens,
    semanticTokens,
    extend: {}
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
