import { render } from '@testing-library/react'
import { Split } from '../split'

describe('Split', () => {
  it('renders correctly', () => {
    const { container } = render(<Split />)

    const split = container.firstChild

    expect(split).toHaveClass('sm:grid-cols_1fr_1fr')
  })
})
