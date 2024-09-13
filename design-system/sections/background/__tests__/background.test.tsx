import { render, screen } from '@testing-library/react'
import { Background } from '../background'

describe('Background', () => {
  it('renders correctly', () => {
    render(<Background data-testid="background" />)

    const background = screen.getByTestId('background')

    expect(background).toBeInTheDocument()
  })
})
