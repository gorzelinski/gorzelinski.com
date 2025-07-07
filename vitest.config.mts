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
      'hooks/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'lib/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'scripts/**/*.{test,spec}.?(c|m)[jt]s?(x)'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'design-system/**/*.{js,jsx,ts,tsx}',
        'hooks/**/*.{js,jsx,ts,tsx}',
        'lib/**/*.{js,jsx,ts,tsx}'
      ],
      exclude: [
        'design-system/elements/**',
        'design-system/icons/**',
        '**/*.styles.tsx',
        '**/*.types.tsx',
        '**/index.tsx'
      ],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  }
})
