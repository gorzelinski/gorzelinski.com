import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Callout } from '../callout'

describe('Callout', () => {
  it('renders the default variant', () => {
    render(<Callout />)

    expect(screen.getByTestId('information-circle')).toBeInTheDocument()
  })

  it('renders the success variant', () => {
    render(<Callout variant="success" />)

    expect(screen.getByTestId('checkmark-circle')).toBeInTheDocument()
  })

  it('renders the warning variant', () => {
    render(<Callout variant="warning" />)

    expect(screen.getByTestId('warning')).toBeInTheDocument()
  })

  it('renders the danger variant', () => {
    render(<Callout variant="danger" />)

    expect(screen.getByTestId('alert-circle')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Callout>Children</Callout>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
