import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    include: [
      'design-system/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'lib/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'scripts/**/*.{test,spec}.?(c|m)[jt]s?(x)'
    ],
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock']
        }
      }
    }
  }
})
