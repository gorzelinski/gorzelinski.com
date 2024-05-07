// Create test for Hero component
// Test if Hero component renders correctly

import { render } from '@testing-library/react'
import { Hero } from '../hero'

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />)

    const hero = container.firstChild

    expect(hero).toHaveClass('min-h_breakpoint-md')
  })
})
