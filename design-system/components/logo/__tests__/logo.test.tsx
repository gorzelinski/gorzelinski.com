import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Logo } from '../logo'

describe('Logo', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Logo ariaLabel="Matthew Gorzelinski" lang="pl" />)

    const logo = screen.getByRole('link', { name: 'Matthew Gorzelinski' })

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/pl')
    expect(logo).toHaveTextContent('MG')
  })
})
