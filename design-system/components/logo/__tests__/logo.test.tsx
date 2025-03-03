import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Logo } from '../logo'

describe('Logo', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Logo lang="pl">Logo</Logo>)

    const logo = screen.getByRole('link')

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/pl')
    expect(logo).toHaveTextContent('Logo')
  })
})
