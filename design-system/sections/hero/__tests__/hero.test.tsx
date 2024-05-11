import { render, screen } from '@testing-library/react'
import { Hero } from '../hero'

describe('Hero', () => {
  it('renders correctly', () => {
    render(<Hero data-testid="hero" />)

    const hero = screen.getByTestId('hero')

    expect(hero).toBeInTheDocument()
  })
})
