import { defineConfig } from '@pandacss/dev'
import { globalCss, keyframes, semanticTokens, tokens } from './theme'

export default defineConfig({
  preflight: true,
  include: [
    './design-system/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}'
  ],
  jsxFramework: 'react',
  exclude: [],
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  },
  globalCss,
  theme: {
    tokens,
    semanticTokens,
    extend: {
      keyframes
    }
  },
  outdir: 'styled-system'
})
