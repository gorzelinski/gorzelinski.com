import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Logo } from '../logo'

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo lang="pl">Logo</Logo>)

    const logo = screen.getByRole('link')

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/pl')
    expect(logo).toHaveTextContent('Logo')
  })
})
