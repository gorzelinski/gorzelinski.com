import { render, screen } from '@testing-library/react'
import { Main } from '../main'

describe('Main', () => {
  it('renders correctly', () => {
    render(<Main />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
