/// <reference types="vitest" />

import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('server-only', () => {
  return {
    default: {}
  }
})
