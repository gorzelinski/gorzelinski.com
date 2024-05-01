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

  it('renders children', () => {
    render(<Callout>Children</Callout>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
