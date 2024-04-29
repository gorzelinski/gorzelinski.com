import { render } from '@testing-library/react'
import { Callout } from '../callout'

describe('Callout', () => {
  it('renders the default variant', () => {
    const { container, getByTestId } = render(<Callout />)

    expect(container.firstChild).toHaveStyle(
      'background-color: var(--colors-primary-400)'
    )
    expect(getByTestId('information-circle')).toBeInTheDocument()
  })

  it('renders the success variant', () => {
    const { container, getByTestId } = render(<Callout variant="success" />)

    expect(getByTestId('checkmark-circle')).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(
      'background-color: var(--colors-success-400)'
    )
  })

  it('renders children', () => {
    const { getByText } = render(<Callout>Children</Callout>)
    expect(getByText('Children')).toBeInTheDocument()
  })
})
