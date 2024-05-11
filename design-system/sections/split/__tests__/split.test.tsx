import { render, screen } from '@testing-library/react'
import { Split } from '../split'

describe('Split', () => {
  it('renders correctly', () => {
    render(<Split data-testid="split" />)

    const split = screen.getByTestId('split')

    expect(split).toBeInTheDocument()
  })
})
