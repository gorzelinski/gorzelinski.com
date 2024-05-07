import { render } from '@testing-library/react'
import { Background } from '../background'

describe('Background', () => {
  it('renders correctly', () => {
    const { container } = render(<Background />)

    const background = container.firstChild

    expect(background).toHaveClass('bg_gray.900')
  })
})
